"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() =&gt; {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  if (!mounted) {
    return (
      &lt;button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        aria-label="تغییر تم"
      &gt;
        &lt;SunMedium className="h-5 w-5" /&gt;
      &lt;/button&gt;
    );
  }

  return (
    &lt;button
      type="button"
      onClick={() =&gt; setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
      aria-label="تغییر حالت روشن/تاریک"
    &gt;
      {isDark ? (
        &lt;SunMedium className="h-5 w-5" /&gt;
      ) : (
        &lt;MoonStar className="h-5 w-5" /&gt;
      )}
    &lt;/button&gt;
  );
}