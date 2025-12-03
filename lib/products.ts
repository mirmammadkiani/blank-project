export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "ai" | "design";
  image: string;
  priceLabel: string;
  badge?: string;
  isAvailable: boolean;
};

export const products: Product[] = [
  {
    id: "chatgpt-plus",
    slug: "chatgpt-plus",
    title: "خرید اکانت ChatGPT OpenAI",
    description:
      "دسترسی کامل به نسخه‌های پیشرفته چت‌جی‌پی‌تی برای تولید محتوا، کدنویسی و پژوهش حرفه‌ای.",
    category: "ai",
    image: "https://pazilamarket.ir/wp-content/uploads/2025/11/11-300x300.png",
    priceLabel: "تومان 450,000 – تومان 5,600,000",
    badge: "پرفروش",
    isAvailable: true
  },
  {
    id: "perplexity-pro",
    slug: "perplexity-pro",
    title: "خرید اکانت Perplexity Pro پرپلکسیتی با ایمیل شما (ارزان)",
    description:
      "دستیار جستجو و تحقیق مبتنی بر هوش مصنوعی با پاسخ‌های مستند و سریع برای حرفه‌ای‌ها.",
    category: "ai",
    image:
      "https://pazilamarket.ir/wp-content/uploads/2025/11/1-1-300x300.webp",
    priceLabel: "تومان 480,000 – تومان 1,800,000",
    badge: "ویژه",
    isAvailable: true
  },
  {
    id: "canva-pro",
    slug: "canva-pro",
    title: "خرید اکانت Canva کانوا ارزان قابل تمدید (شارژ آنی اکانت شما)",
    description:
      "ساخت طرح‌های حرفه‌ای برای شبکه‌های اجتماعی، پوستر، پرزنتیشن و بیشتر با Canva Pro.",
    category: "design",
    image: "https://pazilamarket.ir/wp-content/uploads/2025/11/1-300x300.webp",
    priceLabel: "تومان 75,000 – تومان 630,000",
    badge: "اقتصادی",
    isAvailable: true
  },
  {
    id: "figma-2025",
    slug: "figma-2025",
    title: "خرید اکانت Figma 2025 فیگما",
    description:
      "طراحی رابط کاربری و همکاری تیمی در فیگما؛ مناسب طراحان محصول، UI و UX.",
    category: "design",
    image:
      "https://pazilamarket.ir/wp-content/uploads/2025/11/1111-300x300.png",
    priceLabel: "بزودی موجود می‌شود",
    badge: "به‌زودی",
    isAvailable: false
  },
  {
    id: "wispr-flow",
    slug: "wispr-flow",
    title: "خرید اشتراک Wispr Flow Pro",
    description:
      "ابزار هوشمند تبدیل صدا به متن و مدیریت ورک‌فلو برای افراد پرمشغله و تیم‌های حرفه‌ای.",
    category: "ai",
    image:
      "https://pazilamarket.ir/wp-content/uploads/2025/11/11111-300x300.png",
    priceLabel: "تومان 350,000 (با تخفیف از 450,000 تومان)",
    badge: "تخفیف‌دار",
    isAvailable: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) =&gt; p.slug === slug);
}