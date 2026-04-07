// Hand-written bilingual content. Do not auto-generate.
// All prices/specs are illustrative — do not hard-code dollar amounts.

export interface AboutContent {
  founder: {
    name: string;
    role: { he: string; en: string };
    bio: { he: string; en: string };
    bioShort: { he: string; en: string };
  };
  story: { he: string; en: string };
  principles: {
    title: { he: string; en: string };
    description: { he: string; en: string };
  }[];
  whyYaAceMedia: { he: string[]; en: string[] };
  credentials: string[];
}

export const ABOUT: AboutContent = {
  founder: {
    name: "Yossi",
    role: {
      he: "מייסד ומפתח ראשי",
      en: "Founder & Lead Developer",
    },
    bioShort: {
      he: "מפתח, משווק ומרצה לשעבר ב-John Bryce. בונה אתרים מהירים ומקדם עסקים מקומיים מאז 2017.",
      en: "Developer, marketer, and former John Bryce digital marketing lecturer. Building fast websites and growing local businesses since 2017.",
    },
    bio: {
      he: "אני יוסי, מפתח ומשווק עצמאי שעובד מהגליל. את הלקוחות הראשונים שלי לקחתי ב-2017, אחרי שנים שבהן עזרתי לחברים בעלי עסקים לתקן אתרים, לשפר דירוגים בגוגל, ולהפסיק לזרוק כסף על קמפיינים שלא עובדים. במקביל ללקוחות הפרטיים העברתי קורסים והרצאות בשיווק דיגיטלי במכללת John Bryce, מה שאילץ אותי לנסח לעומק כל מה שלמדתי בשטח ולהפוך את זה לשיטה שאפשר ללמד.\n\nאני מאמין שעסק קטן לא צריך סוכנות עם 30 עובדים, מנהל פרויקטים, מנהל לקוח, ועוד שלוש שכבות של מי שמסביר למי מה לעשות. הוא צריך אדם אחד שמבין גם בקוד וגם בשיווק, שעונה לטלפון, ומקבל החלטות בלי ועדה. זה מה שאני.\n\nאני עובד עם לקוחות בישראל — בעיקר נדל\"ן, שירותים מקצועיים, מסעדות ובעלי מקצוע — ועם נישה ייעודית בארה\"ב של מנעולנים וטכנאי דלתות מוסך, שני תחומים שהפכו לשיא של מומחיות בכל הנוגע ל-Google Business Profile, אנטי-ספאם וקידום מקומי.",
      en: "I'm Yossi, an independent developer and marketer based in the Galilee, Israel. I took on my first paying clients in 2017, after years of helping business-owner friends fix broken websites, improve their Google rankings, and stop wasting money on campaigns that didn't work. Alongside client work I taught digital marketing courses and workshops at John Bryce college — which forced me to crystallize everything I'd learned in the field into a method I could actually teach.\n\nI believe a small business shouldn't need a 30-person agency with a project manager, an account manager, and three more layers of people explaining to other people what to do. It needs one person who understands both code and marketing, picks up the phone, and makes decisions without a committee. That's me.\n\nI work with clients in Israel — mostly real estate, professional services, restaurants, and trades — and with a focused US niche of locksmiths and garage door technicians, two industries where I've built deep expertise in Google Business Profile work, anti-spam recovery, and local SEO.",
    },
  },
  story: {
    he: "YA Ace Media התחילה ב-2017 כעבודה צדדית. בני משפחה וחברים בעלי עסקים בקשו ממני לבנות להם אתרים ולעזור להם להופיע בגוגל, ובהדרגה התברר שיש כאן צורך אמיתי בשוק שאף סוכנות גדולה לא ממלאת — עסקים מקומיים שצריכים מישהו שמבין אותם, לא חבילה גנרית של 'דיגיטל'.\n\nבשנים הראשונות עבדתי בעיקר עם עסקים ישראליים: מתווכי נדל\"ן בצפון, מסעדות, בעלי מקצוע. במקביל התחלתי להתמקצע ב-Google Ads, עברתי הסמכות, וקיבלתי הכרה כ-Google Premier Partner. גיליתי שיש פער עצום בין סוכנויות שמוכרות פרסום ובין סוכנויות שמבינות גם איך לבנות את התשתית שגורמת לפרסום הזה לעבוד — האתר עצמו.\n\nבמקביל התחלתי להעביר קורסים והרצאות בשיווק דיגיטלי במכללת John Bryce — אחת ממסגרות ההכשרה המקצועית הגדולות בישראל. ההוראה אילצה אותי לקחת את מה שעובד בשטח ולנסח אותו כמערכת ברורה שאפשר ללמד, וגם הכריחה אותי להישאר מעודכן. עד היום אני נשען על אותה שיטתיות בכל פרויקט.\n\nב-2021 התחלתי לעבוד עם לקוח מנעולן בארה\"ב, וזה היה שער לעולם שלם. מנעולנים וטכנאי דלתות מוסך מתמודדים עם רמות חסרות תקדים של ספאם בקטגוריה ב-Google Business Profile, ואני בניתי תהליך מובנה לשחזור פרופילים, להגנה מפני דיווחי שווא, ולקידום מקומי בסביבה תחרותית במיוחד. היום זאת ההתמחות הגלובלית שלי, לצד העבודה השוטפת בישראל.\n\nהמודל לא השתנה מאז יום ראשון: מפתח אחד, מערכת יחסים ישירה עם הלקוח, שקיפות מלאה, ואחריות אישית על התוצאה. לא מתכוון לגדול לסוכנות עם עובדים. הסיבה היחידה שלקוחות נשארים היא שהם מקבלים את מי שהבטיחו להם.",
    en: "YA Ace Media started in 2017 as a side hustle. Family and friends who owned businesses asked me to build them websites and help them rank on Google, and gradually it became clear there was a real market need that no large agency was filling — local businesses that needed someone who understood them, not a generic 'digital' package.\n\nThe first few years were mostly Israeli clients: real estate agents in the north, restaurants, trades. In parallel I went deep on Google Ads, earned certifications, and was eventually recognized as a Google Premier Partner. I discovered there was a huge gap between agencies that sell advertising and agencies that also understand how to build the infrastructure that makes that advertising work — the website itself.\n\nAlongside client work I started teaching digital marketing courses and workshops at John Bryce — one of Israel's largest professional training institutions. Teaching forced me to take what works in the field and structure it into a method I could actually teach, and it kept me sharp on what was new. I still rely on that same systematic approach in every project today.\n\nIn 2021 I took on my first US locksmith client, and it opened up a whole new world. Locksmiths and garage door technicians face unprecedented levels of category spam on Google Business Profile, and I built a structured process for profile recovery, false-report defense, and local SEO in an unusually competitive environment. Today that's my global specialty, alongside ongoing work in Israel.\n\nThe model hasn't changed since day one: one developer, direct client relationships, full transparency, and personal accountability for results. I have no intention of growing into an agency with employees. The only reason clients stay is that they get exactly the person they were promised.",
  },
  principles: [
    {
      title: {
        he: "שקיפות לפני יחסי ציבור",
        en: "Transparency Over Spin",
      },
      description: {
        he: "לא מבטיחים מה שלא יודעים לקיים. אם משהו לא עובד אומרים את זה. דוחות חודשיים מציגים את האמת — גם את החודשים הפחות טובים — כדי שתוכל לקבל החלטות אמיתיות.",
        en: "We don't promise what we can't deliver. When something isn't working, we say so. Monthly reports show the truth — including the down months — so you can make real decisions.",
      },
    },
    {
      title: {
        he: "מהירות ובסיס איכותי לפני פיצ'רים",
        en: "Speed & Foundation Before Features",
      },
      description: {
        he: "אתר מהיר עם פיצ'רים בסיסיים תמיד יביס אתר איטי עם הכל בעולם. כל בנייה מתחילה בבסיס סטטי, נקי ומהיר — ורק אחר כך מוסיפים שכבות.",
        en: "A fast site with basic features always beats a slow site with every bell and whistle. Every build starts with a clean, static, fast foundation — everything else gets layered on top.",
      },
    },
    {
      title: {
        he: "אתה הבעלים של הכל",
        en: "You Own Everything",
      },
      description: {
        he: "הקוד אצלך ב-GitHub. הדומיין רשום על שמך. החשבונות (Google Ads, Analytics, GBP) שייכים לך. בלי נעילה לספק, בלי סחיטה אם תחליט להחליף.",
        en: "Your code is in your GitHub. Your domain is in your name. Your accounts (Google Ads, Analytics, GBP) belong to you. No vendor lock-in, no leverage if you ever choose to leave.",
      },
    },
    {
      title: {
        he: "ROI לפני יוקרה",
        en: "ROI Over Prestige",
      },
      description: {
        he: "אתר לא צריך לזכות בפרס עיצוב, הוא צריך להמיר. החלטות עיצוב ופיתוח נמדדות לפי השפעה על הכסף, לא לפי טרנדים בטוויטר.",
        en: "A website doesn't need to win a design award, it needs to convert. Design and development decisions are judged by their impact on money, not by Twitter trends.",
      },
    },
    {
      title: {
        he: "מערכת יחסים ארוכת טווח",
        en: "Long-Term Relationships",
      },
      description: {
        he: "אני מעדיף עשרה לקוחות שעובדים איתי שנים מאשר מאה לקוחות חד-פעמיים. זה אומר שאני אומר 'לא' להרבה פניות שלא מתאימות, וזה אומר שאם אתה כן לקוח — אני שם לך.",
        en: "I'd rather have ten clients who work with me for years than a hundred one-off projects. That means I say 'no' to a lot of inquiries that aren't a fit, and it means that if you are a client — I'm there for you.",
      },
    },
  ],
  whyYaAceMedia: {
    he: [
      "עובדים ישירות מול המפתח, לא מול מנהל לקוח שמעביר הודעות",
      "אחריות PSI 95+ במובייל בכתב — או החזר כספי",
      "שותף Google Premier Partner עם הסמכות פעילות",
      "מרצה לשעבר לשיווק דיגיטלי במכללת John Bryce — שיטה מנוסחת ומבוססת",
      "דו-לשוני עברית-אנגלית, מה שמאפשר לעבוד ברציפות מול שני שווקים",
      "מומחיות ייחודית באנטי-ספאם של Google Business Profile למנעולנים וטכנאי דלתות מוסך",
      "אתה הבעלים של כל הקוד, הדומיין והחשבונות — בלי נעילה",
      "מודל פעולה של מפתח עצמאי עם יותר מ-8 שנות ניסיון",
    ],
    en: [
      "You work directly with the developer — no account manager relaying messages",
      "Written 95+ mobile PSI guarantee, or money back",
      "Google Premier Partner with active certifications",
      "Former John Bryce digital marketing lecturer — a structured, taught methodology",
      "Bilingual Hebrew-English, allowing seamless work across both markets",
      "Niche expertise in Google Business Profile anti-spam for US locksmiths and garage door techs",
      "You own all the code, the domain, and the accounts — zero vendor lock-in",
      "Solo-developer model with over 8 years of hands-on experience",
    ],
  },
  credentials: [
    "Google Premier Partner",
    "Google Ads Certified (Search, Display, Measurement)",
    "Former John Bryce Digital Marketing Lecturer",
    "Next.js specialist (static-first, App Router)",
    "Schema.org & Local Business markup specialist",
    "Local Falcon certified for grid rank tracking",
    "8+ years building and ranking local business websites",
    "Bilingual delivery: Hebrew and English",
  ],
};
