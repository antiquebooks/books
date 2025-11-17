import { ReactNode } from 'react'
import Link from 'next/link'

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <header className="mb-4">
        <h1 className="text-xl font-bold">Account</h1>
        <nav className="mt-2 space-x-4 text-sm">
          <Link href="/account/login" className="text-blue-600">Login</Link>
          <Link href="/account/register" className="text-blue-600">Register</Link>
          <Link href="/account/orders" className="text-blue-600">Orders</Link>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  )
}
