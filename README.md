# Güven Hukuk Bürosu - Premium Law Firm Website

Modern, premium bir hukuk bürosu web sitesi. Next.js 14, TypeScript, TailwindCSS ve Framer Motion ile geliştirilmiştir.

## Özellikler

- 🎨 **Premium Tasarım**: Minimal luxury estetik, gold/bronze vurgular
- ⚡ **Yüksek Performans**: Next.js 14 App Router, optimize edilmiş görseller
- 🔍 **SEO Uyumlu**: Metadata, sitemap, robots.txt, OpenGraph
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- 🎭 **Animasyonlar**: Framer Motion ile ince geçişler
- 📝 **Form Doğrulama**: React Hook Form + Zod
- 🌙 **Dark Mode**: Opsiyonel karanlık tema (CSS değişkenleriyle hazır)
- ♿ **Erişilebilirlik**: Semantic HTML, ARIA labels, focus ring

## Kurulum

### Gereksinimler

- Node.js 18.17 veya üzeri
- pnpm (önerilen) veya npm

### Adımlar

1. **Bağımlılıkları yükleyin:**

```bash
pnpm install
# veya
npm install
```

2. **Geliştirme sunucusunu başlatın:**

```bash
pnpm dev
# veya
npm run dev
```

3. **Tarayıcıda açın:**

[http://localhost:3000](http://localhost:3000)

## Production Build

```bash
pnpm build
pnpm start
```

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Ana sayfa
│   ├── hakkimizda/         # Hakkımızda sayfası
│   ├── hizmetler/          # Hizmetler sayfaları
│   │   ├── page.tsx        # Liste
│   │   └── [slug]/page.tsx # Detay
│   ├── ekibimiz/           # Ekip sayfaları
│   │   ├── page.tsx        # Liste
│   │   └── [slug]/page.tsx # Detay
│   ├── blog/               # Blog sayfaları
│   │   ├── page.tsx        # Liste
│   │   └── [slug]/page.tsx # Detay
│   ├── sss/                # Sık Sorulan Sorular
│   ├── iletisim/           # İletişim formu
│   ├── gizlilik/           # Gizlilik politikası
│   ├── kvkk/               # KVKK aydınlatma metni
│   ├── sitemap.ts          # Dinamik sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # 404 sayfası
│   └── loading.tsx         # Loading skeleton
├── components/
│   ├── ui/                 # Temel UI bileşenleri
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Accordion.tsx
│   │   └── Skeleton.tsx
│   ├── layout/             # Layout bileşenleri
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumbs.tsx
│   └── sections/           # Sayfa bölümleri
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Team.tsx
│       ├── Testimonials.tsx
│       ├── Blog.tsx
│       └── CTA.tsx
├── content/
│   └── site.ts             # Tüm içerik verisi
├── lib/
│   └── utils.ts            # Yardımcı fonksiyonlar
├── types/
│   └── index.ts            # TypeScript tipleri
└── styles/
    └── globals.css         # Global stiller
```

## İçerik Düzenleme

Tüm içerik `src/content/site.ts` dosyasından yönetilir:

### Ofis Bilgileri

```typescript
office: {
  name: 'Güven Hukuk Bürosu',
  slogan: 'Güvenilir çözümler, profesyonel hizmet',
  address: 'Levent Mah. Büyükdere Cad. No:123, Şişli, İstanbul',
  phone: '+90 212 123 45 67',
  email: 'info@guvenhukuk.com',
  // ...
}
```

### Hizmetler

```typescript
services: [
  {
    id: '1',
    title: 'Ceza Hukuku',
    slug: 'ceza-hukuku',
    shortDescription: '...',
    longDescription: '...',
    icon: 'scale',
    keywords: ['ceza avukatı', 'ceza davası'],
    relatedServices: ['2', '4'],
    relatedTeamMembers: ['1', '2'],
  },
  // ...
]
```

### Ekip Üyeleri

```typescript
team: [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    slug: 'ahmet-yilmaz',
    title: 'Kurucu Ortak, Avukat',
    specialties: ['Ceza Hukuku', 'Ticaret Hukuku'],
    shortBio: '...',
    longBio: '...',
    education: ['...'],
    languages: ['Türkçe', 'İngilizce'],
    imagePlaceholder: {
      initials: 'AY',
      bgColor: 'bg-gradient-to-br from-amber-600 to-amber-800',
    },
  },
  // ...
]
```

### Blog Yazıları

```typescript
blog: [
  {
    id: '1',
    title: 'Boşanma Davasında Dikkat Edilmesi Gerekenler',
    slug: 'bosanma-davasinda-dikkat-edilmesi-gerekenler',
    excerpt: '...',
    content: '...',  // Markdown formatında
    date: '2024-01-15',
    tags: ['boşanma', 'aile hukuku'],
    category: 'Aile Hukuku',
    readingTime: 5,
    author: 'Elif Kaya',
  },
  // ...
]
```

## Renk Değişkenleri

`src/styles/globals.css` dosyasında özelleştirilebilir:

```css
:root {
  --background: 0 0% 99%;      /* Açık zemin */
  --foreground: 220 20% 10%;   /* Koyu metin */
  --accent: 43 74% 38%;        /* Gold vurgu */
  --accent2: 25 60% 35%;       /* Bronze vurgu */
  --muted: 220 10% 96%;        /* Soluk arka plan */
  --border: 220 10% 90%;       /* Kenarlık */
}
```

## Deploy (Vercel)

1. GitHub'a push edin
2. [Vercel](https://vercel.com)'de projeyi import edin
3. Otomatik deploy!

```bash
# Vercel CLI ile
vercel
```

## Teknolojiler

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenliği
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animasyonlar
- [React Hook Form](https://react-hook-form.com/) - Form yönetimi
- [Zod](https://zod.dev/) - Şema doğrulama
- [Lucide React](https://lucide.dev/) - İkonlar

## Lisans

Bu proje demo amaçlıdır. Gerçek bir hukuk bürosu tarafından kullanılmadan önce içeriklerin güncellenmesi gerekmektedir.

---

**Not**: Bu bir demo projesidir. İletişim formu demo modunda çalışmaktadır ve gerçek e-posta gönderimi yapmamaktadır.
