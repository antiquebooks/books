'use client'
import React, { createContext, useEffect, useState } from 'react'

export type CartItem = {
  slug: string
  title: string
  price?: number
  quantity: number
  category?: string
  shortDescription?: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (slug: string) => void
  clear: () => void
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {}
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('ab_cart') : null
    if (raw) setItems(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('ab_cart', JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const exist = prev.find((p) => p.slug === item.slug)
      if (exist) {
        return prev.map((p) => (p.slug === item.slug ? { ...p, quantity: p.quantity + item.quantity } : p))
      }
      return [...prev, item]
    })
  }

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug))
  }

  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}
