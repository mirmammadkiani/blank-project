import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6 text-right">
          <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-950/40 dark:text-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            تازه‌ترین سرویس‌های هوش مصنوعی و طراحی
          </span>
          <h1 className="text-balance text-3xl font-extrabold leading-[1.25] text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-50">
            دنیای طراحی در
            <br />
            <span className="bg-gradient-to-l from-indigo-500 via-violet-500 to-sky-400 bg-clip-text text-transparent">
              دستان شما
            </span>
          </h1>
          <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
            کانوا پرو، ChatGPT، Perplexity، Figma و ده‌ها سرویس دیگر؛ همه در یک
            جا، با فعال‌سازی سریع و پشتیبانی واقعی. مناسب طراحان، تولیدکنندگان
            محتوا و تیم‌های حرفه‌ای.
          </p>

          <div className="flex flex-wrap items-center justify-end gap-3">
            <Link
              href="#featured"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              مشاهده محصولات منتخب
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              فعال‌سازی آنی • پرداخت امن • پشتیبانی سریع
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-bl from-indigo-500/20 via-sky-400/10 to-violet-500/20 blur-2xl dark:from-indigo-500/25 dark:via-sky-500/15 dark:to-violet-500/25" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-right">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    محبوب‌ترین سرویس‌ها
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    اشتراک‌های هوش مصنوعی و طراحی
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
                  تا ۲۰٪ تخفیف
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl bg-slate-900 px-3 py-3 text-right text-slate-50 dark:bg-slate-800">
                  <div className="text-[11px] text-slate-300">
                    ChatGPT Plus
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    چت، کدنویسی، ترجمه
                  </div>
                  <div className="mt-2 text-[10px] text-emerald-400">
                    شروع از ۴۵۰,۰۰۰ تومان
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 px-3 py-3 text-right text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Canva Pro
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    طراحی بدون محدودیت
                  </div>
                  <div className="mt-2 text-[10px] text-emerald-600 dark:text-emerald-400">
                    شروع از ۷۵,۰۰۰ تومان
                  </div>
                </div>
                <div className="rounded-2xl bg-indigo-50 px-3 py-3 text-right text-slate-900 dark:bg-indigo-950/60 dark:text-slate-50">
                  <div className="text-[11px] text-indigo-700 dark:text-indigo-200">
                    Perplexity Pro
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    تحقیق سریع و دقیق
                  </div>
                  <div className="mt-2 text-[10px] text-indigo-700/80 dark:text-indigo-200">
                    همراه با ایمیل شما
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 px-3 py-3 text-right text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Figma 2025
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    به‌زودی در پازیلا
                  </div>
                  <div className="mt-2 text-[10px] text-amber-600 dark:text-amber-400">
                    ثبت‌نام در لیست انتظار
                  </div>
                </div>
              </div>

              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                پرداخت امن ریالی، تحویل آنی اکانت، همراه با راهنمای قدم‌به‌قدم
                فعال‌سازی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section id="featured" className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="text-right">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl dark:text-slate-50">
              پرفروش‌ترین محصولات پازیلا مارکت
            </h2>
            <p className="text-xs text-slate-500 md:text-sm dark:text-slate-400">
              مجموعه‌ای از محبوب‌ترین سرویس‌ها با بهترین قیمت
            </p>
          </div>
          <Link
            href="#"
            className="hidden text-xs font-medium text-indigo-600 hover:text-indigo-700 md:inline-block dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            مشاهده همه محصولات
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}