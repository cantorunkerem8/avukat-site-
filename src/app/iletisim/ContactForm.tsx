'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Textarea } from '@/components/ui';
import { siteContent } from '@/content/site';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  subject: z.string().min(3, 'Konu en az 3 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır').max(300, 'Mesaj 300 karakterden uzun olamaz'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const message = watch('message', '');
  const charCount = message?.length || 0;

  const handleSendOtp = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'OTP gönderilemedi');
      }

      setHash(result.hash);
      setOtpSent(true);
    } catch (error) {
      console.error('OTP Error:', error);
      alert('Doğrulama kodu gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndSubmit = async () => {
    if (!otp || otp.length !== 6) {
      alert('Lütfen 6 haneli doğrulama kodunu giriniz.');
      return;
    }

    setLoading(true);
    try {
      const formData = getValues();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, otp, hash }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Doğrulama başarısız');
      }

      setIsSubmitted(true);
      reset();
      setOtpSent(false);
      setOtp('');
      setHash('');
    } catch (error) {
      console.error('Verification Error:', error);
      alert('Doğrulama kodu hatalı veya süresi dolmuş.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-serif font-medium text-foreground mb-2">
          Mesajınız Gönderildi
        </h3>
        <p className="text-muted-foreground mb-4">
          Mesajınız başarıyla tarafımıza ulaşmıştır. En kısa sürede dönüş yapılacaktır.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Yeni Mesaj Gönder
        </Button>
      </div>
    );
  }

  const handlePaste = async (e: React.ClipboardEvent) => {
    // Prevent default paste to force using the Clipboard API
    e.preventDefault();

    try {
      // This explicitly requests permission to read the clipboard
      const text = await navigator.clipboard.readText();

      // Manually insert text into the focused input
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (target) {
        // Use setRangeText to preserve cursor position behavior mostly
        // Use setRangeText to preserve cursor position behavior mostly
        target.setRangeText(text);
        // Dispatch input event to ensure React Hook Form captures the change
        target.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('Paste successful, permission granted');
      }
    } catch (err) {
      console.error('Paste permission denied or failed:', err);
      // Optional: Show a toast or alert saying "Paste permission is required"
      alert('Yapıştırma işlemi için panoya erişim izni vermelisiniz.');
    }
  };

  if (otpSent) {
    return (
      <div className="space-y-6 text-center">
        <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
          <h3 className="text-lg font-medium text-foreground mb-2">E-posta Doğrulama</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Lütfen <strong>{getValues('email')}</strong> adresine gönderilen 6 haneli doğrulama kodunu giriniz.
          </p>

          <div className="max-w-[200px] mx-auto mb-6">
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
              placeholder="123456"
              className="text-center text-lg tracking-widest"
              autoFocus
            />
          </div>

          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => setOtpSent(false)}>
              Geri Dön
            </Button>
            <Button onClick={handleVerifyAndSubmit} loading={loading}>
              Doğrula ve Gönder
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleSendOtp)} onPaste={handlePaste} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Ad Soyad"
          placeholder="Adınız Soyadınız"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="E-posta"
          type="email"
          placeholder="ornek@email.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Telefon"
          type="tel"
          placeholder="+90 5XX XXX XX XX"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          label="Konu"
          placeholder="Mesajınızın konusu"
          error={errors.subject?.message}
          {...register('subject')}
        />
      </div>
      <div className="relative">
        <Textarea
          label="Mesaj"
          placeholder="Mesajınızı buraya yazın..."
          rows={6}
          maxLength={300}
          error={errors.message?.message}
          {...register('message')}
        />
        <div className={cn(
          "absolute bottom-3 right-3 text-xs font-medium px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-border shadow-sm transition-colors duration-300",
          charCount >= 280 ? "text-red-500 border-red-200" :
            charCount >= 200 ? "text-yellow-500 border-yellow-200" :
              "text-green-500 border-green-200"
        )}>
          {charCount}/300
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" loading={loading}>
          Devam Et
        </Button>
        <p className="text-sm text-muted-foreground">
          * Doğrulama kodu e-postanıza gönderilecektir.
        </p>
      </div>
    </form>
  );
}
