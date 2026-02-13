'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Textarea } from '@/components/ui';
import { siteContent } from '@/content/site';
import { CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  subject: z.string().min(3, 'Konu en az 3 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Demo mode - just show success message
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
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
          Demo modu: Bu bir demo sitesidir. Gerçek bir gönderim yapılmadı.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Yeni Mesaj Gönder
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
      <Textarea
        label="Mesaj"
        placeholder="Mesajınızı buraya yazın..."
        rows={6}
        error={errors.message?.message}
        {...register('message')}
      />
      <div className="flex items-center gap-4">
        <Button type="submit" loading={isSubmitting}>
          Gönder
        </Button>
        <p className="text-sm text-muted-foreground">
          * Tüm alanlar zorunludur
        </p>
      </div>
    </form>
  );
}
