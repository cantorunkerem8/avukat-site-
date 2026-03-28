import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const { formData, otp, hash } = await req.json();
    const { email, name, phone, subject, message } = formData;

    if (!email || !otp || !hash) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const [hashValue, expiry] = hash.split('.');
    const now = Date.now();

    if (now > parseInt(expiry)) {
      return NextResponse.json({ error: 'OTP expired' }, { status: 400 });
    }

    const data = `${email}.${otp}.${expiry}`;
    const newHash = crypto.createHmac('sha256', process.env.OTP_SECRET || 'bozoglan-secret-2026').update(data).digest('hex');

    if (newHash !== hashValue) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Web Form', email: 'keremcantorun44@gmail.com' },
        to: [{ email: 'av.ali@xn--bozolanhukuk-gyb.com.tr' }],
        replyTo: { email: email, name: name },
        subject: 'Yeni Iletisim Mesaji: ' + subject,
        htmlContent: '<div style="font-family:sans-serif;padding:20px"><h2>Yeni Iletisim Mesaji</h2><p><strong>Ad Soyad:</strong> ' + name + '</p><p><strong>E-posta:</strong> ' + email + '</p><p><strong>Telefon:</strong> ' + phone + '</p><p><strong>Konu:</strong> ' + subject + '</p><hr><h3>Mesaj:</h3><p>' + message + '</p></div>',
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error('Brevo API: ' + errBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Failed to process request',
      details: error,
    }, { status: 500 });
  }
}
