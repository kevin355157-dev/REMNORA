
"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const slides = [
  { id: '01', title: '拾情話憶', subtitle: 'REMNORA', desc: '在每一次呼吸間，尋回那些深藏在記憶裡的溫潤時光。' },
  { id: '02', title: '清翠之林', subtitle: 'SILVAN', desc: '穿越靜謐森林，感受雨後草木最原始的芬芳吐納。' },
  { id: '03', title: '暖陽茶座', subtitle: 'SOLACE', desc: '當第一抹暖陽灑在杯沿，世界都在这一刻安靜了下來。' },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const logo = PlaceHolderImages.find(img => img.id === 'brand-logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 400);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 400);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Parallax Background Video */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ 
          transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://drive.google.com/uc?export=download&id=1azhzPOvUrA1gGCFIPEVOSx6XZxBKdkMv" type="video/mp4" />
        </video>
      </div>

      {/* Brand Logo Top Left - Increased Size */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-4">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md">
          {logo && (
            <Image 
              src={logo.imageUrl} 
              alt={logo.description} 
              width={256} 
              height={256} 
              className="w-full h-full object-contain p-4"
              data-ai-hint="brand logo"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-12 md:px-24">
        <div 
          className={cn(
            "max-w-2xl transition-all duration-500",
            isAnimating ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0"
          )}
          style={{ 
            transform: `translate3d(0, ${scrollY * -0.2}px, 0)` 
          }}
        >
          <h1 className="font-headline text-6xl md:text-8xl font-bold mb-2 tracking-tighter drop-shadow-lg text-white">
            {currentSlide.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] mb-8 text-secondary drop-shadow-md">
            {currentSlide.subtitle}
          </h2>
          <p className="text-lg text-white mb-10 font-light leading-relaxed max-w-md drop-shadow-md">
            {currentSlide.desc}
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full px-8 py-6 border-white text-white hover:bg-white hover:text-black transition-all bg-black/20 backdrop-blur-sm">
              探索系列
            </Button>
            <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-secondary border-none shadow-xl">
              立即購買
            </Button>
          </div>
        </div>

        {/* Right Nav */}
        <div 
          className="absolute right-12 md:right-24 bottom-24 flex flex-col items-end gap-12"
          style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 0)` }}
        >
          <div className="text-8xl font-headline font-bold text-white/40 select-none drop-shadow-2xl">
            {currentSlide.id}
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full border-white/40 bg-black/20 backdrop-blur-sm hover:bg-white/10 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full border-white/40 bg-black/20 backdrop-blur-sm hover:bg-white/10 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Social Icons */}
      <div className="absolute bottom-8 left-12 md:left-24 flex gap-6 z-20 opacity-80 hover:opacity-100 transition-opacity">
        <a href="#" className="hover:text-secondary drop-shadow-md"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="hover:text-secondary drop-shadow-md"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="hover:text-secondary drop-shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 10.304l-1.503-1.503-6.598 6.598-6.598-6.598-1.503 1.503 8.101 8.101 8.101-8.101z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
