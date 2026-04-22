
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const products = [
  { id: 1, name: '拾情話憶 - 經典原味', price: 1280, category: '綠茶', imgId: 'product-01' },
  { id: 2, name: '清翠之林 - 森林呼吸', price: 1450, category: '烏龍', imgId: 'product-02' },
  { id: 3, name: '暖陽茶座 - 恬靜時光', price: 1100, category: '白茶', imgId: 'product-03' },
  { id: 4, name: '月光漫步 - 舒緩好眠', price: 1680, category: '草本', imgId: 'product-04' },
  { id: 5, name: '晨曦之露 - 茉莉綠茶', price: 980, category: '綠茶', imgId: 'product-05' },
  { id: 6, name: '幽谷百合 - 高山烏龍', price: 1850, category: '烏龍', imgId: 'product-06' },
  { id: 7, name: '晚霞餘暉 - 炭焙紅茶', price: 1320, category: '紅茶', imgId: 'product-07' },
  { id: 8, name: '仲夏夜夢 - 荔枝紅茶', price: 1150, category: '果茶', imgId: 'product-08' },
  { id: 9, name: '初雪消融 - 銀針白毫', price: 2100, category: '白茶', imgId: 'product-09' },
  { id: 10, name: '沁涼山泉 - 薄荷青茶', price: 880, category: '青茶', imgId: 'product-10' },
  { id: 11, name: '琥珀微光 - 經典普洱', price: 1580, category: '黑茶', imgId: 'product-11' },
  { id: 12, name: '繁花盛開 - 玫瑰花茶', price: 1250, category: '花茶', imgId: 'product-12' },
];

export function Products({ onAddToCart }: { onAddToCart: (product: any) => void }) {
  const { toast } = useToast();

  const handleAdd = (product: any) => {
    const img = PlaceHolderImages.find(p => p.id === product.imgId)?.imageUrl || '';
    onAddToCart({ ...product, img });
    toast({
      title: "已加入購物車",
      description: `${product.name} 已成功加入您的清單。`,
    });
  };

  return (
    <section id="products" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Collection</span>
            <h2 className="font-headline text-5xl md:text-6xl text-primary mt-4">嚴選系列茶品</h2>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto font-bold tracking-widest hover:no-underline">
            查看所有商品 →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => {
            const imageData = PlaceHolderImages.find(p => p.id === product.imgId);
            return (
              <div key={product.id} className="group">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted mb-6 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={imageData?.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    data-ai-hint={imageData?.imageHint || "tea"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <Button 
                    onClick={() => handleAdd(product)}
                    className="absolute bottom-4 right-4 rounded-full w-12 h-12 p-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl bg-primary text-white"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <Badge variant="secondary" className="bg-accent/30 text-primary border-none mb-2 rounded-full px-4">{product.category}</Badge>
                  <h3 className="font-headline text-2xl text-primary group-hover:text-primary/70 transition-colors">{product.name}</h3>
                  <p className="text-foreground/50 text-sm font-medium tracking-widest uppercase">NT$ {product.price.toLocaleString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
