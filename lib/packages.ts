export type Feature = {
    labelMn: string;
    labelEn: string;
    tier: 'essential' | 'standard' | 'premium';
    category?: string
};

export type Offer = {
    id: 'essential' | 'standard' | 'premium';
    nameMn: string;
    nameEn: string;
    taglineMn: string;
    taglineEn: string; // short 1‑liner under title
    impactMn: string;
    impactEn: string;   // paragraph for business impact
    idealForMn: string;
    idealForEn: string; // short audience line
    deliveryMn: string;
    deliveryEn: string; // lead time
    adminAccessMn: string;
    adminAccessEn: string;
    rushMn: string;
    rushEn: string;
    maintenanceMn: string;
    maintenanceEn: string;
    priceNoteMn?: string;
    priceNoteEn?: string;
    features: Feature[];
    icon: string; // lucide icon name e.g. "Rocket"
};

export const packages: Offer[] = [
    {
        id: 'essential',
        nameMn: 'Essential Package',
        nameEn: 'Essential Package',
        taglineMn: 'Богино хугацаанд мэргэжлийн веб.',
        taglineEn: 'A clean landing page—fast.',
        impactMn: 'Таны бизнес онлайнаар даруй итгэл төрүүлнэ. Google‑д илүү амархан олдоно. Зөв мэдээлэл, холбоо барих, байршил нэг дор—Facebook‑оос хамаарал багасна.',
        impactEn: 'Instant credibility and findability on Google. Clear info, contact, and location in one place—no more Facebook‑only presence.',
        idealForMn: 'Кофе шоп, салон, жижиг бизнес.',
        idealForEn: 'Cafés, salons, small local businesses.',
        deliveryMn: '2–3 долоо хоног',
        deliveryEn: '2–3 weeks',
        adminAccessMn: 'Админ хандалт: Оруулахгүй',
        adminAccessEn: 'Admin access: Not included',
        rushMn: '+400k, 1–2 долоо хоног хурдлуулна',
        rushEn: '+400k for 1–2 week rush',
        maintenanceMn: 'Сар бүр 100k (сонголттой)',
        maintenanceEn: '100k/month optional',
        priceNoteMn: 'эхлэх үнэ',
        priceNoteEn: 'starting from',
        icon: 'Globe',
        features: [
            { labelMn: 'Орчин үеийн дизайн', labelEn: 'Modern Design', tier: 'essential' },
            { labelMn: 'Responsive', labelEn: 'Responsive Design', tier: 'essential' },
            { labelMn: 'Домэйн/Hosting холбоно', labelEn: 'Domain/Hosting Setup', tier: 'essential' },
            { labelMn: 'SEO оновчлол', labelEn: 'SEO Optimization', tier: 'essential' },
            { labelMn: 'Хурд сайжруулалт', labelEn: 'Performance Optimization', tier: 'essential' }
        ]
    },
    {
        id: 'standard',
        nameMn: 'Standard Package',
        nameEn: 'Standard Package',
        taglineMn: 'Өөрийн танихуй + өсөлтөд бэлэн.',
        taglineEn: 'Custom look, built to grow.',
        impactMn: 'Захиалгат дизайнтай мэргэжлийн сайт—брэндийн үнэ цэнийг өсгөнө. Өөрөө контентоо засварлаж цаг, зардал хэмнэнэ. SEO + хурд сайжирч, органик урсгал нэмэгдэнэ.',
        impactEn: 'A unique, custom site that elevates your brand. Edit content yourself to save time. Better SEO and performance bring more organic traffic.',
        idealForMn: 'Компани, мэргэжлийн үйлчилгээ, байгууллага',
        idealForEn: 'Companies, professionals, organizations',
        deliveryMn: '2–4 долоо хоног',
        deliveryEn: '2–4 weeks',
        adminAccessMn: 'Контент засварлах админ',
        adminAccessEn: 'Content editing dashboard',
        rushMn: '+500k хурдлуулалт',
        rushEn: '+500k rush',
        maintenanceMn: 'Сар бүр 100k (сонголттой)',
        maintenanceEn: '100k/month optional',
        priceNoteMn: 'эхлэх үнэ',
        priceNoteEn: 'starting from',
        icon: 'Palette',
        features: [
            { labelMn: 'Custom дизайн', labelEn: 'Custom Design', tier: 'standard' },
            { labelMn: 'Контент менежмент', labelEn: 'Content Management', tier: 'standard' },
            { labelMn: 'Responsive', labelEn: 'Responsive Design', tier: 'standard' },
            { labelMn: 'Домэйн/Hosting', labelEn: 'Domain/Hosting', tier: 'standard' },
            { labelMn: 'SSR', labelEn: 'Server-Side Rendering', tier: 'standard' },
            { labelMn: 'Хэлний дэмжлэг', labelEn: 'Multi-language Support', tier: 'standard' },
            { labelMn: 'Аналитик', labelEn: 'Analytics', tier: 'standard' }
        ]
    },
    {
        id: 'premium',
        nameMn: 'Premium Package',
        nameEn: 'Premium Package',
        taglineMn: 'Дижитал экосистем—борлуулалт + автоматжуулалт.',
        taglineEn: 'A full digital platform—sell, automate, scale.',
        impactMn: 'И‑коммерс/аппаар 24/7 борлуулалт нээнэ. Хурд/SEO сайжруулалт, хэрэглэгч нэвтрэлт, төлбөр, аналитик, AI chatbot—гар ажиллагаа багасгаж, өсөлтөд бэлдэнэ.',
        impactEn: 'Unlock 24/7 revenue with e‑commerce or a custom app. Performance/SEO, auth, payments, analytics, and AI chatbot reduce manual work and prepare you to scale.',
        idealForMn: 'Онлайн дэлгүүр, сургалт, томоохон бизнес',
        idealForEn: 'E‑commerce, education, enterprises, startups',
        deliveryMn: '6–7 долоо хоног',
        deliveryEn: '6–7 weeks',
        adminAccessMn: 'Бүрэн админ (Analytics, Users, Content)',
        adminAccessEn: 'Full dashboard (Analytics, Users, Content)',
        rushMn: 'Байхгүй',
        rushEn: 'Not available',
        maintenanceMn: 'Сар бүр 300k',
        maintenanceEn: '300k/month',
        priceNoteMn: 'эхлэх үнэ',
        priceNoteEn: 'starting from',
        icon: 'Crown',
        features: [
            { labelMn: 'SSR', labelEn: 'Server-Side Rendering', tier: 'premium' },
            { labelMn: 'ISR', labelEn: 'Incremental Static Regeneration', tier: 'premium' },
            { labelMn: 'CSO', labelEn: 'Client-Side Optimization', tier: 'premium' },
            { labelMn: 'User Auth систем', labelEn: 'User Authentication', tier: 'premium' },
            { labelMn: 'Төлбөрийн интеграци', labelEn: 'Payment Integration', tier: 'premium' },
            { labelMn: 'AI chatbot', labelEn: 'AI Chatbot', tier: 'premium' },
            { labelMn: 'Аналитик', labelEn: 'Advanced Analytics', tier: 'premium' },
            { labelMn: 'Hosting/Domain', labelEn: 'Hosting/Domain', tier: 'premium' },
            { labelMn: '3 сар үнэгүй арчилгаа', labelEn: '3 months free maintenance', tier: 'premium' }
        ]
    }
];

export const addons = [
    {
        id: 'website-audit',
        nameMn: 'Үнэгүй вебсайт аудит',
        nameEn: 'Free Website Audit',
        descriptionMn: 'SEO, хурд, аюулгүй байдлын шинжилгээ',
        descriptionEn: 'SEO, speed, and security analysis',
        priceMn: 'Үнэгүй',
        priceEn: 'Free',
        icon: 'Search'
    },
    {
        id: 'social-media',
        nameMn: 'Social Media Marketing',
        nameEn: 'Social Media Marketing',
        descriptionMn: 'Professional reel + Постер дизайн',
        descriptionEn: 'Professional reel + Poster design',
        priceMn: '999,000₮',
        priceEn: '999,000₮',
        icon: 'Rocket'
    }
];

export const faq = [
    {
        questionMn: 'Хэдэн хуудас хүртэл нэмэх боломжтой вэ?',
        questionEn: 'How many pages can I add?',
        answerMn: 'Essential: 4-6 хуудас, Standard: 9 хүртэл + хуудас бүрт 300k, Premium: хязгааргүй.',
        answerEn: 'Essential: 4-6 pages, Standard: up to 9 + 300k per page, Premium: unlimited.'
    },
    {
        questionMn: 'Домэйн нэр болон hosting-г та нар тохируулж өгөх үү?',
        questionEn: 'Do you set up domain and hosting?',
        answerMn: 'Тийм, бүх багцад домэйн болон hosting тохиргоо орсон байна.',
        answerEn: 'Yes, all packages include domain and hosting setup.'
    },
    {
        questionMn: 'Контент засварлах боломжтой юу?',
        questionEn: 'Can I edit content myself?',
        answerMn: 'Standard болон Premium багцад контент засварлах админ панел байна.',
        answerEn: 'Standard and Premium packages include content editing dashboard.'
    }
];
