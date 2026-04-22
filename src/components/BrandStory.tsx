
"use client"

import React, { useEffect, useRef, useState } from 'react';

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Parallax (Moving slower/differently) */}
        <div 
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
        >
          <div className="absolute inset-0 scale-125">
            <img 
              src="https://picsum.photos/seed/cilantro1/1200/1600" 
              alt="Tea Field" 
              className="w-full h-full object-cover"
              data-ai-hint="tea field"
            />
          </div>
        </div>

        {/* Text Parallax (Moving in opposite direction or faster) */}
        <div 
          className="space-y-8"
          style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block">Our Philosophy</span>
          <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight">
            每一片茶葉，都是大自然的私語
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed font-light">
            Cilantro Aroma 誕生於對純粹生活的執著。我們相信茶不僅僅是一種飲品，它更是一種連結感官與靈魂的橋樑。從深山的茶園到您的茶杯，我們堅持保留每片茶葉最原始的靈魂。
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed font-light">
            在「拾情話憶」系列中，我們融合了傳統製茶工藝與現代香氛理念，讓茶湯在舌尖綻放如香水般的前、中、後調。
          </p>
          <div className="pt-8">
            <div className="h-px w-32 bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
