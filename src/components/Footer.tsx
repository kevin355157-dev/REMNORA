
"use client"

import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#FCF5D2] dark:bg-[#191F14CC] text-primary pt-24 pb-12 border-t border-primary/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-2">
            <h2 className="font-headline text-4xl font-bold tracking-widest">REMNORA</h2>
            <p className="text-foreground/70 dark:text-foreground/60 max-w-sm leading-relaxed font-light">
              致力於將傳統製茶工藝與現代美學結合，為追求高品質生活的您，提供一場穿越感官的香氛之旅。
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/remnora_?igsh=MWwyYjhzd3B2YzQ5cQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:hello@remnora.com" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold tracking-widest uppercase text-xs opacity-50">探索品牌</h4>
            <ul className="space-y-4 font-light">
              <li><a href="#" className="hover:text-primary transition-colors">關於我們</a></li>
              <li><a href="#brand-story" className="hover:text-primary transition-colors">品牌故事</a></li>
              <li><a href="#tea-intro" className="hover:text-primary transition-colors">茶園之旅</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">永續承諾</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold tracking-widest uppercase text-xs opacity-50">聯絡資訊</h4>
            <ul className="space-y-4 font-light">
              <li className="flex gap-3"><MapPin className="w-4 h-4 flex-shrink-0" /> <span>台北市大安區香氛路 101 號</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 flex-shrink-0" /> <span>+886 2 2345 6789</span></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 flex-shrink-0" /> <span>hello@remnora.com</span></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest font-light opacity-50">
          <p>© 2024 REMNORA AROMA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">隱私權政策</a>
            <a href="#" className="hover:text-primary">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
