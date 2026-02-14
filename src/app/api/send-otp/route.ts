import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import otpGenerator from 'otp-generator';
import crypto from 'crypto';

// Remove older "server-only" if present or just keep it simple.
// In Next.js App Router, route handlers run on server by default.

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // 1. Generate OTP (6 digits, numbers only)
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
            digits: true,
        });

        // 2. Configure Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 3. Send Email
        await transporter.sendMail({
            from: `"Bozoglan Hukuk" <${process.env.SMTP_USER}>`, // Recommended by Brevo
            to: email, // Send OTP to the user
            subject: 'Doğrulama Kodunuz - Bozoglan Hukuk',
            text: `Doğrulama Kodunuz: ${otp}\n\nBu kodu iletişim formunu onaylamak için kullanınız.`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2>Doğrulama Kodunuz</h2>
          <p style="font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #333;">${otp}</p>
          <p>Bu kodu sitenizdeki iletişim formunu onaylamak için kullanınız.</p>
          <p style="color: #888; font-size: 12px;">Bu kodu siz talep etmediyseniz, lütfen dikkate almayınız.</p>
        </div>
      `,
        });

        // 4. Create Hash for stateless verification
        // Hash = SHA256(email + otp + secret + expiry)
        // Expiry = Current Time + 5 minutes
        const expiry = Date.now() + 5 * 60 * 1000;
        const data = `${email}.${otp}.${expiry}`;
        const hash = crypto
            .createHmac('sha256', process.env.OTP_SECRET || 'secret')
            .update(data)
            .digest('hex');

        // Return hash and expiry to client
        return NextResponse.json({ hash: `${hash}.${expiry}`, email });

    } catch (error) {
        console.error('Error sending OTP:', error);
        return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
    }
}
