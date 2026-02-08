export type Lang = "en" | "ar"

export const dictionary = {
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About", ar: "نبذة" },
    portfolio: { en: "Portfolio", ar: "الأعمال" },
    resume: { en: "Resume", ar: "السيرة" },
    sideProjects: { en: "Side Projects", ar: "مشاريع جانبية" },
    blog: { en: "Blog", ar: "المدوّنة" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  identity: {
    name: { en: "Abdullah Almazyad", ar: "عبدالله المزيد" },
    headline: { en: "A Digital Product Manager", ar: "مدير منتجات رقمية" },
    location: { en: "Riyadh, SA", ar: "الرياض، السعودية" },
  },
  home: {
    viewPortfolio: { en: "View Portfolio", ar: "عرض الأعمال" },
    contact: { en: "Contact", ar: "تواصل" },
    highlights: {
      productLeadership: {
        title: { en: "Product Leadership", ar: "قيادة المنتجات" },
        desc: {
          en: "Leading cross-functional teams to deliver impactful digital products from concept to launch.",
          ar: "قيادة فرق متعددة التخصصات لتقديم منتجات رقمية مؤثرة من الفكرة إلى الإطلاق.",
        },
      },
      fintech: {
        title: { en: "Fintech & Digital Lending", ar: "الفنتك والإقراض الرقمي" },
        desc: {
          en: "Innovating in financial services to make them smarter, faster, and more accessible.",
          ar: "الابتكار في الخدمات المالية لجعلها أذكى وأسرع وأكثر سهولة.",
        },
      },
      strategy: {
        title: { en: "Strategy to Execution", ar: "من الاستراتيجية إلى التنفيذ" },
        desc: {
          en: "Bridging the gap between vision and results through data-driven product roadmaps.",
          ar: "سد الفجوة بين الرؤية والنتائج من خلال خرائط طريق المنتجات المبنية على البيانات.",
        },
      },
    },
    featuredWork: { en: "Featured Work", ar: "أعمال مميزة" },
  },
  about: {
    title: { en: "About", ar: "نبذة" },
    bio: {
      en: [
        "a digital product manager with a knack for turning ideas into impactful products that drive growth. With a background in building and scaling digital solutions, I thrive in environments where creativity meets strategy. Whether it's leading teams, crafting product roadmaps, or diving into data, I'm all about delivering results that matter.",
        "Certified in everything from agile methodologies to product management (PLC, PCM, CPM, ECBA, PSPO, and PSM, for those who love acronyms), I'm constantly learning and evolving in this ever-changing digital landscape.",
        "Fintech? That's my playground. I'm fascinated by the endless possibilities to innovate and disrupt, and I'm always looking for new ways to make financial services smarter, faster, and more accessible.",
      ],
      ar: [
        "مدير منتجات رقمية يتمتع بقدرة على تحويل الأفكار إلى منتجات مؤثرة تدفع عجلة النمو. بخلفية في بناء الحلول الرقمية وتوسيع نطاقها، أزدهر في البيئات التي يلتقي فيها الإبداع بالاستراتيجية. سواء كان ذلك قيادة الفرق، أو صياغة خرائط طريق المنتجات، أو التعمق في البيانات، فأنا أسعى دائمًا لتقديم نتائج ذات قيمة حقيقية.",
        "حاصل على شهادات متعددة في منهجيات الأجايل وإدارة المنتجات (PLC، PCM، CPM، ECBA، PSPO، PSM لمحبي الاختصارات)، وأحرص على التعلم المستمر والتطور في هذا المشهد الرقمي المتغير باستمرار.",
        "الفنتك؟ هذا هو ملعبي. أنا مفتون بالإمكانيات اللامحدودة للابتكار والتغيير، وأبحث دائمًا عن طرق جديدة لجعل الخدمات المالية أذكى وأسرع وأسهل وصولًا.",
      ],
    },
    whatIDo: { en: "What I Do", ar: "ما أقوم به" },
    skills: [
      { en: "Digital product strategy and roadmap development", ar: "استراتيجية المنتجات الرقمية وتطوير خرائط الطريق" },
      { en: "Cross-functional team leadership and collaboration", ar: "قيادة الفرق متعددة التخصصات والتعاون" },
      { en: "Agile product management and delivery", ar: "إدارة المنتجات وتسليمها بمنهجية الأجايل" },
      { en: "Data-driven decision making and analytics", ar: "اتخاذ القرارات المبنية على البيانات والتحليلات" },
      { en: "Fintech innovation and digital lending solutions", ar: "ابتكار الفنتك وحلول الإقراض الرقمي" },
      { en: "Product lifecycle management from concept to launch", ar: "إدارة دورة حياة المنتج من الفكرة إلى الإطلاق" },
    ],
  },
  portfolio: {
    title: { en: "Portfolio", ar: "الأعمال" },
    ibanGenerator: {
      title: { en: "Saudi IBAN Generator", ar: "مولّد الآيبان السعودي" },
      oneLiner: {
        en: "Generate compliant Saudi IBANs and cards",
        ar: "توليد أرقام آيبان سعودية وبطاقات متوافقة",
      },
      role: { en: "Builder / Product", ar: "بناء / منتج" },
      context: {
        en: "Built to help QA teams generate realistic structured IBAN test data using agentic AI tools.",
        ar: "بُني لمساعدة فرق ضمان الجودة على توليد بيانات اختبار آيبان واقعية ومنظمة باستخدام أدوات الذكاء الاصطناعي.",
      },
      caseStudy: { en: "Case Study", ar: "دراسة حالة" },
      liveDemo: { en: "Live Demo", ar: "عرض حي" },
    },
  },
  caseStudy: {
    title: { en: "Saudi IBAN Generator", ar: "مولّد الآيبان السعودي" },
    overview: {
      title: { en: "Overview", ar: "نظرة عامة" },
      content: {
        en: "A web-based utility tool that generates compliant Saudi IBANs and associated card data for testing and quality assurance purposes.",
        ar: "أداة ويب تولد أرقام آيبان سعودية متوافقة وبيانات بطاقات مرتبطة لأغراض الاختبار وضمان الجودة.",
      },
    },
    problem: {
      title: { en: "Problem", ar: "المشكلة" },
      content: {
        en: "QA teams needed realistic, structured IBAN test data to validate financial workflows. Manually creating test IBANs was time-consuming and error-prone, leading to inconsistent testing coverage.",
        ar: "احتاجت فرق ضمان الجودة إلى بيانات اختبار آيبان واقعية ومنظمة للتحقق من سير العمل المالي. كان إنشاء بيانات الاختبار يدويًا يستغرق وقتًا طويلاً وعرضة للأخطاء.",
      },
    },
    solution: {
      title: { en: "Solution", ar: "الحل" },
      content: {
        en: "Built a tool that generates compliant Saudi IBANs and cards, providing QA teams with instant access to realistic structured test data that follows Saudi banking standards.",
        ar: "بناء أداة تولد أرقام آيبان سعودية وبطاقات متوافقة، مما يوفر لفرق ضمان الجودة وصولاً فوريًا إلى بيانات اختبار واقعية تتبع معايير البنوك السعودية.",
      },
    },
    howItWorks: {
      title: { en: "How It Works", ar: "كيف يعمل" },
      content: {
        en: "Users can generate IBANs and card data through a simple web interface. The tool ensures all generated data follows the correct structure and formatting standards for Saudi banking.",
        ar: "يمكن للمستخدمين توليد أرقام آيبان وبيانات بطاقات من خلال واجهة ويب بسيطة. تضمن الأداة أن جميع البيانات المولدة تتبع الهيكل الصحيح ومعايير التنسيق للبنوك السعودية.",
      },
    },
    impact: {
      title: { en: "Impact", ar: "الأثر" },
      content: {
        en: "Improved testing speed and quality by providing QA teams with instant access to realistic, structured test data. Reduced manual effort in test data preparation.",
        ar: "تحسين سرعة وجودة الاختبار من خلال توفير وصول فوري لفرق ضمان الجودة إلى بيانات اختبار واقعية ومنظمة. تقليل الجهد اليدوي في إعداد بيانات الاختبار.",
      },
    },
    techNotes: {
      title: { en: "Tech Notes", ar: "ملاحظات تقنية" },
      content: { en: "Static web app", ar: "تطبيق ويب ثابت" },
    },
    links: { en: "Links", ar: "الروابط" },
  },
  resume: {
    title: { en: "Resume", ar: "السيرة الذاتية" },
    experience: { en: "Experience", ar: "الخبرات" },
    education: { en: "Education", ar: "التعليم" },
    certifications: { en: "Certifications", ar: "الشهادات" },
    present: { en: "Present", ar: "الحالي" },
  },
  sideProjects: {
    title: { en: "Side Projects", ar: "مشاريع جانبية" },
    ibanNote: {
      en: "Utility tool built to support QA/testing with realistic structured test data.",
      ar: "أداة مساعدة بُنيت لدعم ضمان الجودة والاختبار ببيانات اختبار واقعية ومنظمة.",
    },
    live: { en: "Live", ar: "مباشر" },
    github: { en: "GitHub", ar: "GitHub" },
  },
  blog: {
    title: { en: "Blog", ar: "المدوّنة" },
    comingSoon: { en: "Coming soon", ar: "قريبًا" },
    comingSoonDesc: {
      en: "Thoughts on product management, fintech, and digital transformation are on their way.",
      ar: "أفكار حول إدارة المنتجات والفنتك والتحول الرقمي في الطريق.",
    },
  },
  contact: {
    title: { en: "Contact", ar: "تواصل" },
    getInTouch: { en: "Get in Touch", ar: "تواصل معي" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    socialLinks: { en: "Social Links", ar: "روابط التواصل" },
  },
  notFound: {
    title: { en: "Page Not Found", ar: "الصفحة غير موجودة" },
    desc: {
      en: "The page you are looking for does not exist or has been moved.",
      ar: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    },
    backHome: { en: "Back to Home", ar: "العودة للرئيسية" },
  },
  footer: {
    copyright: { en: "Abdullah Almazyad", ar: "عبدالله المزيد" },
  },
} as const

export function t(obj: { en: string; ar: string }, lang: Lang): string {
  return obj[lang]
}
