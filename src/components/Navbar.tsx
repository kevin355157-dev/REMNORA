
"use client"

import React, { useState, useEffect } from 'react';
import { Moon, Sun, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar({ onCartOpen }: { onCartOpen: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'brand-logo');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: '產品', href: '#products' },
    { name: '茶葉', href: '#brand-story' },
    { name: '成分', href: '#tea-intro' },
    { name: '侍茶師', href: '#ai-sommelier' },
    { name: '常見問題', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center">
            <div className="h-10 md:h-12 w-auto flex items-center">
              {logo && (
                <Image 
                  src={logo.imageUrl} 
                  alt={logo.description} 
                  width={400} 
                  height={108} 
                  className={cn(
                    "h-full w-auto object-contain transition-all duration-300",
                    !isScrolled && "brightness-0 invert"
                  )}
                />
              )}
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground/80" : "text-white/80"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className={cn("flex items-center gap-2 border-l pl-8", isScrolled ? "border-border" : "border-white/20")}>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className={isScrolled ? "" : "text-white hover:bg-white/10"}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onCartOpen} className={isScrolled ? "" : "text-white hover:bg-white/10"}>
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onCartOpen} className={isScrolled ? "" : "text-white hover:bg-white/10"}>
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? "" : "text-white hover:bg-white/10"}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" className="mt-4" onClick={toggleTheme}>
              {isDark ? "淺色模式" : "深色模式"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
