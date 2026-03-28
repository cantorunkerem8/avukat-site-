import { NextResponse } from 'next/server';
import otpGenerator from 'otp-generator';
import crypto from 'crypto';

const BREVO_API_KEY = 'xsmtpsib-00366b5790be4df927b9c9780000a6e8df8186105c3175c08f43063f27116801-Oq6JcM1I8r0S4pY7';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
            digits: true,
        });

        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: { name: 'Bozoglan Hukuk', email: 'info@bozoglanavukatlik.com' },
                to: [{ email: email }],
                subject: 'Dogrulama Kodunuz - Bozoglan Hukuk',
                htmlContent: '<div style="font-family:sans-serif;padding:20px;border:1px solid #eee;border-radius:10px"><h2>Dogrulama Kodunuz</h2><p style="font-size:24px;font-weight:bold;letter-spacing:5px;color:#333">' + otp + '</p><p>Bu kodu iletisim formunu onaylamak icin kullaniniz.</p><p style="color:#888;font-size:12px">Bu kodu siz talep etmediyseniz dikkate almayiniz.</p></div>',
            }),
        });

        if (!res.ok) {
            const errBody = await res.text();
            throw new Error('Brevo API: ' + errBody);
        }

        const expiry = Date.now() + 5 * 60 * 1000;
        const data = `${email}.${otp}.${expiry}`;
        const hash = crypto.createHmac('sha256', 'bozoglan-secret-2026').update(data).digest('hex');

        return NextResponse.json({ hash: `${hash}.${expiry}`, email });
    } catch (error) {
        console.error('Error sending OTP:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to send OTP',
            details: error,
        }, { status: 500 });
    }
}
