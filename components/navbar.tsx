"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useCart } from "@/app/cart-context";

export function Navbar() {
  const pathname = usePathname();
  const { totalQuantity } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="container-rtl flex items-center justify-between gap-4 py-3 md:py-4">
        {/* Right side: logo + nav (RTL) */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-right"
            aria-label="پازیلا مارکت"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 text-white shadow-card">
              <span className="text-lg font-bold">P</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                پازیلا مارکت
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                مارکت سرویس‌های دیجیتال
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm md:flex">
            <Link
              href="/"
              className={`rounded-full px-3 py-1.5 ${
                pathname === "/"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              صفحه اصلی
            </Link>
          </nav>
        </div>

        {/* Center: search */}
        <div className="hidden flex-1 max-w-xl items-center md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="جستجو در محصولات (مثلاً: ChatGPT، Canva، Figma...)"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pr-4 pl-9 text-xs text-right text-slate-800 shadow-sm outline-none transition hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
            />
          </div>
        </div>

        {/* Left side: actions (RTL) */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            aria-label="سبد خرید"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white shadow-md">
                {totalQuantity}
              </span>
            )}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile search */}
      <div className="border-t border-slate-100 bg-white/90 px-4 pb-3 pt-2 text-xs text-slate-500 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="جستجو در محصولات..."
            className="h-9 w-full rounded-full border border-slate-200 bg-white pr-3 pl-9 text-xs text-right text-slate-800 shadow-sm outline-none transition hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
          />
        </div>
      </div>
    </header>
  );
}