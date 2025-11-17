'use client'
import { useContext } from 'react'
import { CartContext } from '../../components/CartProvider'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, clear } = useContext(CartContext)
  const total = items.reduce((s, it) => s + (it.price || 0) * it.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <p className="mt-2"><Link href="/collection" className="text-blue-600">Browse collections</Link></p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Cart</h2>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.slug} className="flex justify-between items-center">
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">Qty: {it.quantity}</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-medium">€{(it.price || 0) * it.quantity}</div>
              <button onClick={() => removeItem(it.slug)} className="text-sm text-red-600">Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center pt-4 border-t">
        <div className="text-lg font-semibold">Total: €{total.toFixed(2)}</div>
        <div className="flex gap-3">
          <button onClick={() => clear()} className="px-3 py-2 border rounded">Clear</button>
          <Link href="/checkout" className="px-4 py-2 bg-green-600 text-white rounded">Checkout</Link>
        </div>
      </div>
    </div>
  )
}
