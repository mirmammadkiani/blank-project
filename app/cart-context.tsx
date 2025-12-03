"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  totalQuantity: number;
  addToCart: (product: Product, quantity?: number) =&gt; void;
};

const CartContext = createContext&lt;CartContextValue | undefined&gt;(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState&lt;CartItem[]&gt;([]);

  const addToCart = (product: Product, quantity = 1) =&gt; {
    setItems((prev) =&gt; {
      const existing = prev.find((item) =&gt; item.product.slug === product.slug);
      if (existing) {
        return prev.map((item) =&gt;
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const totalQuantity = useMemo(
    () =&gt; items.reduce((sum, item) =&gt; sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () =&gt; ({
      items,
      totalQuantity,
      addToCart
    }),
    [items, totalQuantity]
  );

  return &lt;CartContext.Provider value={value}&gt;{children}&lt;/CartContext.Provider&gt;;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}