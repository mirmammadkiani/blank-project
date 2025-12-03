import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { CartProvider } from "./cart-context";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "پازیلا مارکت - فروشگاه سرویس های دیجیتال",
  description: "خرید اشتراک و اکانت سرویس‌های هوش مصنوعی و طراحی در پازیلا مارکت"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="container-rtl flex-1 py-8 md:py-12">
                {children}
              </main>
              <footer className="border-t border-slate-200/60 bg-white/80 py-6 text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300">
                <div className="container-rtl flex flex-col items-center justify-between gap-3 md:flex-row">
                  <span>© {new Date().getFullYear()} پازیلا مارکت</span>
                  <span className="text-xs text-slate-400">
                    طراحی شده با Next.js، Tailwind CSS و next-themes
                  </span>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}