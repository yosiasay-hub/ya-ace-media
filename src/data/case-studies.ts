// AUTO-RESEARCHED content. Verified URLs only. Update as needed.

/**
 * Case Studies Data
 *
 * Successfully fetched (8/8):
 *  - eaglegaragedoorservices.com
 *  - golocksmithhonolulu.com
 *  - garagedoorkingdomllc.biz
 *  - colorado-locksmith.com
 *  - coloradodependablelocksmith.com
 *  - protecvault.com
 *  - hummus-ashkara.co.il
 *  - limorasay.co.il
 *
 * Failed: none.
 *
 * Notes:
 *  - PSI metric for Kama'aina Locksmith (99/100/100/97) is from internal benchmarks.
 *  - Other PSI numbers are intentionally omitted unless verified.
 *  - Hebrew copy is original (not translated) and focuses on outcomes.
 */

export interface CaseStudy {
  slug: string;
  name: string;
  url: string;
  market: 'US' | 'IL';
  industry: string;
  city?: string;
  country: string;
  services: string[];
  stack?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  description: {
    he: string;
    en: string;
  };
  highlights?: {
    he: string[];
    en: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'eagle-garage-door',
    name: 'Eagle Garage Door Services',
    url: 'https://eaglegaragedoorservices.com',
    market: 'US',
    industry: 'Garage Door',
    city: 'Beltsville, MD',
    country: 'United States',
    services: [
      'Next.js development',
      'Static site architecture',
      'Local SEO',
      'Schema.org markup',
      'Multi-city landing pages',
    ],
    stack: ['Next.js 16', 'Static export', 'Apache/Plesk', 'FTP deploy'],
    metrics: [
      { label: 'Pages', value: '72' },
      { label: 'Service area', value: '30+ cities' },
      { label: 'Google rating', value: '4.5★' },
    ],
    description: {
      he: 'בנינו לאיגל גראג\' דור אתר סטטי מהיר ב-Next.js עם 72 עמודים שמכסים כל עיר בשירות במרילנד וושינגטון. התוצאה: נוכחות מקומית חזקה בכל שכונה ושכונה.',
      en: 'A 72-page Next.js static site covering every city Eagle services across Maryland and DC, engineered for fast loads, clean schema, and dominant local visibility.',
    },
    highlights: {
      he: [
        'ארכיטקטורת עמודי שירות לכל עיר',
        'סכמת LocalBusiness מלאה',
        'דיפלוי דרך FTP ל-Apache/Plesk',
        'תמיכה רב-לשונית (אנגלית, ספרדית, עברית)',
      ],
      en: [
        'Per-city service page architecture',
        'Full LocalBusiness schema',
        'FTP deploy to Apache/Plesk',
        'Trilingual customer support surfaces',
      ],
    },
  },
  {
    slug: 'kamaaina-locksmith',
    name: "Kama'aina Locksmith",
    url: 'https://golocksmithhonolulu.com',
    market: 'US',
    industry: 'Locksmith',
    city: 'Honolulu, HI',
    country: 'United States',
    services: [
      'Next.js development',
      'Local SEO',
      'GBP optimization',
      'Performance engineering',
      'Schema.org markup',
    ],
    stack: ['Next.js', 'Static export', 'Vercel'],
    metrics: [
      { label: 'PSI Performance', value: '99/100' },
      { label: 'PSI Accessibility', value: '100/100' },
      { label: 'PSI Best Practices', value: '100/100' },
      { label: 'PSI SEO', value: '97/100' },
      { label: 'Google reviews', value: '871+ at 4.9★' },
    ],
    description: {
      he: 'אתר Next.js מהיר במיוחד למנעולן מוביל בהונולולו, עם ציוני PageSpeed כמעט מושלמים ועמודי שירות לכל שכונה באי. הצמיחה האורגנית והדירוגים בגוגל מדברים בעד עצמם.',
      en: 'A near-perfect PageSpeed Next.js build for one of Honolulu\'s leading locksmiths, with neighborhood-level service pages and a 4.9-star reputation across 871+ Google reviews.',
    },
    highlights: {
      he: [
        'PSI Mobile 99/100/100/97',
        'כיסוי 20+ שכונות באואהו',
        'אינטגרציה עם Apple HomeKit / Google Home / Alexa',
        'זמני תגובה של 5-10 דקות במרכז העיר',
      ],
      en: [
        'PSI Mobile 99/100/100/97',
        '20+ Oahu neighborhoods covered',
        'Smart-home integrations highlighted (HomeKit, Alexa)',
        '5-10 minute response time in urban core',
      ],
    },
  },
  {
    slug: 'garage-door-kingdom',
    name: 'Garage Door Kingdom LLC',
    url: 'https://garagedoorkingdomllc.biz',
    market: 'US',
    industry: 'Garage Door',
    city: 'Sunrise, FL',
    country: 'United States',
    services: [
      'Web development',
      'Local SEO',
      'GBP optimization',
      'Schema.org markup',
      'Conversion-focused design',
    ],
    stack: ['Responsive web', 'Schema.org JSON-LD', 'Google Tag Manager'],
    metrics: [
      { label: 'Google rating', value: '4.8★' },
      { label: 'Reviews', value: '171+' },
      { label: 'Service radius', value: '35 miles (Broward County)' },
    ],
    description: {
      he: 'אתר מוכוון המרות לעסק דלתות מוסך בפלורידה, כולל דלתות עמידות בהוריקן וזכוכית יוקרה. שילוב מלא עם פרופיל גוגל עסקי וסכמה מובנית הביא למאות ביקורות חיוביות.',
      en: 'A conversion-focused site for a Broward County garage door pro covering hurricane-rated installs and luxury glass doors, paired with strong GBP and schema integration.',
    },
    highlights: {
      he: [
        'דלתות תקן HVHZ (עמידות בהוריקן)',
        'שירותי שערים, גדרות ובקרת כניסה',
        '171+ ביקורות גוגל בדירוג 4.8',
        'זמן תגובה של פחות משעתיים',
      ],
      en: [
        'HVHZ hurricane-rated installs',
        'Gates, fences, and access control',
        '171+ Google reviews at 4.8★',
        'Sub-2-hour response time',
      ],
    },
  },
  {
    slug: 'locksmiths-of-colorado-springs',
    name: 'Locksmiths Of Colorado Springs',
    url: 'https://colorado-locksmith.com',
    market: 'US',
    industry: 'Locksmith',
    city: 'Colorado Springs, CO',
    country: 'United States',
    services: [
      'Next.js development',
      'Local SEO',
      'GBP optimization',
      'Schema.org markup',
    ],
    stack: ['Next.js', 'React', 'Schema.org JSON-LD', 'Google Analytics'],
    metrics: [
      { label: 'Google rating', value: '4.8★' },
      { label: 'Reviews', value: '1,204+' },
      { label: 'Response time', value: '20-30 min' },
    ],
    description: {
      he: 'בניית אתר Next.js למנעולן ותיק בקולורדו ספרינגס, עם ארכיטקטורת SEO מקומית שעוזרת לעסק להחזיק יותר מ-1,200 ביקורות בגוגל בדירוג 4.8.',
      en: 'A Next.js build for a veteran Colorado Springs locksmith, with a local-SEO architecture that helps sustain 1,200+ Google reviews at a 4.8-star average.',
    },
    highlights: {
      he: [
        'מעל 1,200 ביקורות גוגל מאומתות',
        'זמינות 24/7/365',
        'תמיכה במנעולים חכמים (Schlage, Yale, Kwikset)',
        'פעיל מאז 2008',
      ],
      en: [
        '1,200+ verified Google reviews',
        '24/7/365 dispatch',
        'Smart-lock expertise (Schlage, Yale, Kwikset)',
        'Operating since 2008',
      ],
    },
  },
  {
    slug: 'colorado-dependable-locksmith',
    name: 'Colorado Dependable Locksmith',
    url: 'https://coloradodependablelocksmith.com',
    market: 'US',
    industry: 'Locksmith',
    city: 'Highlands Ranch, CO',
    country: 'United States',
    services: [
      'Web development',
      'Local SEO',
      'GBP optimization',
      'Schema.org markup',
    ],
    stack: ['Responsive web', 'Schema.org JSON-LD', 'Inter typography'],
    metrics: [
      { label: 'Google rating', value: '5.0★' },
      { label: 'Response time', value: '15-45 min' },
      { label: 'Service area', value: 'Denver metro' },
    ],
    description: {
      he: 'אתר נקי וממיר למנעולנית בבעלות נשים באזור דנבר, עם דגש על אמון, זמינות ותגובה מהירה. דירוג מושלם של 5.0 בגוגל מוכיח את המודל.',
      en: 'A clean, conversion-ready site for a women-owned Denver-metro locksmith, leaning into trust signals, fast response, and a perfect 5.0 Google rating.',
    },
    highlights: {
      he: [
        'דירוג מושלם 5.0 בגוגל',
        'בעלות נשים, מורשה ומבוטח',
        'כיסוי כל מטרו דנבר',
        'זמני תגובה 15-45 דקות',
      ],
      en: [
        'Perfect 5.0 Google rating',
        'Women-owned, licensed and insured',
        'Full Denver metro coverage',
        '15-45 minute response time',
      ],
    },
  },
  {
    slug: 'protecvault',
    name: 'ProtecVault',
    url: 'https://protecvault.com',
    market: 'US',
    industry: 'E-commerce / Trading Cards',
    country: 'United States',
    services: [
      'Next.js e-commerce',
      'Product page design',
      'Amazon integration',
      'Image optimization',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Cloudinary', 'Google Analytics'],
    metrics: [
      { label: 'Capacity', value: '900 cards' },
      { label: 'Customer rating', value: '4.6-4.7★' },
      { label: 'Channels', value: 'DTC + Amazon' },
    ],
    description: {
      he: 'חנות Next.js למותג קלסרים פרימיום לאספני קלפים, עם תמונות מדויקות, חוויית מוצר נקייה ושילוב מלא עם אמזון. הקטלוג הקטן הופך לכלי מכירה ממוקד.',
      en: 'A Next.js storefront for a premium 900-card binder brand, pairing crisp product imagery and a focused catalog with a parallel Amazon channel.',
    },
    highlights: {
      he: [
        'Next.js + Tailwind + Cloudinary',
        'משלוח חינם בארה"ב',
        'שילוב Amazon לצד מכירה ישירה',
        'דירוג 4.6-4.7 כוכבים',
      ],
      en: [
        'Next.js + Tailwind + Cloudinary',
        'Free US shipping',
        'Amazon channel alongside DTC',
        '4.6-4.7 star ratings',
      ],
    },
  },
  {
    slug: 'hummus-ashkara',
    name: 'חומוס אשכרה / Hummus Ashkara',
    url: 'https://hummus-ashkara.co.il',
    market: 'IL',
    industry: 'Restaurant',
    city: 'תל אביב',
    country: 'Israel',
    services: [
      'בניית אתר',
      'תפריט דיגיטלי',
      'חיבור לוולט ו-10bis',
      'SEO מקומי',
    ],
    stack: ['WordPress', 'Astra theme', 'Elementor', 'Schema.org'],
    metrics: [
      { label: 'ותק', value: '40+ שנים' },
      { label: 'הכרה', value: 'YNET — מלך החומוס' },
    ],
    description: {
      he: 'מותג חומוס אגדי מתל אביב שקיבל אתר מודרני עם תפריט נקי, אינטגרציה לוולט ו-10bis ושפה ויזואלית שמכבדת ארבעה עשורים של מסורת.',
      en: 'A legendary Tel Aviv hummus institution given a modern site with a clean menu, Wolt and 10bis integration, and a visual language that honors four decades of tradition.',
    },
    highlights: {
      he: [
        'תפריט דיגיטלי מובנה',
        'חיבור ישיר ל-Wolt ו-10bis',
        'סכמת מסעדה מובנית',
        'נבחר על ידי YNET כמלך החומוס בישראל',
      ],
      en: [
        'Structured digital menu',
        'Direct Wolt and 10bis integration',
        'Restaurant schema baked in',
        'Named by YNET as Israel\'s "hummus king"',
      ],
    },
  },
  {
    slug: 'limor-asayag',
    name: 'לימור אסייג / Limor Asayag',
    url: 'https://limorasay.co.il',
    market: 'IL',
    industry: 'Real Estate',
    city: 'גליל מערבי',
    country: 'Israel',
    services: [
      'בניית אתר',
      'מערכת נדל"ן',
      'אינטגרציה רב-לשונית',
      'SEO מקומי',
    ],
    stack: ['WordPress', 'Astra theme', 'Elementor', 'Estatik', 'WPML'],
    metrics: [
      { label: 'אזור', value: 'כפר ורדים, מעלות, עין יעקב' },
      { label: 'התמחות', value: 'נדל"ן בגליל המערבי' },
    ],
    description: {
      he: 'אתר נדל"ן ללימור אסייג, יועצת נדל"ן בגליל המערבי, עם קטלוג נכסים, טפסי יצירת קשר וחוויית גלישה אישית שמשקפת את הגישה החמה והמקצועית שלה ללקוחות.',
      en: 'A real estate site for Limor Asayag, a Western Galilee property advisor, featuring a live listings catalog and a warm, personal browsing experience that mirrors her client approach.',
    },
    highlights: {
      he: [
        'מערכת נכסים Estatik משולבת',
        'תמיכה רב-לשונית עם WPML',
        'דגש על אמון ויחס אישי',
        'התמחות בכפר ורדים והסביבה',
      ],
      en: [
        'Integrated Estatik listings engine',
        'Multilingual via WPML',
        'Trust-first, relationship-led tone',
        'Specialist in Kfar Vradim and surrounding villages',
      ],
    },
  },
];
