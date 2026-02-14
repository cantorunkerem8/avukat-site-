import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(req: Request) {
    try {
        const { formData, otp, hash } = await req.json();
        const { email, name, phone, subject, message } = formData;

        if (!email || !otp || !hash) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // 1. Verify OTP
        const [hashValue, expiry] = hash.split('.');
        const now = Date.now();

        if (now > parseInt(expiry)) {
            return NextResponse.json({ error: 'OTP expired' }, { status: 400 });
        }

        const data = `${email}.${otp}.${expiry}`;
        const newHash = crypto
            .createHmac('sha256', process.env.OTP_SECRET || 'secret')
            .update(data)
            .digest('hex');

        if (newHash !== hashValue) {
            return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
        }

        // 2. OTP is valid! Send the actual message to Admin
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send to Admin
        await transporter.sendMail({
            from: `"Bozoglan Hukuk Sitesi" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL || 'info@bozoglanavukatlik.com', // Admin receives this
            replyTo: email, // If admin replies, it goes to the user
            subject: `Yeni İletişim Mesajı: ${subject}`,
            text: `
        Yeni bir iletişim formu mesajı alındı.
        
        Gönderen: ${name}
        E-posta: ${email}
        Telefon: ${phone}
        Konu: ${subject}
        
        Mesaj:
        ${message}
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Yeni İletişim Mesajı</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Konu:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px;">Mesaj:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
