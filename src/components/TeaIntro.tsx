
"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const notes = [
  { 
    title: '前調 (Top Note)', 
    subtitle: '草本與清新', 
    desc: '初入唇齒的瞬間，是如晨露般剔透的綠茶清香與野薄荷的凉意。',
    img: 'https://picsum.photos/seed/herb1/400/300'
  },
  { 
    title: '中調 (Middle Note)', 
    subtitle: '花香與溫潤', 
    desc: '茶湯滑過喉間，隱約透出白玉蘭的幽雅與烏龍茶特有的岩骨花香。',
    img: 'https://picsum.photos/seed/herb2/400/300'
  },
  { 
    title: '後調 (Base Note)', 
    subtitle: '木質與回甘', 
    desc: '飲畢，舌根生津，餘韻繚繞著淡雅的檀香與老樅的沉穩底蘊。',
    img: 'https://picsum.photos/seed/herb3/400/300'
  },
];

export function TeaIntro() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="tea-intro" className="py-48 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Parallax Floating Leaf - Foreground fast */}
      <div 
        className="absolute top-[-10%] right-[-10%] opacity-10 pointer-events-none"
        style={{ 
          transform: `translate3d(${scrollY * -0.2}px, ${scrollY * 0.3}px, 0) rotate(${scrollY * 0.05}deg)`,
        }}
      >
        <img 
          src="https://picsum.photos/seed/leaves/1000/1000" 
          alt="bg-leaf" 
          className="w-[800px] md:w-[1200px]" 
        />
      </div>

      <div 
        className="absolute bottom-[-20%] left-[-10%] opacity-5 pointer-events-none"
        style={{ 
          transform: `translate3d(${scrollY * 0.1}px, ${scrollY * -0.2}px, 0) rotate(${scrollY * -0.03}deg)`,
        }}
      >
        <img 
          src="https://picsum.photos/seed/leaves2/1000/1000" 
          alt="bg-leaf-2" 
          className="w-[600px] md:w-[1000px]" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-24"
          style={{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }}
        >
          <h2 className="font-headline text-5xl md:text-7xl mb-6">三階段感官之旅</h2>
          <p className="max-w-2xl mx-auto opacity-70 font-light text-lg">
            我們以調香師的視角，為每一款茶定義了獨特的層次感。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <div 
              key={note.title}
              style={{ 
                transform: `translate3d(0, ${scrollY * (0.02 * (index + 1))}px, 0)`,
              }}
            >
              <Card className="bg-white/5 border-white/10 text-primary-foreground backdrop-blur-sm hover:bg-white/10 transition-all border-none rounded-[2.5rem] overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={note.img} 
                    alt={note.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-10">
                  <h3 className="font-headline text-3xl mb-2">{note.title}</h3>
                  <p className="text-secondary text-sm mb-6 font-bold tracking-[0.2em] uppercase">{note.subtitle}</p>
                  <p className="opacity-70 font-light leading-relaxed text-lg italic">「 {note.desc} 」</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
