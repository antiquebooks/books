'use client'
import Link from 'next/link'
import { useState, useContext } from 'react'
import data from '../data/collections'
import LanguageSwitcher from './LanguageSwitcher'
import { CartContext } from './CartProvider'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { items } = useContext(CartContext)
  const count = items.reduce((s, it) => s + it.quantity, 0)

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">Antiquebooks</Link>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-sm">Home</Link>
            <Link href="/about" className="text-sm">About</Link>
            <Link href="/gallery" className="text-sm">Gallery</Link>

            <div className="relative">
              <button onClick={() => setOpen(!open)} className="text-sm">Collection ▾</button>
              {open && (
                <div onMouseLeave={() => setOpen(false)} className="absolute top-8 left-0 bg-white border rounded shadow p-3 w-64">
                  <ul className="space-y-2">
                    {data.categories.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/collection/${c.slug}`} className="text-sm block">{c.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-sm">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button title="Search" className="p-2 rounded hover:bg-gray-100">
            🔍
          </button>
          <Link href="/shop" className="text-sm hidden md:inline">Online Shop</Link>
          <Link href="/account" className="p-2 rounded hover:bg-gray-100">👤</Link>
          <Link href="/cart" className="p-2 rounded hover:bg-gray-100 relative">
            🛒
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">{count}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
