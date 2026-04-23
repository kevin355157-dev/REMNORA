
"use client"

import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandStory } from '@/components/BrandStory';
import { TeaIntro } from '@/components/TeaIntro';
import { Products } from '@/components/Products';
import { FAQ } from '@/components/FAQ';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateCartQty = (id: number, qty: number) => {
    if (qty < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="relative bg-background">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      
      <Hero />
      
      <div id="brand-story">
        <BrandStory />
      </div>
      
      <TeaIntro />
      
      <div id="products-section">
        <Products onAddToCart={addToCart} />
      </div>

      <FAQ />

      <Footer />

      <Cart 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cartItems}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
      />

      <Toaster />
    </main>
  );
}
