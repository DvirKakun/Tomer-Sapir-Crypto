import type {
  Service,
  Testimonial,
  TrustIndicator,
  Credential,
  ContactInfo,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "שירותים", href: "#services" },
  { label: "אודות", href: "#about" },
  { label: "חבילות 🔥", href: "#packages" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

export const heroContent = {
  headline: "נווטו את עתיד הפיננסים הדיגיטליים בביטחון",
  subheadline:
    "ייעוץ מומחה במטבעות דיגיטליים וכלכלה למשקיעים, עסקים ומוסדות המחפשים יתרון אסטרטגי בכלכלה הדיגיטלית.",
  ctaPrimary: "קבע פגישת ייעוץ",
  ctaSecondary: "למד עוד",
};

export const trustIndicators: TrustIndicator[] = [
  {
    id: "1",
    name: "שנות ניסיון",
    metric: "+10",
    description: "עשור של מומחיות בשוקי קריפטו וניתוח כלכלי",
  },
  {
    id: "2",
    name: "לקוחות מרוצים",
    metric: "+200",
    description: "פרויקטי ייעוץ מוצלחים ברחבי העולם",
  },
  {
    id: "3",
    name: "צמיחת תיקים",
    metric: "150%",
    description: "צמיחה ממוצעת של תיקי לקוחות (ממוצע 3 שנים)",
  },
  {
    id: "4",
    name: "דוחות מחקר שוק",
    metric: "+500",
    description: "ניתוחים מעמיקים ותובנות שוק שסופקו",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "אסטרטגיית מטבעות דיגיטליים",
    description:
      "אסטרטגיות השקעה מותאמות אישית לניווט בשוקי קריפטו תנודתיים בביטחון ודיוק.",
    icon: "TrendingUp",
    features: [
      "אסטרטגיות פיזור תיק השקעות",
      "הערכה וניהול סיכונים",
      "אסטרטגיות זמון שוק וכניסה/יציאה",
      "ניתוח יסודות של טוקנים",
    ],
  },
  {
    id: "2",
    title: "ניתוח כלכלי",
    description:
      "מחקר מקרו-כלכלי מקיף המחבר בין פיננסים מסורתיים לשווקי נכסים דיגיטליים.",
    icon: "BarChart3",
    features: [
      "ניתוח מגמות מקרו-כלכליות",
      "השפעת מדיניות הפד על קריפטו",
      "אסטרטגיות גידור מפני אינפלציה",
      "מחקרי קורלציה בשווקים גלובליים",
    ],
  },
  {
    id: "3",
    title: "ייעוץ בלוקצ'יין",
    description:
      "הדרכה מומחית לאימוץ ושילוב טכנולוגיית בלוקצ'יין עבור עסקים ומוסדות.",
    icon: "Network",
    features: [
      "הערכת פרוטוקולי DeFi",
      "שותפויות לביקורת חוזים חכמים",
      "ייעוץ בעיצוב טוקנומיקס",
      "הדרכה לעמידה ברגולציה",
    ],
  },
  {
    id: "4",
    title: "ניהול סיכונים",
    description:
      "מסגרות סיכון מתוחכמות שתוכננו להגן על ההשקעות שלך בתנאי שוק תנודתיים.",
    icon: "Shield",
    features: [
      "בדיקות עמידות של תיק השקעות",
      "הכנה לאירועי ברבור שחור",
      "אסטרטגיות גידור",
      "טכניקות למזעור ירידות",
    ],
  },
  {
    id: "5",
    title: "מחקר שוק",
    description:
      "תובנות מבוססות נתונים ומחקר קנייני כדי לשמור אותך בחזית מגמות והזדמנויות שוק.",
    icon: "Search",
    features: [
      "דוחות מודיעין שוק שבועיים",
      "זיהוי מגמות מתעוררות",
      "ניתוח און-צ'יין ומדדים",
      "מיפוי נוף מתחרים",
    ],
  },
  {
    id: "6",
    title: "ייעוץ מוסדי",
    description:
      "שירותי ייעוץ מיוחדים לקרנות, משרדי משפחה ומשקיעים מוסדיים הנכנסים לקריפטו.",
    icon: "Building2",
    features: [
      "פתרונות משמורת ברמה מוסדית",
      "מסגרות עמידה ברגולציה",
      "אסטרטגיות ניהול אוצר",
      "פיתוח מדיניות השקעות",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "מיכאל כהן",
    role: "שותף מנהל",
    company: "Apex Capital Ventures",
    content:
      "התובנות האסטרטגיות ששסופקו שינו את הגישה שלנו לנכסים דיגיטליים. התיק שלנו עלה על מדדי השוק באופן עקבי במשך 18 חודשים.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "2",
    name: "שרה מיטשל",
    role: "מנהלת השקעות ראשית",
    company: "Heritage Family Office",
    content:
      "עומק ידע יצא דופן בכלכלה מסורתית ובשווקי מטבעות דיגיטליים. מסגרות ניהול הסיכונים לבדן הצילו אותנו ממספר מלכודות.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: "3",
    name: "דוד רודריגז",
    role: "מייסד ומנכ״ל",
    company: "BlockVentures Inc",
    content:
      "העבודה המשותפת עזרה לנו לנווט בנוף הרגולטורי המורכב תוך בניית מודל טוקנומיקס חזק. השקת הטוקן שלנו עלתה על כל התחזיות.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=33",
  },
];

export const credentials: Credential[] = [
  {
    id: "1",
    title: "תואר שני בכלכלה",
    institution: "אוניברסיטת קולומביה",
    year: "2012",
    description: "התמחות במדיניות מוניטרית ושווקים פיננסיים",
  },
  {
    id: "2",
    title: "אנליסט פיננסי מוסמך (CFA)",
    institution: "מכון CFA",
    year: "2014",
  },
  {
    id: "3",
    title: "הסמכת בלוקצ'יין",
    institution: "יוזמת המטבע הדיגיטלי של MIT",
    year: "2017",
  },
  {
    id: "4",
    title: "אנליסט כלכלי לשעבר",
    institution: "הבנק הפדרלי (Federal Reserve)",
    year: "2012-2015",
    description: "מחקר מקרו-כלכלי וניתוח מדיניות",
  },
];

export const aboutContent = {
  name: "תומר ספיר",
  title: "יועץ מטבעות דיגיטליים וכלכלה",
  bio: "עם למעלה מעשור של ניסיון בגישור בין כלכלה מסורתית לפיננסים דיגיטליים, אני עוזר ללקוחות לנווט בצומת המורכב של מקרו-כלכלה, מדיניות מוניטרית ושווקי מטבעות דיגיטליים. הרקע שלי כולל עבודה בבנק הפדרלי, מחקר אקדמי נרחב וניסיון מעשי בניהול תיקי נכסים דיגיטליים של מיליוני דולרים.",
  expertise: [
    "ניתוח מקרו-כלכלי",
    "שווקי מטבעות דיגיטליים",
    "ניהול סיכונים",
    "טכנולוגיית בלוקצ'יין",
    "אסטרטגיית תיקים",
    "עמידה ברגולציה",
  ],
  image: "/images/tomer-sapir-8.jpg",
};

export const contactInfo: ContactInfo = {
  email: "tomer@sapircrypto.com",
  phone: "1-555-123-4567+",
  location: "ניו יורק, ארה״ב",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/tomersapir",
      icon: "Linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/tomersapir",
      icon: "Twitter",
    },
    {
      platform: "GitHub",
      url: "https://github.com/tomersapir",
      icon: "Github",
    },
  ],
};

export const ctaContent = {
  headline: "מוכנים לשדרג את אסטרטגיית הקריפטו שלכם?",
  subheadline:
    "קבעו פגישת ייעוץ חינמית של 30 דקות לדיון על יעדי ההשקעה והאתגרים שלכם.",
  ctaText: "הזמן ייעוץ חינם",
  features: [
    "ייעוץ ללא התחייבות",
    "דיון באסטרטגיה אישית",
    "תובנות ומגמות שוק",
    "סקירת תיק זמינה",
  ],
};

export { packages } from "./content_packages";
