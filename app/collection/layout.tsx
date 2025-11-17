import Link from 'next/link'
import { ReactNode } from 'react'

export default function CollectionLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Collection</h1>
        <p className="text-sm text-gray-600">Explore categories and items</p>
      </header>
      <div>{children}</div>
      <div className="mt-6">
        <Link href="/collection" className="text-sm text-blue-600">Back to collections</Link>
      </div>
    </div>
  )
}
