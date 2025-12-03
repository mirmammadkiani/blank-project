import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/cart-context";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900">
      <Link href={`/products/${product.slug}`} className="relative block">
        <div className="relative aspect-square w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 250px, 50vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute right-3 top-3 rounded-full bg-gradient-to-l from-indigo-500 to-sky-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-md">
              {product.badge}
            </span>
          )}
          {!product.isAvailable && (
            <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
              بزودی موجود می‌شود
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        <Link href={`/products/${product.slug}`} className="flex-1">
          <h3 className="line-clamp-2 text-right text-sm font-semibold text-slate-900 dark:text-slate-50">
            {product.title}
          </h3>
        </Link>
        <p className="line-clamp-2 text-right text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {product.description}
        </p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {product.priceLabel}
          </span>
          <button
            type="button"
            disabled={!product.isAvailable}
            onClick={() => product.isAvailable && addToCart(product, 1)}
            className="inline-flex items-center gap-1 rounded-full border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-500 dark:disabled:border-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-400"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span>افزودن به سبد</span>
          </button>
        </div>
      </div>
    </div>
  );
}