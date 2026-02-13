import type { SiteContent } from '@/types';

export const siteContent: SiteContent = {
    office: {
        name: 'Bozoğlan Avukatlık Bürosu',
        slogan: 'Güvenilir çözümler, profesyonel hizmet',
        description:
            '1995 yılından bu yana müvekkillerimize hukuki danışmanlık ve dava takip hizmetleri sunmaktayız. Deneyimli kadromuz ve uzmanlık alanlarımızla yanınızdayız.',
        address: 'Levent Mah. Büyükdere Cad. No:123, Şişli, İstanbul',
        phone: '+90 212 123 45 67',
        email: 'info@bozoglanavukatlik.com',
        workingHours: {
            weekdays: '09:00 - 18:00',
            saturday: '10:00 - 14:00',
            sunday: 'Kapalı',
        },
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0134655867747!2d29.01139!3d41.0771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzM3LjYiTiAyOcKwMDAnNDEuMCJF!5e0!3m2!1str!2str!4v1234567890',
    },

    socialLinks: [
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    ],

    navigation: [
        { label: 'Ana Sayfa', href: '/' },
        {
            label: 'Hizmetler',
            href: '/hizmetler',
            children: [
                { label: 'Tüm Hizmetler', href: '/hizmetler' },
                { label: 'Ceza Hukuku', href: '/hizmetler/ceza-hukuku' },
                { label: 'Aile Hukuku', href: '/hizmetler/aile-hukuku' },
                { label: 'Ticaret Hukuku', href: '/hizmetler/ticaret-hukuku' },
                { label: 'İş Hukuku', href: '/hizmetler/is-hukuku' },
            ],
        },
        { label: 'Ekibimiz', href: '/ekibimiz' },
        { label: 'İletişim', href: '/iletisim' },
        { label: 'Hakkımızda', href: '/hakkimizda' },
        { label: 'SSS', href: '/sss' },
    ],

    services: [
        {
            id: '1',
            title: 'Ceza Hukuku',
            slug: 'ceza-hukuku',
            shortDescription:
                'Ceza davaları ve soruşturma süreçlerinde profesyonel hukuki destek.',
            longDescription: `Ceza hukuku alanında müvekkillerimize kapsamlı hukuki destek sunmaktayız. Suç isnat edilen kişilerin savunulması, mağdurların haklarının korunması ve ceza soruşturmalarının takibi konularında deneyimli ekibimizle yanınızdayız.

**Hizmet kapsamımız:**
- Ceza davası takibi
- İfade ve sorgu süreçlerinde hukuki destek
- Soruşturma aşamasında savunma
- Tazminat davaları
- Ceza infaz hukuku

Müvekkillerimizin haklarını korumak için titizlikle çalışıyor, adil yargılanma hakkının gözetilmesini sağlıyoruz.`,
            icon: 'scale',
            keywords: ['ceza avukatı', 'ceza davası', 'soruşturma', 'savunma'],
            relatedServices: ['2', '4'],
            relatedTeamMembers: ['1', '2'],
        },
        {
            id: '2',
            title: 'Aile Hukuku',
            slug: 'aile-hukuku',
            shortDescription:
                'Boşanma, nafaka, velayet ve aile hukuku davalarında uzman destek.',
            longDescription: `Aile hukuku, duygusal ve hukuki boyutlarıyla dikkat gerektiren bir alandır. Boşanma, nafaka, velayet, mal paylaşımı gibi konularda müvekkillerimize destek veriyoruz.

**Hizmet kapsamımız:**
- Boşanma ve ayrılık davaları
- Velayet ve çocukların korunması
- Nafaka davaları
- Mal paylaşımı
- Aile içi şiddet vakalarında koruma tedbirleri

Her durumda müvekkillerimizin ve çocukların yararını gözeterek çözüm odaklı çalışıyoruz.`,
            icon: 'heart',
            keywords: ['boşanma avukatı', 'nafaka', 'velayet', 'aile hukuku'],
            relatedServices: ['1', '3'],
            relatedTeamMembers: ['2', '3'],
        },
        {
            id: '3',
            title: 'Ticaret Hukuku',
            slug: 'ticaret-hukuku',
            shortDescription:
                'Şirket kuruluşu, ticari sözleşmeler ve işletme hukuku danışmanlığı.',
            longDescription: `İşletmelerin kuruluşundan günlük operasyonlarına kadar geniş bir yelpazede ticaret hukuku hizmetleri sunuyoruz. Şirketler, ticari sözleşmeler ve işletme hukuku konularında deneyimli ekibimizle yanınızdayız.

**Hizmet kapsamımız:**
- Şirket kuruluşu ve yapılandırma
- Ticari sözleşmeler
- Ortaklık anlaşmazlıkları
- Fikri mülkiyet hakları
- Rekabet hukuku

İşletmenizin hukuki altyapısını güçlendirmek için kapsamlı danışmanlık hizmetleri sunuyoruz.`,
            icon: 'briefcase',
            keywords: ['ticaret avukatı', 'şirket kuruluşu', 'ticari sözleşme'],
            relatedServices: ['4', '5'],
            relatedTeamMembers: ['1', '4'],
        },
        {
            id: '4',
            title: 'İş Hukuku',
            slug: 'is-hukuku',
            shortDescription:
                'İşçi ve işveren uyuşmazlıkları, iş sözleşmeleri ve iş sağlığı güvenliği.',
            longDescription: `İş hukuku alanında hem işçi hem de işverenlere danışmanlık hizmeti sunuyoruz. İş sözleşmeleri, işçi alacakları, işveren hakları ve iş sağlığı güvenliği konularında destek veriyoruz.

**Hizmet kapsamımız:**
- İş sözleşmeleri hazırlama
- İşçi alacakları davaları
- İşe iade davaları
- İş kazaları ve meslek hastalıkları
- Toplu iş hukuku

Çalışma hayatına ilişkin tüm hukuki süreçlerde müvekkillerimize rehberlik ediyoruz.`,
            icon: 'users',
            keywords: ['iş avukatı', 'iş hukuku', 'işçi alacakları', 'işe iade'],
            relatedServices: ['3', '5'],
            relatedTeamMembers: ['3', '4'],
        },
        {
            id: '5',
            title: 'Gayrimenkul Hukuku',
            slug: 'gayrimenkul-hukuku',
            shortDescription:
                'Tapu, kira, satış ve gayrimenkul yatırımları hukuki danışmanlığı.',
            longDescription: `Gayrimenkul hukuku, mülkiyet hakları ve taşınmaz işlemleri konusunda müvekkillerimize kapsamlı destek sunuyoruz. Tapu işlemleri, kira uyuşmazlıkları ve gayrimenkul yatırımları konularında deneyimli ekibimizle yanınızdayız.

**Hizmet kapsamımız:**
- Tapu devir ve satış işlemleri
- Kira uyuşmazlıkları
- Gayrimenkul satış sözleşmeleri
- Kat mülkiyeti hukuku
- Kamulaştırma davaları

Gayrimenkul yatırımlarınızı ve işlemlerinizi güvence altına almak için profesyonel destek sunuyoruz.`,
            icon: 'building',
            keywords: ['gayrimenkul avukatı', 'tapu', 'kira', 'mülkiyet'],
            relatedServices: ['3', '4'],
            relatedTeamMembers: ['2', '5'],
        },
        {
            id: '6',
            title: 'İcra ve İflas Hukuku',
            slug: 'icra-ve-iflas-hukuku',
            shortDescription:
                'Alacak tahsili, icra takibi ve iflas süreçlerinde hukuki destek.',
            longDescription: `Alacakların tahsili ve borç yapılandırması konularında müvekkillerimize destek sunuyoruz. İcra takibi, iflas ve konkordato süreçlerinde deneyimli ekibimizle yanınızdayız.

**Hizmet kapsamımız:**
- Alacak tahsili ve icra takibi
- İtiraz ve şikayet dilekçeleri
- İflas ve konkordato
- Borç yapılandırma
- Kefaret ve rehin hukuku

Mali haklarınızın korunması için etkin hukuki süreç yönetimi sunuyoruz.`,
            icon: 'file-text',
            keywords: ['icra avukatı', 'alacak tahsili', 'iflas', 'konkordato'],
            relatedServices: ['3', '4'],
            relatedTeamMembers: ['1', '4'],
        },
    ],

    team: [
        {
            id: '1',
            name: 'Ahmet Yılmaz',
            slug: 'ahmet-yilmaz',
            title: 'Kurucu Ortak, Avukat',
            specialties: ['Ceza Hukuku', 'Ticaret Hukuku', 'İcra Hukuku'],
            shortBio:
                '25 yıllık deneyimi ile ceza ve ticaret hukuku alanında uzmanlaşmış kurucu ortak.',
            longBio: `Ahmet Yılmaz, 1995 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Mesleki kariyerine İstanbul Barosu'nda başlamış, 2005 yılında Bozoğlan Avukatlık Bürosu'nu kurmuştur.

Ceza hukuku ve ticaret hukuku alanlarında uzmanlaşan Ahmet Yılmaz, çok sayıda karmaşık dada başarıyla müvekkillerini temsil etmiştir. Özellikle ekonomik suçlar ve ticari uyuşmazlıklar konularında geniş deneyime sahiptir.

İstanbul Barosu ve Türk Hukuk Kurumu üyesi olan Ahmet Yılmaz, düzenli olarak hukuk seminerleri ve konferanslara konuşmacı olarak katılmaktadır.`,
            education: [
                'İstanbul Üniversitesi Hukuk Fakültesi (1995)',
                'İstanbul Bilgi Üniversitesi - Ekonomik Suçlar Sertifikası (2002)',
            ],
            languages: ['Türkçe', 'İngilizce'],
            barInfo: 'İstanbul Barosu - 1995',
            imagePlaceholder: {
                initials: 'AY',
                bgColor: 'bg-gradient-to-br from-amber-600 to-amber-800',
            },
        },
        {
            id: '2',
            name: 'Elif Kaya',
            slug: 'elif-kaya',
            title: 'Ortak, Avukat',
            specialties: ['Aile Hukuku', 'Gayrimenkul Hukuku', 'Miras Hukuku'],
            shortBio:
                'Aile ve gayrimenkul hukuku alanında 15 yıllık deneyime sahip ortak avukat.',
            longBio: `Elif Kaya, 2005 yılında Ankara Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Mesleki kariyerine Ankara'da başlamış, 2010 yılında İstanbul'a taşınarak Bozoğlan Avukatlık Bürosu'na katılmıştır.

Aile hukuku ve gayrimenkul hukuku alanlarında uzmanlaşan Elif Kaya, özellikle boşanma davaları, mal paylaşımı ve tapu uyuşmazlıkları konularında geniş deneyime sahiptir.

Müvekkillerine çözüm odaklı yaklaşımı ile tanınan Elif Kaya, arabuluculuk sertifikasına da sahiptir.`,
            education: [
                'Ankara Üniversitesi Hukuk Fakültesi (2005)',
                'Arabuluculuk Sertifikası (2015)',
            ],
            languages: ['Türkçe', 'İngilizce', 'Fransızca'],
            barInfo: 'İstanbul Barosu - 2005',
            imagePlaceholder: {
                initials: 'EK',
                bgColor: 'bg-gradient-to-br from-rose-500 to-rose-700',
            },
        },
        {
            id: '3',
            name: 'Mehmet Demir',
            slug: 'mehmet-demir',
            title: 'Kıdemli Avukat',
            specialties: ['İş Hukuku', 'Aile Hukuku', 'Tazminat Hukuku'],
            shortBio:
                'İş hukuku ve tazminat davaları alanında uzmanlaşmış kıdemli avukat.',
            longBio: `Mehmet Demir, 2010 yılında Marmara Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Mezuniyetinin ardından Bozoğlan Avukatlık Bürosu'na katılmış ve iş hukuku alanında uzmanlaşmıştır.

İşçi alacakları, işe iade ve iş kazaları davaları konularında geniş deneyime sahip olan Mehmet Demir, hem işçi hem de işveren müvekkillerine danışmanlık hizmeti sunmaktadır.

Ayrıca aile hukuku ve tazminat davaları alanında da aktif olarak çalışmaktadır.`,
            education: ['Marmara Üniversitesi Hukuk Fakültesi (2010)'],
            languages: ['Türkçe', 'İngilizce'],
            barInfo: 'İstanbul Barosu - 2010',
            imagePlaceholder: {
                initials: 'MD',
                bgColor: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
            },
        },
        {
            id: '4',
            name: 'Zeynep Arslan',
            slug: 'zeynep-arslan',
            title: 'Avukat',
            specialties: ['Ticaret Hukuku', 'İş Hukuku', 'Sözleşmeler'],
            shortBio:
                'Ticaret ve iş hukuku alanında uzmanlaşmış, sözleşme hazırlama konusunda deneyimli avukat.',
            longBio: `Zeynep Arslan, 2015 yılında Koç Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Mezuniyetinin ardından Bozoğlan Avukatlık Bürosu'na katılmıştır.

Ticaret hukuku ve sözleşmeler alanında uzmanlaşan Zeynep Arslan, şirket kuruluşu, ticari sözleşmeler ve iş hukuku danışmanlığı konularında aktif olarak çalışmaktadır.

İngilizce hukuki metinler hazırlayabilen Zeynep Arslan, uluslararası müvekkillerimize de destek vermektedir.`,
            education: ['Koç Üniversitesi Hukuk Fakültesi (2015)'],
            languages: ['Türkçe', 'İngilizce'],
            barInfo: 'İstanbul Barosu - 2015',
            imagePlaceholder: {
                initials: 'ZA',
                bgColor: 'bg-gradient-to-br from-violet-500 to-violet-700',
            },
        },
        {
            id: '5',
            name: 'Can Özkan',
            slug: 'can-ozkan',
            title: 'Avukat',
            specialties: ['Gayrimenkul Hukuku', 'İcra Hukuku', 'Ticaret Hukuku'],
            shortBio:
                'Gayrimenkul ve icra hukuku alanında uzmanlaşmış genç ve dinamik avukat.',
            longBio: `Can Özkan, 2018 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Mezuniyetinin ardından Bozoğlan Avukatlık Bürosu'na katılmıştır.

Gayrimenkul hukuku ve icra takibi alanlarında uzmanlaşan Can Özkan, tapu işlemleri, kira uyuşmazlıkları ve alacak tahsili konularında aktif olarak çalışmaktadır.

Müvekkillerine hızlı ve etkili çözümler sunma konusunda titizlikle çalışmaktadır.`,
            education: ['İstanbul Üniversitesi Hukuk Fakültesi (2018)'],
            languages: ['Türkçe', 'İngilizce'],
            barInfo: 'İstanbul Barosu - 2018',
            imagePlaceholder: {
                initials: 'CÖ',
                bgColor: 'bg-gradient-to-br from-sky-500 to-sky-700',
            },
        },
    ],



    testimonials: [
        {
            id: '1',
            content:
                'Hukuki süreç boyunca yanımızda oldunuz. Profesyonel ve çözüm odaklı yaklaşımınız için teşekkür ederiz.',
            author: 'A. Y.',
            role: 'İş Hukuku Müvekkili',
            rating: 5,
        },
        {
            id: '2',
            content:
                'Boşanma sürecimde büyük destek gördüm. Her aşamada bilgilendirildim ve haklarım korundu.',
            author: 'S. K.',
            role: 'Aile Hukuku Müvekkili',
            rating: 5,
        },
        {
            id: '3',
            content:
                'Şirket kuruluşu sürecinde profesyonel danışmanlık aldık. Her şey hızlı ve sorunsuz tamamlandı.',
            author: 'M. D.',
            role: 'Ticaret Hukuku Müvekkili',
            rating: 5,
        },
        {
            id: '4',
            content:
                'Ceza davamda büyük emek harcadınız. Sonuçtan çok memnunum. Teşekkürler Bozoğlan Avukatlık Bürosu.',
            author: 'T. A.',
            role: 'Ceza Hukuku Müvekkili',
            rating: 5,
        },
    ],

    caseHighlights: [
        {
            id: '1',
            title: 'Ticari Uyuşmazlık Çözümü',
            description:
                'İki şirket arasındaki sözleşme ihlali davasında müvekkilimiz lehine sonuçlandı.',
            category: 'Ticaret Hukuku',
            outcome: 'Müvekkil lehine tazminat kararı',
        },
        {
            id: '2',
            title: 'İşe İade Davası',
            description:
                'Haksız olarak işten çıkarılan müvekkilimiz için açılan işe iade davası.',
            category: 'İş Hukuku',
            outcome: 'İşe iade ve tazminat kararı',
        },
        {
            id: '3',
            title: 'Tapu İptal Davası',
            description:
                'Müvekkilimizin miras hakkı üzerine açılan tapu iptal ve tescil davası.',
            category: 'Gayrimenkul Hukuku',
            outcome: 'Tapu müvekkil adına tescil edildi',
        },
    ],

    faqs: [
        // Genel Hukuk
        {
            id: 'genel-1',
            category: 'Genel',
            question: 'İlk görüşme ücretli mi?',
            answer: 'İlk görüşme genellikle 30 dakika ile 1 saat arasında sürer ve ön değerlendirme niteliğindedir. Hukuki danışmanlık hizmeti, avukatlık asgari ücret tarifesine göre ücretlendirilir ancak dava açılması durumunda danışmanlık ücreti dava vekalet ücretinden mahsup edilebilir.'
        },
        {
            id: 'genel-2',
            category: 'Genel',
            question: 'Dava ne kadar sürer?',
            answer: 'Dava süresi; mahkemenin iş yoğunluğu, davanın türü, delillerin toplanma süreci ve istinaf/yargıtay aşamalarına göre değişiklik gösterir. Basit davalar 6-12 ay sürerken, karmaşık davalar 2-3 yıl veya daha uzun sürebilir.'
        },
        {
            id: 'genel-3',
            category: 'Genel',
            question: 'Avukatlık ücreti nasıl belirlenir?',
            answer: 'Avukatlık ücreti, Türkiye Barolar Birliği tarafından yayınlanan Asgari Ücret Tarifesi\'nin altında olmamak kaydıyla, davanın niteliği, karmaşıklığı ve harcanacak mesai gözetilerek taraflarca serbestçe belirlenir.'
        },
        {
            id: 'genel-4',
            category: 'Genel',
            question: 'Duruşmalara katılmak zorunda mıyım?',
            answer: 'Ceza davaları hariç, hukuk davalarında (boşanma, tazminat, alacak vb.) kendinizi avukat ile temsil ettiriyorsanız duruşmalara katılma zorunluluğunuz genellikle yoktur. Avukatınız sizin adınıza süreci takip eder.'
        },
        {
            id: 'genel-5',
            category: 'Genel',
            question: 'Online hukuki danışmanlık veriyor musunuz?',
            answer: 'Evet, ofisimize gelemeyen müvekkillerimiz için Zoom, Google Meet veya Skype üzerinden randevulu online görüntülü danışmanlık hizmeti sunmaktayız.'
        },
        {
            id: 'genel-6',
            category: 'Genel',
            question: 'Adli yardım hizmetiniz var mı?',
            answer: 'Ekonomik durumu avukat ücretini karşılamaya yetmeyen vatandaşlar için Baroların Adli Yardım büroları hizmet vermektedir. Ofisimiz özel vekalet ilişkisi ile çalışmaktadır.'
        },
        {
            id: 'genel-7',
            category: 'Genel',
            question: 'Vekaletname nasıl çıkarılır?',
            answer: 'Herhangi bir notere giderek, çalışacağınız avukatın bilgilerini verip "Genel Dava Vekaletnamesi" veya yapılacak işe özel (örn. Boşanma, Tapu) vekaletname düzenletebilirsiniz. Yurt dışındaysanız konsolosluklar aracılığıyla vekaletname çıkartabilirsiniz.'
        },
        {
            id: 'genel-8',
            category: 'Genel',
            question: 'Dava masraflarını kim öder?',
            answer: 'Dava açılırken harç ve gider avansını davacı öder. Dava kazanılırsa, yargılama giderleri haksız çıkan tarafa (davalıya) yükletilir.'
        },
        {
            id: 'genel-9',
            category: 'Genel',
            question: 'Dosyam e-Devlet’te görünmüyor, neden?',
            answer: 'Dosyanızın e-Devlet üzerinde görünmesi için TC kimlik numaranızın dosya ile ilişkilendirilmiş olması gerekir. Yeni açılan davalar sisteme birkaç gün içinde yansır. Gizlilik kararı olan dosyalara erişim kısıtlı olabilir.'
        },
        {
            id: 'genel-10',
            category: 'Genel',
            question: 'Hangi illerde dava alıyorsunuz?',
            answer: 'Merkezimiz İstanbul’da olmakla birlikte, Türkiye genelinde, özellikle Ankara, İzmir, Bursa ve Antalya gibi büyükşehirlerdeki davaları da takip etmekteyiz.'
        },

        // Aile Hukuku
        {
            id: 'aile-1',
            category: 'Aile Hukuku',
            question: 'Anlaşmalı boşanma ne kadar sürer?',
            answer: 'Tarafların boşanma ve ferileri (nafaka, velayet, tazminat) konusunda tam uzlaşı sağladığı durumlarda, mahkemenin yoğunluğuna göre dava genellikle tek celsede, yani 1 ile 3 ay arasında sonuçlanır.'
        },
        {
            id: 'aile-2',
            category: 'Aile Hukuku',
            question: 'Çekişmeli boşanma davası ne kadar sürer?',
            answer: 'Tanıkların dinlenmesi, bilirkişi raporları ve pedagog görüşmeleri gibi süreçler nedeniyle çekişmeli boşanma davaları ortalama 1.5 - 3 yıl arasında sürebilmektedir.'
        },
        {
            id: 'aile-3',
            category: 'Aile Hukuku',
            question: 'Velayet kime verilir?',
            answer: 'Velayet konusunda hakim, çocuğun "üstün yararını" gözetir. Çocuğun yaşı, yaşam koşulları, ebeveynle ilişkisi ve pedagog raporu belirleyicidir. Küçük yaşlarda anne şefkatine ihtiyaç duyulması nedeniyle genellikle anneye verilir ancak bu kesin bir kural değildir.'
        },
        {
            id: 'aile-4',
            category: 'Aile Hukuku',
            question: 'Nafaka neye göre belirlenir?',
            answer: 'Nafaka miktarı; tarafların sosyal ve ekonomik durumları, yaşam standartları, çocukların yaşı ve eğitim giderleri gibi kriterlere göre hakim tarafından takdir edilir.'
        },
        {
            id: 'aile-5',
            category: 'Aile Hukuku',
            question: 'Zina nedeniyle boşanmada mal paylaşımı nasıl olur?',
            answer: 'Zina (aldatma) nedeniyle açılan boşanma davalarında hakim, kusurlu eşin "artık değer" üzerindeki payını (mal paylaşımı payını) azaltabilir veya tamamen kaldırabilir.'
        },
        {
            id: 'aile-6',
            category: 'Aile Hukuku',
            question: 'Düğün takıları kime aittir?',
            answer: 'Yargıtay\'ın yerleşik içtihatlarına göre, düğünde takılan ziynet eşyaları (kadına veya erkeğe takılmasına bakılmaksızın) kadına bağışlanmış sayılır ve boşanma halinde kadının kişisel malı kabul edilir.'
        },
        {
            id: 'aile-7',
            category: 'Aile Hukuku',
            question: 'Boşanmadan ayrı yaşayabilir miyim?',
            answer: 'Evet, boşanma davası açıldığında eşlerin ayrı yaşama hakkı doğar. Dava açılmadan önce de "Ayrılık Davası" açılarak mahkemeden ayrı yaşama izni talep edilebilir.'
        },
        {
            id: 'aile-8',
            category: 'Aile Hukuku',
            question: 'Yoksulluk nafakası süresiz midir?',
            answer: 'Mevcut kanunlara göre yoksulluk nafakası süresiz olarak talep edilebilir. Ancak nafaka alan tarafın evlenmesi, işe girmesi veya ekonomik durumunun iyileşmesi halinde nafaka kaldırılabilir.'
        },
        {
            id: 'aile-9',
            category: 'Aile Hukuku',
            question: 'Velayeti almayan taraf çocuğu ne sıklıkla görür?',
            answer: 'Mahkeme, çocuk ile ebeveyn arasında "Kişisel İlişki" tesis eder. Genellikle hafta sonları (örn. ayın 1. ve 3. haftası), dini bayramların belirli günleri ve sömestr/yaz tatillerinde belirli süreler şeklinde düzenlenir.'
        },
        {
            id: 'aile-10',
            category: 'Aile Hukuku',
            question: 'Nişan bozulunca hediyeler geri istenir mi?',
            answer: 'Evet, nişan bozulduğunda alışılmışın dışındaki hediyeler (takılar, değerli eşyalar) geri istenebilir. Tüketilen veya alışılmış hediyeler (örn. giysi, yemek) geri istenemez.'
        },

        // Ceza Hukuku
        {
            id: 'ceza-1',
            category: 'Ceza Hukuku',
            question: 'Gözaltı süresi en fazla ne kadardır?',
            answer: 'Gözaltı süresi kural olarak 24 saattir. Toplu işlenen suçlarda veya olağanüstü durumlarda bu süre savcılık kararıyla 4 güne kadar uzatılabilir.'
        },
        {
            id: 'ceza-2',
            category: 'Ceza Hukuku',
            question: 'Tutuklama ile hükümözlülük arasındaki fark nedir?',
            answer: 'Tutuklama, henüz kesinleşmiş bir karar yokken uygulanan bir tedbirdir. Hükümlü ise mahkeme kararı kesinleşmiş ve cezası infaz edilmekte olan kişidir.'
        },
        {
            id: 'ceza-3',
            category: 'Ceza Hukuku',
            question: 'Sabıka kaydı (Adli Sicil) ne zaman silinir?',
            answer: 'Cezanın infazı tamamlandıktan sonra adli sicil kaydı silinerek arşiv kaydına alınır. Arşiv kaydı ise belirli koşullar (örn. 5 yıl, yasaklanmış hakların iadesi kararı) sağlandığında silinebilir.'
        },
        {
            id: 'ceza-4',
            category: 'Ceza Hukuku',
            question: 'HAGB (Hükmün Açıklanmasının Geri Bırakılması) nedir?',
            answer: 'Sanığın 2 yıl veya daha az süreli hapis cezası alması durumunda, 5 yıl denetim süresine tabi tutulmasıdır. Bu sürede suç işlemezse dava düşer ve sicile işlemez.'
        },
        {
            id: 'ceza-5',
            category: 'Ceza Hukuku',
            question: 'İfadeye çağrıldım, gitmezsem ne olur?',
            answer: 'Savcılık veya mahkeme tarafından usulüne uygun çağrıya rağmen ifadeye gitmezseniz hakkınızda "Zorla Getirme" kararı çıkarılabilir. Bu durumda kolluk kuvvetleri eşliğinde ifadeye götürülürsünüz.'
        },
        {
            id: 'ceza-6',
            category: 'Ceza Hukuku',
            question: 'Avukat tutmak zorunda mıyım?',
            answer: 'Ceza yargılamasında, alt sınırı 5 yıldan fazla hapis cezasını gerektiren suçlarda, yaşı küçüklerde veya kendini savunamayacak durumdakilerde avukat zorunludur (Müdafi). Diğer durumlarda ihtiyari olsa da hak kaybı yaşamamak için önerilir.'
        },
        {
            id: 'ceza-7',
            category: 'Ceza Hukuku',
            question: 'Uzlaşma nedir?',
            answer: 'Bazı suçlarda (örn. hakaret, basit yaralama), soruşturma veya dava aşamasında tarafların bir uzlaştırmacı eşliğinde anlaşarak dosyanın kapanmasını sağlayan bir kurumdur.'
        },
        {
            id: 'ceza-8',
            category: 'Ceza Hukuku',
            question: 'Denetimli serbestlik şartları nelerdir?',
            answer: 'Cezanın son kısmının cezaevi dışında, dışarıda denetim altında geçirilmesidir. Genellikle cezasının bitmesine 1 yıl (bazı durumlarda daha fazla) kalan iyi halli hükümlüler yararlanabilir.'
        },
        {
            id: 'ceza-9',
            category: 'Ceza Hukuku',
            question: 'Trafik kazasında yaralanma ceza davası mıdır?',
            answer: 'Taksirle yaralama suçu oluştuğu için ceza davası konusudur. Şikayete tabi olabilir. Aynı zamanda tazminat davasına da konu olur.'
        },
        {
            id: 'ceza-10',
            category: 'Ceza Hukuku',
            question: 'Bilişim suçları nelerdir?',
            answer: 'Sisteme izinsiz girmek, verileri yok etmek, banka veya kredi kartı dolandırıcılığı, sosyal medya üzerinden hakaret gibi fiiller bilişim suçları kapsamına girer.'
        },

        // İş Hukuku
        {
            id: 'is-1',
            category: 'İş Hukuku',
            question: 'Kıdem tazminatı şartları nelerdir?',
            answer: 'En az 1 yıl çalışmış olmak ve iş sözleşmesinin işveren tarafından haksız feshi veya işçi tarafından haklı nedenle feshi (emeklilik, askerlik, evlilik vb.) gereklidir.'
        },
        {
            id: 'is-2',
            category: 'İş Hukuku',
            question: 'İstifa eden işçi tazminat alabilir mi?',
            answer: 'Kural olarak istifa eden işçi kıdem tazminatı alamaz. Ancak "Haklı Nedenle Fesih" (örn. maaşların ödenmemesi, mobbing, SGK priminin eksik yatması) durumunda istifa etse bile tazminat alabilir.'
        },
        {
            id: 'is-3',
            category: 'İş Hukuku',
            question: 'İşe iade davası açma süresi nedir?',
            answer: 'Fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurulmalıdır. Arabuluculukta anlaşma sağlanamazsa 2 hafta içinde dava açılmalıdır.'
        },
        {
            id: 'is-4',
            category: 'İş Hukuku',
            question: 'Fazla mesai ücreti nasıl hesaplanır?',
            answer: 'Haftalık 45 saati aşan çalışmalar fazla mesaidir. Her bir saat fazla mesai için saatlik ücretin %50 fazlası ödenir.'
        },
        {
            id: 'is-5',
            category: 'İş Hukuku',
            question: 'Yıllık izin süreleri ne kadardır?',
            answer: '1-5 yıl arası (5 dahil) 14 gün, 5-15 yıl arası 20 gün, 15 yıl ve fazlası için 26 gündür. 18 yaş altı ve 50 yaş üstü işçilere en az 20 gün izin verilir.'
        },
        {
            id: 'is-6',
            category: 'İş Hukuku',
            question: 'Mobbing nedir, nasıl ispatlanır?',
            answer: 'İşyerinde sistematik psikolojik tacizdir. Tanık beyanları, e-postalar, kamera kayıtları, sağlık raporları ve işyeri kayıtları mobbingin ispatında kullanılabilir.'
        },
        {
            id: 'is-7',
            category: 'İş Hukuku',
            question: 'Sigortasız çalıştırılıyorum, ne yapmalıyım?',
            answer: 'Hizmet tespit davası açarak sigortasız çalıştığınız günlerin tescilini sağlayabilirsiniz. Bu dava için 5 yıllık hak düşürücü süre vardır.'
        },
        {
            id: 'is-8',
            category: 'İş Hukuku',
            question: 'İhbar tazminatı nedir?',
            answer: 'İş sözleşmesini fesheden tarafın, kanuni bildirim sürelerine uymaması halinde karşı tarafa ödemek zorunda olduğu tazminattır. Süreler kıdeme göre 2-8 hafta arasında değişir.'
        },
        {
            id: 'is-9',
            category: 'İş Hukuku',
            question: 'İş kazasında işverenin sorumluluğu nedir?',
            answer: 'İşveren, işçi sağlığı ve güvenliği önlemlerini almakla yükümlüdür. İş kazasında işverenin kusuru varsa maddi ve manevi tazminat sorumluluğu doğar.'
        },
        {
            id: 'is-10',
            category: 'İş Hukuku',
            question: 'Maaşım elden ödeniyor, bu sorun olur mu?',
            answer: 'Maaşın bir kısmının bankadan, bir kısmının elden ödenmesi yasa dışıdır. Bu durum emeklilik primlerinizi ve tazminat miktarınızı düşürür. Haklı fesih nedenidir.'
        },

        // Gayrimenkul Hukuku
        {
            id: 'gayrimenkul-1',
            category: 'Gayrimenkul Hukuku',
            question: 'Kirayı ödemeyen kiracı nasıl tahliye edilir?',
            answer: 'Kiracıya noterden ihtarnaeme çekilir, ödeme için 30 gün süre verilir. Ödenmezse icra takibi veya tahliye davası açılabilir. Ayrıca "İki Haklı İhtar" nedeniyle de tahliye davası açılabilir.'
        },
        {
            id: 'gayrimenkul-2',
            category: 'Gayrimenkul Hukuku',
            question: 'Kira artış oranı en fazla ne kadar olabilir?',
            answer: 'Kira artışı, bir önceki yılın TÜFE ortalamasını geçemez. Konutlarda %25 sınırı uygulaması dönemsel olarak değişebilir, güncel yasal düzenlemeler takip edilmelidir.'
        },
        {
            id: 'gayrimenkul-3',
            category: 'Gayrimenkul Hukuku',
            question: 'Tapu iptal ve tescil davası hangi durumlarda açılır?',
            answer: 'Miras kaçırma (muris muvazaası), ehliyetsizlik, hata/hile/tehdit, vekalet görevinin kötüye kullanılması gibi tapu devrinin yolsuz olduğu durumlarda açılır.'
        },
        {
            id: 'gayrimenkul-4',
            category: 'Gayrimenkul Hukuku',
            question: 'İzale-i Şuyu (Ortaklığın Giderilmesi) davası nedir?',
            answer: 'Paylı mülkiyetteki bir taşınmazın ortaklar arasında paylaşılamaması durumunda, mahkeme yoluyla satılarak bedelinin paylaştırılması veya aynen taksim edilmesidir.'
        },
        {
            id: 'gayrimenkul-5',
            category: 'Gayrimenkul Hukuku',
            question: 'Depozito (güvence bedeli) iadesi ne zaman yapılır?',
            answer: 'Kira sözleşmesi sona erip ev tahliye edildikten sonra, evde hasar yoksa ve borç (kira, aidat) kalmamışsa depozito kiracıya iade edilmelidir. En geç 3 ay içinde ve banka hesabı üzerinden işlem yapılmalıdır.'
        },
        {
            id: 'gayrimenkul-6',
            category: 'Gayrimenkul Hukuku',
            question: 'Kat mülkiyeti nedir?',
            answer: 'Tamamlanmış bir yapının bağımsız bölümleri (daire, dükkan) üzerinde kurulan mülkiyet hakkıdır. Kat irtifakından farklı olarak, binanın iskanı alınmıştır.'
        },
        {
            id: 'gayrimenkul-7',
            category: 'Gayrimenkul Hukuku',
            question: 'Yabancılar Türkiye\'de mülk edinebilir mi?',
            answer: 'Evet, karşılıklılık ilkesi ve ilgili kanuni sınırlamalar (askeri bölgeler vb.) çerçevesinde yabancı gerçek kişiler Türkiye\'de taşınmaz edinebilir.'
        },
        {
            id: 'gayrimenkul-8',
            category: 'Gayrimenkul Hukuku',
            question: 'Kentsel dönüşümde 2/3 çoğunluk yeterli mi?',
            answer: 'Kentsel dönüşüm kararı için hak sahiplerinin hisseleri oranında en az 2/3 çoğunluğu gereklidir. Bu karar alındıktan sonra diğer maliklere bildirim yapılır.'
        },
        {
            id: 'gayrimenkul-9',
            category: 'Gayrimenkul Hukuku',
            question: 'Miras kalan eve şerh konulabilir mi?',
            answer: 'Mirasçılar arasında anlaşmazlık varsa veya borç durumu söz konusuysa tapu kaydına çeşitli şerhler (ihtiyati tedbir, aile konutu şerhi vb.) konulabilir.'
        },
        {
            id: 'gayrimenkul-10',
            category: 'Gayrimenkul Hukuku',
            question: 'Ev sahibi evi satarsa kiracı çıkmak zorunda mı?',
            answer: 'Yeni malik, kiracıyı çıkarmak istiyorsa tapu devrinden itibaren 1 ay içinde ihtarname çekmeli ve 6 ay sonra tahliye davası açmalıdır. Aksi halde eski kira sözleşmesi aynı şartlarla devam eder.'
        },

        // Ticaret Hukuku
        {
            id: 'ticaret-1',
            category: 'Ticaret Hukuku',
            question: 'Limited şirket mi Anonim şirket mi kurmalıyım?',
            answer: 'Sermaye yapısı, ortak sayısı, sorumluluk türleri ve hisse devri kolaylığına göre karar verilmelidir. Anonim şirketler daha kurumsal yapılar ve büyük sermayeler için, Limited şirketler KOBİ\'ler için daha uygun olabilir.'
        },
        {
            id: 'ticaret-2',
            category: 'Ticaret Hukuku',
            question: 'Şirket tasfiyesi ne kadar sürer?',
            answer: 'Tasfiye süreci en az 6 aydır (ilan süreleri nedeniyle). Ancak şirketin borç alacak durumuna göre bu süre uzayabilir.'
        },
        {
            id: 'ticaret-3',
            category: 'Ticaret Hukuku',
            question: 'Çek karşılıksız çıkarsa ne yapılır?',
            answer: 'Çek bankaya ibraz edildiğinde karşılığı yoksa "karşılıksızdır" işlemi yaptırılır. Ardından icra takibi başlatılabilir ve "Çek Kanunu" uyarınca şikayet edilerek borçlu hakkında çek düzenleme yasağı ve adli para cezası talep edilebilir.'
        },
        {
            id: 'ticaret-4',
            category: 'Ticaret Hukuku',
            question: 'Konkordato nedir?',
            answer: 'Borçlarını ödemekte zorlanan şirketlerin, mahkeme denetiminde alacaklılarla anlaşarak borçlarını yapılandırması ve iflastan kurtulmaya çalışması sürecidir.'
        },
        {
            id: 'ticaret-5',
            category: 'Ticaret Hukuku',
            question: 'Marka patent tescili neden önemlidir?',
            answer: 'Ürün veya hizmetinizin taklit edilmesini önlemek, haksız rekabete karşı korunmak ve marka değerini artırmak için TPE nezdinde tescil şarttır.'
        },
        {
            id: 'ticaret-6',
            category: 'Ticaret Hukuku',
            question: 'Hissedarın şirketten çıkma hakkı var mıdır?',
            answer: 'Evet, esas sözleşmede belirtilen haklı nedenlerle veya mahkeme kararıyla hissedar ortaklıktan çıkabilir veya çıkarılabilir.'
        },
        {
            id: 'ticaret-7',
            category: 'Ticaret Hukuku',
            question: 'Genel kurul iptal davası süresi nedir?',
            answer: 'Genel kurul karar tarihinden itibaren 3 ay içinde, toplantıda hazır bulunup karara muhalif kalan ve bunu tutanağa geçirten ortaklar tarafından açılabilir.'
        },
        {
            id: 'ticaret-8',
            category: 'Ticaret Hukuku',
            question: 'Fatura tebliğinden sonra itiraz süresi nedir?',
            answer: 'Türk Ticaret Kanunu\'na göre, faturayı alan taraf 8 gün içinde içeriğine itiraz etmezse faturayı kabul etmiş sayılır.'
        },
        {
            id: 'ticaret-9',
            category: 'Ticaret Hukuku',
            question: 'Haksız rekabet halleri nelerdir?',
            answer: 'Başkasının iş ürünlerinden yetkisiz yararlanma, yanıltıcı reklamlar, ticari sırları ifşa etme, kötüleme gibi dürüstlük kuralına aykırı ticari davranışlardır.'
        },
        {
            id: 'ticaret-10',
            category: 'Ticaret Hukuku',
            question: 'E-ticaret sitesi için hukuki metinler nelerdir?',
            answer: 'Mesafeli Satış Sözleşmesi, Ön Bilgilendirme Formu, Üyelik Sözleşmesi, KVKK Aydınlatma Metni ve Çerez Politikası bulundurulması zorunludur.'
        },
    ],

    seo: {
        default: {
            title: 'Bozoğlan Avukatlık Bürosu',
            description:
                'Ceza, aile, ticaret, iş ve gayrimenkul hukuku alanlarında profesyonel hukuki danışmanlık ve dava takip hizmetleri. 25 yıllık deneyim.',
            ogImage: '/images/logo.png',
            keywords: [
                'avukat',
                'hukuk bürosu',
                'istanbul avukat',
                'ceza avukatı',
                'boşanma avukatı',
            ],
        },
        pages: {
            '/hakkimizda': {
                title: 'Hakkımızda | Bozoğlan Avukatlık Bürosu',
                description:
                    'Bozoğlan Avukatlık Bürosu olarak 1995 yılından bu yana müvekkillerimize profesyonel hukuki hizmetler sunuyoruz. Ekibimizi ve vizyonumuzu tanıyın.',
            },
            '/hizmetler': {
                title: 'Hizmetlerimiz | Bozoğlan Avukatlık Bürosu',
                description:
                    'Ceza hukuku, aile hukuku, ticaret hukuku, iş hukuku ve gayrimenkul hukuku alanlarında kapsamlı hukuki hizmetler.',
            },
            '/ekibimiz': {
                title: 'Ekibimiz | Bozoğlan Avukatlık Bürosu',
                description:
                    'Deneyimli ve uzman avukat kadromuz ile tanışın. Her biri alanında uzman avukatlarımız size hizmet vermek için hazır.',
            },
            '/iletisim': {
                title: 'İletişim | Bozoğlan Avukatlık Bürosu',
                description:
                    'Bozoğlan Avukatlık Bürosu ile iletişime geçin. İstanbul Levent\'te ofisimize uğrayın veya bizi arayın.',
            },
            '/sss': {
                title: 'Sık Sorulan Sorular | Bozoğlan Avukatlık Bürosu',
                description:
                    'Hukuki süreçler hakkında merak edilenler. Avukatlık ücretleri, dava süreleri ve daha fazlası.',
            },
        },
    },

    vision:
        'Türkiye\'nin en güvenilir ve tercih edilen hukuk bürolarından biri olmak, müvekkillerimize en üst düzeyde hukuki hizmet sunmak.',

    mission:
        'Müvekkillerimizin haklarını korumak, hukuki süreçlerinde yanlarında olmak ve çözüm odaklı yaklaşımımızla en iyi sonuçları elde etmelerini sağlamak.',

    values: [
        'Güvenilirlik',
        'Profesyonellik',
        'Şeffaflık',
        'Çözüm Odaklılık',
        'Gizlilik',
    ],
};

export default siteContent;
