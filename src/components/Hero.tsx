
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram } from 'lucide-react';

const slide = { id: '01', title: '拾情話憶', subtitle: 'REMNORA', desc: '在每一次呼吸間，尋回那些深藏在記憶裡的溫潤時光。' };

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const logo = PlaceHolderImages.find(img => img.id === 'brand-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video with basic parallax */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://www.image2url.com/r2/default/videos/1776867400437-e0a3a571-4ebd-4111-abc1-ec18b3bc7d57.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Brand Logo - Simplified No-Circle Design */}
      <div className="absolute top-8 left-8 z-20">
        <div className="w-32 h-32 md:w-64 md:h-64 flex items-center justify-center">
          {logo && (
            <Image 
              src={logo.imageUrl} 
              alt={logo.description} 
              width={512} 
              height={512} 
              className="w-full h-full object-contain"
              data-ai-hint="brand logo"
              priority
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-12 md:px-24">
        <div className="max-w-2xl">
          <h1 className="font-headline text-6xl md:text-8xl font-bold mb-2 tracking-tighter drop-shadow-2xl">
            {slide.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] mb-8 text-secondary drop-shadow-xl">
            {slide.subtitle}
          </h2>
          <p className="text-lg text-white mb-10 font-light leading-relaxed max-w-md drop-shadow-xl">
            {slide.desc}
          </p>
          <div className="flex gap-4">
            <a href="#products">
              <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-secondary border-none shadow-xl transition-all active:scale-95">
                立即購買
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Social Icons */}
      <div className="absolute bottom-8 left-12 md:left-24 flex gap-6 z-20 opacity-80 hover:opacity-100 transition-opacity">
        <a href="https://www.instagram.com/remnora_?igsh=MWwyYjhzd3B2YzQ5cQ==" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
