
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: '01', title: '拾情話憶', subtitle: 'REMNORA', desc: '在每一次呼吸間，尋回那些深藏在記憶裡的溫潤時光。' },
  { id: '02', title: '清翠之林', subtitle: 'AROMA', desc: '漫步於晨霧繚繞的茶園，感受大自然最純淨的氣息。' },
  { id: '03', title: '暖陽茶座', subtitle: 'ESSENCE', desc: '陽光灑落在杯中，品味一段慵懶而美好的午後時光。' }
];

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const logo = PlaceHolderImages.find(img => img.id === 'brand-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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

      {/* Brand Logo */}
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
        <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
          <h1 className="font-headline text-6xl md:text-8xl font-bold mb-2 tracking-tighter drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] mb-8 text-secondary drop-shadow-xl">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg text-white mb-10 font-light leading-relaxed max-w-md drop-shadow-xl">
            {slides[currentSlide].desc}
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

      {/* Slide Navigation */}
      <div className="absolute bottom-12 right-12 md:right-24 z-20 flex items-center gap-8">
        <div className="flex flex-col items-end">
          <span className="text-4xl font-headline font-bold text-secondary">{slides[currentSlide].id}</span>
          <div className="h-px w-24 bg-white/30 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-secondary transition-all duration-500" 
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span className="text-xs uppercase tracking-widest mt-2 opacity-50">0{slides.length}</span>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full border-white/20 hover:bg-white/10 text-white">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full border-white/20 hover:bg-white/10 text-white">
            <ChevronRight className="w-6 h-6" />
          </Button>
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
