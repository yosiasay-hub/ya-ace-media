// Hand-written bilingual content. Do not auto-generate.
// All prices/specs are illustrative — do not hard-code dollar amounts.

export interface ServiceContent {
  slug: string;
  icon: string;
  title: { he: string; en: string };
  shortDescription: { he: string; en: string };
  longDescription: { he: string; en: string };
  deliverables: { he: string[]; en: string[] };
  idealFor: { he: string[]; en: string[] };
  pricingModel: { he: string; en: string };
  timeline: { he: string; en: string };
  faqs: {
    question: { he: string; en: string };
    answer: { he: string; en: string };
  }[];
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "websites",
    icon: "Code2",
    title: {
      he: "פיתוח אתרים ב-Next.js",
      en: "Next.js Website Development",
    },
    shortDescription: {
      he: "אתרים סטטיים מהירים שטוענים בפחות משנייה ועומדים בציון PSI 95+ במובייל — או שלא משלמים.",
      en: "Static-first websites that load in under a second and hit a 95+ PSI mobile score — guaranteed or you don't pay.",
    },
    longDescription: {
      he: "אתר עסקי הוא לא תיק עבודות יפה — הוא כלי מכירות. אני בונה אתרים ב-Next.js עם רינדור סטטי, אופטימיזציית תמונות אוטומטית וקוד נקי שנטען מיידית גם ברשת סלולרית חלשה. כל אתר עובר אופטימיזציה ידנית עד שמגיע ל-95 ומעלה ב-PageSpeed Insights במובייל.\n\nההתמחות שלי היא באתרים שצריכים להמיר — דפי נחיתה לעסקים מקומיים, אתרי שירות עם עשרות עמודי איזורי שירות, ואתרי תדמית עם בלוג. הכל נכתב ידנית, בלי תבניות מנופחות, בלי תוספים שמאטים את האתר, ובלי תלות במערכות צד שלישי שיכולות ליפול.\n\nהפריסה היא לרוב על Vercel או Cloudflare Pages, כך שהאתר זוכה ל-CDN גלובלי בחינם, גיבויים אוטומטיים, ואפס דאגות תחזוקה ברמת השרת. אתה מקבל קוד שלך, על ה-GitHub שלך, בלי נעילה לספק.",
      en: "A business website isn't a portfolio piece — it's a sales tool. I build sites on Next.js with static rendering, automatic image optimization, and clean code that loads instantly even on weak mobile networks. Every site is hand-tuned until it scores 95 or higher on mobile PageSpeed Insights.\n\nMy focus is on sites that need to convert — landing pages for local businesses, service-area sites with dozens of location pages, and brochure sites with a blog. Everything is written by hand: no bloated templates, no plugins that drag performance down, no third-party dependencies that can break your site.\n\nDeployment is typically on Vercel or Cloudflare Pages, so you get a global CDN for free, automatic backups, and zero server-level maintenance. You own the code, on your GitHub, with no vendor lock-in.",
    },
    deliverables: {
      he: [
        "אתר Next.js מותאם אישית עם רינדור סטטי",
        "ציון PSI 95+ במובייל מאומת (או החזר כספי)",
        "Schema.org מובנה וסיגנלים טכניים ל-SEO",
        "טפסים מחוברים ל-Resend או דומה עם הגנת אנטי-ספאם",
        "תמיכה דו-לשונית מלאה (עברית/אנגלית) במידת הצורך",
        "קוד מקור שלך על GitHub, בלי נעילת ספק",
      ],
      en: [
        "Custom Next.js build with static rendering",
        "Verified 95+ mobile PSI score (or your money back)",
        "Built-in Schema.org and technical SEO signals",
        "Forms wired to Resend or similar with anti-spam protection",
        "Full bilingual (HE/EN) support when needed",
        "Source code on your GitHub, no vendor lock-in",
      ],
    },
    idealFor: {
      he: [
        "עסקים מקומיים שצריכים להמיר טראפיק לטלפונים ולידים",
        "נותני שירות עם הרבה איזורי שירות שצריכים עמודי SEO ייעודיים",
        "עסקים שנסגרים כרגע על אתר וורדפרס איטי ורוצים לעבור לבסיס מודרני",
      ],
      en: [
        "Local businesses that need to convert traffic into calls and leads",
        "Service-area providers needing dedicated SEO pages per location",
        "Businesses currently stuck on a slow WordPress site looking for a modern foundation",
      ],
    },
    pricingModel: {
      he: "מותאם לפרויקט, צור קשר להצעה",
      en: "Project-based, contact for quote",
    },
    timeline: {
      he: "2-6 שבועות, תלוי בהיקף",
      en: "2-6 weeks, depending on scope",
    },
    faqs: [
      {
        question: {
          he: "למה Next.js ולא וורדפרס?",
          en: "Why Next.js and not WordPress?",
        },
        answer: {
          he: "וורדפרס מתחיל מהר ומתדרדר עם הזמן בגלל תוספים, עדכונים ומסד נתונים. אתר Next.js סטטי הוא קבצים פשוטים שמגישים מ-CDN — מהיר תמיד, מאובטח כברירת מחדל, ועלות אחזקה אפסית.",
          en: "WordPress starts fast and slowly degrades thanks to plugins, updates, and database overhead. A static Next.js site is just files served from a CDN — fast forever, secure by default, and near-zero maintenance cost.",
        },
      },
      {
        question: {
          he: "אם האתר לא מגיע ל-PSI 95 במובייל מה קורה?",
          en: "What happens if my site doesn't hit 95+ on mobile PSI?",
        },
        answer: {
          he: "אני ממשיך לעבוד עליו עד שמגיעים לציון, או שאני מחזיר את הכסף. הדרישה הזאת ברורה מראש בחוזה — לא תירוצים.",
          en: "I keep working on it until it gets there, or I refund you. That guarantee is in writing on every contract — no excuses.",
        },
      },
      {
        question: {
          he: "האם אני יכול לערוך את התוכן בעצמי?",
          en: "Can I edit the content myself?",
        },
        answer: {
          he: "כן. לרוב הלקוחות אני מחבר CMS פשוט (Sanity, Contentful או markdown ב-GitHub) שמאפשר לערוך טקסטים, להעלות תמונות ולהוסיף עמודים בלי לגעת בקוד.",
          en: "Yes. Most clients get a lightweight CMS hookup (Sanity, Contentful, or GitHub-based markdown) that lets you edit copy, swap images, and add pages without touching code.",
        },
      },
      {
        question: {
          he: "מה לגבי דומיין ואחסון?",
          en: "What about domain and hosting?",
        },
        answer: {
          he: "אתה הבעלים של הדומיין ושל חשבון האחסון. אני עוזר בהקמה, אבל הכל רשום על השם שלך כדי שלא תהיה תלוי בי. רוב האתרים שלי רצים על Vercel או Cloudflare בעלות אפסית עד נמוכה.",
          en: "You own the domain and the hosting account. I help with setup, but everything is registered in your name so you're never dependent on me. Most sites I build run on Vercel or Cloudflare at zero or near-zero hosting cost.",
        },
      },
    ],
  },
  {
    slug: "seo",
    icon: "Search",
    title: {
      he: "SEO טכני ואופטימיזציית עמודים",
      en: "Technical SEO & On-Page Optimization",
    },
    shortDescription: {
      he: "תיקון בסיס טכני, אופטימיזציית עמודים ומימוש Schema.org כדי שגוגל יבין ויקדם את האתר שלך.",
      en: "Fixing your technical foundation, optimizing pages, and implementing Schema.org so Google understands and ranks your site.",
    },
    longDescription: {
      he: "רוב האתרים שאני בודק נכשלים על דברים בסיסיים: meta tags חסרים, מבנה כותרות הפוך, היעדר schema, רובוטים חסומים בלי כוונה, או עמודים כפולים. אופטימיזציית SEO טכנית מתחילה במיפוי מלא של מה שגוגל רואה מול מה שצריך לראות, ואז תיקון שיטתי של כל פער.\n\nאחרי שהבסיס תקין, עוברים לאופטימיזציית עמודים — מחקר מילות מפתח, התאמת תוכן לכוונת חיפוש, בניית ארכיטקטורת קישורים פנימית הגיונית, ויישום נתונים מובנים (Schema.org) כדי לקבל תוצאות עשירות בגוגל.\n\nאני לא מבטיח עמוד 1 בשבועיים — מי שמבטיח את זה משקר. אני מבטיח שלאחר העבודה גוגל יבין את האתר שלך טוב יותר, יזחל אותו ביעילות, ויראה אותו כסמכות בנושא שלך. התוצאות מגיעות אחר כך, כתלות בתחרות.",
      en: "Most sites I audit fail on basics: missing meta tags, inverted heading structure, no schema, accidentally blocked robots, or duplicate pages. Technical SEO starts with a full audit of what Google actually sees versus what it should see, then a systematic fix of every gap.\n\nOnce the foundation is sound, we move to on-page work — keyword research, aligning content to search intent, building a sane internal linking architecture, and implementing structured data (Schema.org) to earn rich results in Google.\n\nI won't promise page 1 in two weeks — anyone who does is lying. I will promise that after the work, Google will understand your site better, crawl it efficiently, and treat it as an authority in your niche. Rankings follow, depending on competition.",
    },
    deliverables: {
      he: [
        "ביקורת SEO טכנית מלאה עם רשימת תיקונים מתועדפת",
        "מימוש Schema.org רלוונטי (Local Business, Service, FAQ, Article)",
        "מחקר מילות מפתח ומיפוי לעמודים קיימים",
        "אופטימיזציית כותרות, meta descriptions ומבנה H1-H3",
        "תיקון Core Web Vitals במידת הצורך",
        "שליחת sitemap לגוגל ומעקב אחר אינדוקס",
      ],
      en: [
        "Full technical SEO audit with prioritized fix list",
        "Relevant Schema.org implementation (LocalBusiness, Service, FAQ, Article)",
        "Keyword research mapped to existing pages",
        "Title, meta description, and H1-H3 structure optimization",
        "Core Web Vitals fixes where needed",
        "Sitemap submission and indexing tracking",
      ],
    },
    idealFor: {
      he: [
        "עסקים עם אתר קיים שלא מקבלים טראפיק אורגני",
        "עסקים שמשקיעים בקידום ממומן ורוצים לבנות גם ערוץ אורגני",
        "אתרים אחרי מיגרציה או שינוי מבנה שאיבדו דירוגים",
      ],
      en: [
        "Businesses with an existing site getting little organic traffic",
        "Businesses running paid ads who want to build an organic channel too",
        "Sites that lost rankings after a migration or restructure",
      ],
    },
    pricingModel: {
      he: "מותאם לפרויקט או ריטיינר חודשי, צור קשר להצעה",
      en: "Project-based or monthly retainer, contact for quote",
    },
    timeline: {
      he: "2-4 שבועות לאודיט ותיקונים ראשוניים",
      en: "2-4 weeks for audit and initial fixes",
    },
    faqs: [
      {
        question: {
          he: "כמה זמן לוקח עד שרואים תוצאות?",
          en: "How long until I see results?",
        },
        answer: {
          he: "תלוי בתחרות ובאתר. שינויים טכניים כמו תיקון אינדוקס יכולים להראות אפקט תוך שבועות. שיפור דירוגים תחרותיים לוקח לרוב 3-6 חודשים. אני שקוף לחלוטין בציפיות לפני שמתחילים.",
          en: "It depends on competition and the site. Technical fixes like indexing issues can show effect in weeks. Competitive ranking improvements usually take 3-6 months. I'm completely upfront about expectations before we start.",
        },
      },
      {
        question: {
          he: "האם אתה עובד גם על אתרי וורדפרס?",
          en: "Do you work on WordPress sites too?",
        },
        answer: {
          he: "כן. אני מעדיף Next.js לאתרים חדשים, אבל אני שמח לבצע אופטימיזציית SEO על וורדפרס, Wix, Webflow, או כל פלטפורמה אחרת.",
          en: "Yes. I prefer Next.js for new builds, but I'm happy to do SEO work on WordPress, Wix, Webflow, or any other platform.",
        },
      },
      {
        question: {
          he: "מה ההבדל בין SEO טכני ל-SEO תוכן?",
          en: "What's the difference between technical and content SEO?",
        },
        answer: {
          he: "SEO טכני מטפל בתשתית — איך גוגל מוצא, זוחל ומבין את האתר. SEO תוכן עוסק בלכתוב את העמודים הנכונים עבור הכוונות חיפוש הנכונות. שניהם נחוצים, ושניהם נכללים בעבודה שלי.",
          en: "Technical SEO handles infrastructure — how Google finds, crawls, and understands your site. Content SEO is about writing the right pages for the right search intents. Both are necessary, and both are part of what I do.",
        },
      },
    ],
  },
  {
    slug: "local-seo",
    icon: "MapPin",
    title: {
      he: "Local SEO וניהול Google Business Profile",
      en: "Local SEO & Google Business Profile",
    },
    shortDescription: {
      he: "אופטימיזציה של פרופיל Google Business, שחזור פרופילים שנפלו לספאם, ובניית סמכות מקומית במפות.",
      en: "Google Business Profile optimization, anti-spam recovery, and building real local authority on Maps.",
    },
    longDescription: {
      he: "Google Business Profile הוא הנכס המקומי החשוב ביותר של כל עסק עם מיקום פיזי או איזור שירות. רוב העסקים פותחים פרופיל ושוכחים ממנו. אני מטפל בו כמו שצריך: שמות קטגוריות מדויקים, תיאור מבוסס מילות מפתח, תמונות גיאו-תייגות, פוסטים שבועיים, ניהול ביקורות עם תגובות ידניות.\n\nאני מתמחה גם בשחזור של פרופילים שנפגעו ממתחרים שדיווחו עליהם בכזב, מהשעיות אחרי שינוי כתובת, או מהסתננות ספאם בקטגוריה. עבדתי הרבה עם מנעולנים וטכנאי דלתות מוסך בארה\"ב — שתי קטגוריות ידועות לשמצה בספאם ב-GBP — ויש לי תהליך מובנה לשחזור ולהגנה.\n\nליד GBP אני בונה ציטוטים מקומיים (NAP) באתרי הדירקטוריונים החשובים, מטפל בקונסיסטנטיות נתונים בין כל המקורות, ומשתמש ב-Local Falcon כדי למדוד דירוגים בנקודות גריד אמיתיות במקום ממוצעים שלא אומרים כלום.",
      en: "Google Business Profile is the single most important local asset for any business with a physical location or service area. Most businesses set it up and forget it. I treat it the way it should be treated: precise category selection, keyword-grounded description, geo-tagged photos, weekly posts, hands-on review management.\n\nI also specialize in recovering profiles damaged by false competitor reports, suspensions after address changes, or category-wide spam infiltration. I've worked extensively with US locksmiths and garage door technicians — two of the most spam-plagued GBP categories — and have a proven process for recovery and ongoing protection.\n\nAlongside GBP, I build local citations (NAP) on the citations directories that actually matter, fix data consistency across sources, and use Local Falcon to measure rankings at real grid points instead of meaningless averages.",
    },
    deliverables: {
      he: [
        "אופטימיזציה מלאה של פרופיל Google Business (קטגוריות, תיאור, שירותים, תמונות)",
        "תהליך שחזור מובנה לפרופילים מושעים או מדורגים נמוך מסיבות זרות",
        "בניית ציטוטים (NAP) ב-30-50 דירקטוריונים מובילים",
        "אסטרטגיית ביקורות וניהול תגובות",
        "מעקב דירוגים ב-Local Falcon (גריד 7x7 או 9x9)",
        "פוסטים שבועיים ב-GBP במשך 90 יום ראשונים",
      ],
      en: [
        "Full Google Business Profile optimization (categories, description, services, photos)",
        "Proven recovery process for suspended or sabotaged profiles",
        "Citation building on 30-50 high-authority directories",
        "Review acquisition strategy and response management",
        "Local Falcon grid tracking (7x7 or 9x9)",
        "Weekly GBP posts for the first 90 days",
      ],
    },
    idealFor: {
      he: [
        "עסקים מקומיים שלא מופיעים ב-3-pack של גוגל מפות",
        "מנעולנים, טכנאי דלתות מוסך, ועסקי שירות בארה\"ב שמתמודדים עם ספאם בקטגוריה",
        "עסקים שהפרופיל שלהם הושעה או נפגע ממתחרה",
      ],
      en: [
        "Local businesses missing from the Google Maps 3-pack",
        "US locksmiths, garage door techs, and service businesses fighting category spam",
        "Businesses whose GBP was suspended or sabotaged by a competitor",
      ],
    },
    pricingModel: {
      he: "ריטיינר חודשי או פרויקט שחזור חד-פעמי, צור קשר להצעה",
      en: "Monthly retainer or one-time recovery project, contact for quote",
    },
    timeline: {
      he: "אופטימיזציה ראשונית: 1-2 שבועות. שחזור: ימים עד שבועות.",
      en: "Initial optimization: 1-2 weeks. Recovery: days to weeks.",
    },
    faqs: [
      {
        question: {
          he: "הפרופיל שלי הושעה. אתה יכול לעזור?",
          en: "My GBP was suspended. Can you help?",
        },
        answer: {
          he: "ברוב המקרים כן. אני בודק מה הסיבה (כתובת, קטגוריה, אימות, דיווח שווא), אוסף תיעוד, ופותח בקשת ערעור עם כל ההוכחות שגוגל צריך. אחוז ההצלחה גבוה במיוחד למנעולנים וטכנאי דלתות מוסך.",
          en: "In most cases yes. I diagnose the cause (address, category, verification, false report), gather documentation, and submit a reinstatement request with the evidence Google needs. Success rate is particularly high for locksmiths and garage door techs.",
        },
      },
      {
        question: {
          he: "מה זה ספאם בקטגוריה?",
          en: "What is category spam?",
        },
        answer: {
          he: "בקטגוריות מסוימות — מנעולנים, גרירה, דלתות מוסך — יש לידים מזויפים שפותחים עשרות פרופילים מזויפים עם כתובות מומצאות כדי לתפוס מקום במפות. זה דוחק עסקים אמיתיים החוצה. אני יודע איך לדווח עליהם נכון ואיך להגן על הפרופיל שלך מהשפעתם.",
          en: "In certain categories — locksmiths, towing, garage doors — bad actors create dozens of fake listings with fictitious addresses to dominate the map pack. This pushes legitimate businesses out. I know how to report them effectively and how to protect your profile from their impact.",
        },
      },
      {
        question: {
          he: "אתה משיג ביקורות מזויפות?",
          en: "Do you get fake reviews?",
        },
        answer: {
          he: "אף פעם. ביקורות מזויפות הן הדרך הכי מהירה לקבל השעיה. אני בונה תהליכים פנימיים שעוזרים לעסק לבקש ביקורות מלקוחות אמיתיים בזמן הנכון, ומגיב מקצועית לכל ביקורת — חיובית או שלילית.",
          en: "Never. Fake reviews are the fastest way to get suspended. I build internal processes that help the business ask real customers for reviews at the right moment, and respond professionally to every review — positive or negative.",
        },
      },
      {
        question: {
          he: "אתה עובד עם עסקים מחוץ לישראל ולארה\"ב?",
          en: "Do you work with businesses outside Israel and the US?",
        },
        answer: {
          he: "כן, אבל ההתמחות העיקרית שלי היא בשני השווקים האלה. אם יש לך עסק מחוץ לאזורים האלה, נדבר ונוודא שזה מתאים.",
          en: "Yes, but my main focus is on those two markets. If your business is elsewhere, let's talk and make sure it's a good fit.",
        },
      },
    ],
  },
  {
    slug: "ads",
    icon: "Megaphone",
    title: {
      he: "Google Ads ופרסום ממומן במטה",
      en: "Google Ads & Meta Paid Advertising",
    },
    shortDescription: {
      he: "קמפיינים ממומנים בגוגל ופייסבוק שמביאים לידים בעלות שאתה יכול להרוויח עליה.",
      en: "Paid campaigns on Google and Meta that produce leads at a cost you can actually profit from.",
    },
    longDescription: {
      he: "פרסום ממומן הוא מיומנות מתמטית, לא יצירתית. ההבדל בין קמפיין שמדמם כסף לקמפיין שמכפיל את העסק הוא בניית מבנה חשבון נכון, מילים שליליות אגרסיביות, מעקב המרות אמיתי (לא קליקים), ובדיקות A/B שוטפות.\n\nאני בונה קמפיינים ב-Google Search ו-Performance Max לעסקים שצריכים לידים מיידיים, וקמפיינים ב-Meta (פייסבוק/אינסטגרם) למוצרים ויזואליים או כשהקהל מוגדר היטב. כל קמפיין מתחיל ממחקר מתחרים, הבנת ה-LTV של הלקוח, ובניית דף נחיתה אמיתי שמתאים למודעה — לא דף הבית שלך.\n\nאני שותף Google Premier Partner, אבל חשוב לי להגיד שזה לא קסם: הצלחה ב-Google Ads דורשת חודש-חודשיים של אופטימיזציה רצינית עד שהאלגוריתם לומד את הקהל שלך. מי שמבטיח לידים בשבוע הראשון לא יודע מה הוא עושה.",
      en: "Paid advertising is a math discipline, not a creative one. The difference between a campaign that bleeds money and one that doubles a business comes down to proper account structure, aggressive negative keywords, real conversion tracking (not click tracking), and ongoing A/B testing.\n\nI build Google Search and Performance Max campaigns for businesses that need leads now, and Meta (Facebook/Instagram) campaigns for visual products or well-defined audiences. Every campaign starts with competitor research, understanding customer LTV, and building a real landing page that matches the ad — not your homepage.\n\nI'm a Google Premier Partner, but I'll tell you straight: this isn't magic. Google Ads success requires a month or two of serious optimization before the algorithm learns your audience. Anyone promising leads in week one doesn't know what they're doing.",
    },
    deliverables: {
      he: [
        "מבנה חשבון מקצועי לפי קמפיינים, קבוצות מודעות ומילות מפתח",
        "כתיבת מודעות ובדיקות A/B שוטפות",
        "הקמת מעקב המרות נכון ב-Google Tag Manager",
        "דף נחיתה ייעודי לקמפיין במידת הצורך",
        "ניהול תקציב, אופטימיזציה שבועית ודוחות חודשיים",
        "ניהול מילים שליליות וצמצום הוצאה מבוזבזת",
      ],
      en: [
        "Professional account structure by campaign, ad group, and keyword",
        "Ad copywriting and ongoing A/B testing",
        "Proper conversion tracking setup via Google Tag Manager",
        "Dedicated landing page when needed",
        "Budget management, weekly optimization, monthly reporting",
        "Negative keyword management to cut wasted spend",
      ],
    },
    idealFor: {
      he: [
        "עסקים שצריכים לידים תוך ימים עד שבועות (לא חודשים כמו ב-SEO)",
        "עסקים עם שירות או מוצר שהביקוש עליו ידוע ומדיד",
        "עסקים שכבר רצים על Google Ads ומרגישים שהכסף נשרף",
      ],
      en: [
        "Businesses needing leads in days to weeks (not months like SEO)",
        "Businesses with a service or product where demand is known and measurable",
        "Businesses currently running Google Ads and feeling like money is burning",
      ],
    },
    pricingModel: {
      he: "ריטיינר חודשי + תקציב מדיה נפרד, צור קשר להצעה",
      en: "Monthly retainer plus separate media budget, contact for quote",
    },
    timeline: {
      he: "הקמה: שבוע. אופטימיזציה רצינית: 4-8 שבועות.",
      en: "Setup: 1 week. Serious optimization: 4-8 weeks.",
    },
    faqs: [
      {
        question: {
          he: "מהו תקציב מינימלי הגיוני?",
          en: "What's a sensible minimum budget?",
        },
        answer: {
          he: "תלוי לחלוטין בענף ובאיזור. עסק מקומי יכול להתחיל בתקציב צנוע, אבל בענפים תחרותיים כמו עורכי דין או מנעולנים בארה\"ב צריך תקציב יומי משמעותי כדי לקבל מספיק נתונים לאופטימיזציה. בשיחת ייעוץ נחשב יחד מספר ריאלי לפי המקרה שלך.",
          en: "It depends entirely on industry and area. A local business can start small, but in competitive verticals like attorneys or US locksmiths you need a meaningful daily budget to gather enough data to optimize. We'll calculate a realistic number for your case in a discovery call.",
        },
      },
      {
        question: {
          he: "אתה מבטיח מספר לידים?",
          en: "Do you guarantee a number of leads?",
        },
        answer: {
          he: "לא. כל מי שמבטיח מספר לידים בלי לראות את העסק שלך, את התחרות, את דף הנחיתה ואת תקציב המדיה — משקר. אני מבטיח עבודה מקצועית, מעקב שקוף ודוחות אמיתיים.",
          en: "No. Anyone promising a number of leads without seeing your business, competition, landing page, and media budget is lying. I promise professional work, transparent tracking, and real reports.",
        },
      },
      {
        question: {
          he: "אני יכול לראות את החשבון בכל זמן?",
          en: "Can I see the account anytime?",
        },
        answer: {
          he: "כן. אתה הבעלים של חשבון Google Ads / Meta Ads — אני נכנס בתור משתמש מנהל. בכל רגע אתה רואה הכל ויכול לבטל את הגישה שלי.",
          en: "Yes. You own the Google Ads / Meta Ads account — I'm added as a manager user. At any moment you see everything and can revoke my access.",
        },
      },
    ],
  },
  {
    slug: "cro",
    icon: "MousePointerClick",
    title: {
      he: "אופטימיזציית המרות (CRO)",
      en: "Conversion Rate Optimization",
    },
    shortDescription: {
      he: "הופכים את התנועה שכבר יש לך ליותר לידים — בלי להגדיל תקציב או טראפיק.",
      en: "Turning the traffic you already have into more leads — without raising budget or traffic.",
    },
    longDescription: {
      he: "אם אתה משלם על טראפיק שלא ממיר, ההוצאה הכי משתלמת שלך היא לתקן את האתר עצמו. CRO זה תהליך שיטתי: מודדים מה קורה היום, מזהים איפה מבקרים נושרים, מנסחים השערות מבוססות נתונים, בודקים אותן ב-A/B, והופכים למנצחות.\n\nאני עובד עם Google Analytics 4, Microsoft Clarity (heatmaps והקלטות סשן), ו-VWO או Google Optimize לבדיקות. הניתוח מתחיל ממה שאני רואה במספרים, אבל גם מ-UX review ידני: האם המסר הראשי מובן ב-3 שניות? האם ה-CTA הראשי בולט במובייל? האם הטופס ארוך מדי? האם יש חיכוך בקופה?\n\nרוב הלקוחות שלי רואים שיפור של 20-50% בשיעור ההמרה תוך 2-3 חודשים, בלי שינוי בתקציב הפרסום. זה ה-ROI הכי גבוה שאפשר לקבל באתר קיים.",
      en: "If you're paying for traffic that doesn't convert, the highest-leverage spend you can make is fixing the site itself. CRO is a structured process: measure what's happening today, find where visitors drop off, form data-backed hypotheses, A/B test them, and roll out the winners.\n\nI work with Google Analytics 4, Microsoft Clarity (heatmaps and session recordings), and VWO or Google Optimize for testing. The analysis starts with numbers, but also includes a manual UX review: is the main message clear in 3 seconds? Is the primary CTA prominent on mobile? Is the form too long? Is there checkout friction?\n\nMost clients see a 20-50% lift in conversion rate within 2-3 months, with no change in ad spend. It's the highest ROI you can get from an existing site.",
    },
    deliverables: {
      he: [
        "ביקורת UX וניתוח משפך המרה",
        "התקנה ובדיקה של מעקב המרות מלא ב-GA4",
        "התקנת Microsoft Clarity לצפייה בהקלטות אמיתיות",
        "תוכנית בדיקות A/B מתועדפת לפי השפעה צפויה",
        "ביצוע בדיקות ויישום וריאציות מנצחות",
        "דוח חודשי עם השפעה על שיעור ההמרה",
      ],
      en: [
        "UX audit and conversion funnel analysis",
        "Full GA4 conversion tracking install and validation",
        "Microsoft Clarity install for real session recordings",
        "Prioritized A/B test roadmap ranked by expected impact",
        "Test execution and rollout of winning variants",
        "Monthly report on conversion rate impact",
      ],
    },
    idealFor: {
      he: [
        "עסקים עם תנועה בת קיימא (לפחות כמה אלפי מבקרים בחודש)",
        "עסקים שמשקיעים ב-Google Ads ומרגישים שהאתר 'דולף' לידים",
        "חנויות אונליין שרוצות להעלות את שיעור ההזמנות",
      ],
      en: [
        "Businesses with meaningful traffic (at least a few thousand visitors a month)",
        "Businesses spending on Google Ads who feel their site is leaking leads",
        "Online stores looking to lift their order rate",
      ],
    },
    pricingModel: {
      he: "ריטיינר חודשי או פרויקט CRO ממוקד, צור קשר להצעה",
      en: "Monthly retainer or focused CRO project, contact for quote",
    },
    timeline: {
      he: "ביקורת ראשונית: 2 שבועות. בדיקות שוטפות: ריטיינר.",
      en: "Initial audit: 2 weeks. Ongoing testing: retainer.",
    },
    faqs: [
      {
        question: {
          he: "צריך כמה תנועה כדי שזה ישתלם?",
          en: "How much traffic do I need for this to be worth it?",
        },
        answer: {
          he: "כדי לבצע בדיקות A/B אמיתיות עם משמעות סטטיסטית צריך לפחות כמה אלפי מבקרים בחודש בעמוד שבודקים. אם יש פחות, אפשר עדיין לעשות שיפורי UX מבוססי הגיון אבל בלי לוודא אותם בבדיקות.",
          en: "To run A/B tests with statistical significance you need at least a few thousand monthly visitors on the page being tested. With less traffic you can still make UX improvements based on logic and best practice, but without statistical validation.",
        },
      },
      {
        question: {
          he: "מה היחס בין CRO ל-SEO?",
          en: "How does CRO relate to SEO?",
        },
        answer: {
          he: "SEO מביא טראפיק. CRO מטפל במה שקורה אחרי שהטראפיק מגיע. שניהם משלימים זה את זה — אבל CRO לרוב נותן ROI מהיר יותר כי משפיעים ישירות על הכסף שכבר משלמים עליו.",
          en: "SEO brings traffic. CRO works on what happens after traffic arrives. They complement each other — but CRO usually delivers faster ROI because it directly affects money you're already spending.",
        },
      },
      {
        question: {
          he: "אתה מבטיח שיפור?",
          en: "Do you guarantee improvement?",
        },
        answer: {
          he: "אני מבטיח תהליך מקצועי, החלטות מבוססות נתונים ושקיפות מלאה. בדיקות A/B מאופיינות בכך שלא כל בדיקה מנצחת — לפעמים השערה מתבררת כשגויה וזה חלק חיוני מהתהליך. אבל לאורך זמן הניצחונות מצטברים.",
          en: "I guarantee a professional process, data-driven decisions, and full transparency. A/B testing means not every test wins — sometimes a hypothesis is wrong, which is a vital part of the process. Over time, the wins compound.",
        },
      },
    ],
  },
  {
    slug: "maintenance",
    icon: "ShieldCheck",
    title: {
      he: "אחזקת אתרים, ניטור וביקורות ביצועים",
      en: "Website Maintenance, Monitoring & Performance Audits",
    },
    shortDescription: {
      he: "אתה ישן בשקט בלילה: מישהו דואג שהאתר עובד, מהיר ומאובטח — 24/7.",
      en: "You sleep at night: someone is watching that the site is up, fast, and secure — around the clock.",
    },
    longDescription: {
      he: "אתר זה לא 'מקימים ושוכחים'. דברים שוברים: ספקי צד שלישי משנים API, גרסאות חבילות מתעדכנות, הביצועים נחלשים עם הזמן, טפסים מפסיקים לעבוד אחרי שינוי בקונסול, ו-SSL פג תוקף בלי שמישהו שם לב. תוכנית אחזקה היא ביטוח שמונע נזקים יקרים.\n\nאני מציע ניטור 24/7 דרך UptimeRobot, ביקורות ביצועים חודשיות עם השוואה ל-PSI, עדכוני אבטחה לתלויות, גיבויים מאומתים, וטיפול שוטף בבאגים קטנים. אם משהו נופל באמצע הלילה — אני מקבל התראה ולרוב זה פתור עד שאתה מתעורר.\n\nהתוכנית כוללת גם זמן תכנות חודשי לעדכוני תוכן, הוספת עמודים, או שינויים קטנים. רוב הלקוחות מנצלים את זה כי תמיד יש משהו לעדכן — מבצע חדש, שעות פעילות בחג, עוד עד.",
      en: "A website isn't 'set and forget'. Things break: third-party providers change APIs, package versions update, performance degrades, forms stop working after a console change, SSL certs expire unnoticed. A maintenance plan is insurance that prevents expensive damage.\n\nI offer 24/7 uptime monitoring via UptimeRobot, monthly performance audits benchmarked against PSI, dependency security updates, verified backups, and ongoing small bug fixes. If something goes down at 3am — I get the alert and it's usually resolved before you wake up.\n\nThe plan also includes monthly development hours for content updates, adding pages, or small changes. Most clients use it because there's always something to update — a new promo, holiday hours, another testimonial.",
    },
    deliverables: {
      he: [
        "ניטור Uptime 24/7 עם התראות מיידיות",
        "ביקורת ביצועים חודשית (PSI, Core Web Vitals)",
        "עדכוני אבטחה ותלויות",
        "גיבויים מאומתים שבועיים או חודשיים",
        "זמן תכנות חודשי לעדכונים ותיקונים",
        "דוח חודשי עם uptime, ביצועים ומה נעשה",
      ],
      en: [
        "24/7 uptime monitoring with instant alerts",
        "Monthly performance audit (PSI, Core Web Vitals)",
        "Security and dependency updates",
        "Verified weekly or monthly backups",
        "Monthly development hours for updates and fixes",
        "Monthly report with uptime, performance, and work log",
      ],
    },
    idealFor: {
      he: [
        "עסקים שהאתר הוא מקור הכנסה ראשי וכל דקת השבתה עולה כסף",
        "עסקים בלי אנשי טכנולוגיה פנימיים שצריכים בעל מקצוע זמין",
        "אתרים מורכבים שמתעדכנים תכופות",
      ],
      en: [
        "Businesses where the site is a primary revenue source and every minute of downtime costs money",
        "Businesses without internal tech staff who need a reliable on-call developer",
        "Complex sites that get frequent updates",
      ],
    },
    pricingModel: {
      he: "ריטיינר חודשי לפי רמת שירות, צור קשר להצעה",
      en: "Monthly retainer based on service tier, contact for quote",
    },
    timeline: {
      he: "מתמשך, ביטול בכל עת בהודעה של חודש מראש",
      en: "Ongoing, cancel anytime with 30 days notice",
    },
    faqs: [
      {
        question: {
          he: "מה קורה אם האתר נופל בשבת או בחג?",
          en: "What happens if my site goes down on a weekend or holiday?",
        },
        answer: {
          he: "ההתראה מגיעה אליי באופן אוטומטי. ברוב המקרים אני מטפל בזה תוך שעות בודדות, גם בחגים. אם זו תקלה ספציפית של ספק חיצוני, אני מעדכן אותך מיד עם זמן צפוי לפתרון.",
          en: "I get the alert automatically. In most cases I handle it within a few hours, including holidays. If it's a third-party provider outage, I update you immediately with an expected resolution time.",
        },
      },
      {
        question: {
          he: "האם זה כולל שינויים גדולים באתר?",
          en: "Does it include major site changes?",
        },
        answer: {
          he: "ריטיינר רגיל כולל זמן לעדכונים קטנים — תיקוני טקסט, החלפת תמונות, הוספת עמוד פה ושם. שינויים גדולים כמו עיצוב מחדש, פיצ'רים חדשים או דפי נחיתה לקמפיינים מתומחרים בנפרד.",
          en: "A standard retainer includes time for small updates — text fixes, image swaps, adding a page here and there. Major work like redesigns, new features, or campaign landing pages is quoted separately.",
        },
      },
      {
        question: {
          he: "אני יכול לבטל בכל זמן?",
          en: "Can I cancel anytime?",
        },
        answer: {
          he: "כן, בהודעה של חודש מראש. אין חוזים ארוכי טווח שכופים עליך להישאר אם אתה לא מרוצה.",
          en: "Yes, with 30 days notice. No long-term contracts that lock you in if you're not happy.",
        },
      },
    ],
  },
];
