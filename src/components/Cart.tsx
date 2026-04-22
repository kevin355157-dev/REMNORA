
"use client"

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Cart({ isOpen, onClose, items, onUpdateQty, onRemove }: any) {
  const total = items.reduce((acc: number, item: any) => acc + (item.price * item.qty), 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-background flex flex-col h-full border-l-primary/10">
        <SheetHeader className="pb-6">
          <SheetTitle className="font-headline text-3xl text-primary flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" /> 您的購物籃
          </SheetTitle>
          <SheetDescription>
            目前購物籃內共有 {items.length} 件商品
          </SheetDescription>
        </SheetHeader>
        
        <Separator className="bg-primary/5" />

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-foreground/40 space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="font-light">您的購物車目前是空的</p>
              <Button variant="outline" onClick={onClose} className="rounded-full">去逛逛吧</Button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item: any) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-muted flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-headline text-lg text-primary leading-tight">{item.name}</h4>
                      <p className="text-sm text-foreground/50 font-bold mt-1">NT$ {item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-primary/10 rounded-full px-2 py-1 gap-4">
                        <button onClick={() => onUpdateQty(item.id, item.qty - 1)} className="hover:text-primary transition-colors disabled:opacity-30" disabled={item.qty <= 1}><Minus className="w-4 h-4" /></button>
                        <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.id, item.qty + 1)} className="hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="text-destructive hover:scale-110 transition-transform"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="pt-6 border-t border-primary/5">
            <div className="w-full space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-foreground/50 uppercase tracking-widest text-xs font-bold">總計金額</span>
                <span className="text-3xl font-headline text-primary font-bold">NT$ {total.toLocaleString()}</span>
              </div>
              <Button className="w-full h-14 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 shadow-xl shadow-primary/20">
                立即結帳
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
