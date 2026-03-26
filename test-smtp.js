const nodemailer = require('nodemailer');

const configs = [
    { name: 'Port 465, UTF-8 User, Secure', host: 'smtp.maillb.com', port: 465, secure: true, user: 'av.ali@bozoğlanhukuk.com.tr' },
    { name: 'Port 587, UTF-8 User, STARTTLS', host: 'smtp.maillb.com', port: 587, secure: false, user: 'av.ali@bozoğlanhukuk.com.tr' },
    { name: 'Port 465, Punycode User, Secure', host: 'smtp.maillb.com', port: 465, secure: true, user: 'av.ali@xn--bozolanhukuk-s9b.com.tr' },
    { name: 'Port 587, Punycode User, STARTTLS', host: 'smtp.maillb.com', port: 587, secure: false, user: 'av.ali@xn--bozolanhukuk-s9b.com.tr' },
    { name: 'Port 465, Plain User (No Domain), Secure', host: 'smtp.maillb.com', port: 465, secure: true, user: 'av.ali' },
];

const passwords = [
    'qybF{4FUq89l]',
    'qybF{4FUq89l',
    'qybF{4FUq891]',
    'qybF{4FUq891',
    'qybF{4FUq89I]',
    'qybF{4FUq89I',
];

async function test() {
    for (const pass of passwords) {
        for (const config of configs) {
            console.log(`\n--- Testing: ${config.name} | Password: ${pass} ---`);
            const transporter = nodemailer.createTransport({
                host: config.host,
                port: config.port,
                secure: config.secure,
                auth: {
                    user: config.user,
                    pass: pass,
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            try {
                await transporter.verify();
                console.log(`✅ SUCCESS: ${config.name} with password ${pass} works!`);
                process.exit(0);
            } catch (error) {
                // Keep testing
            }
        }
    }
    console.log('\n❌ ALL VARIATIONS FAILED');
}

test();
