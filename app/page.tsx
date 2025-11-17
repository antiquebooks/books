import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded shadow p-8">
        <h1 className="text-3xl font-bold">Antiquebooks</h1>
        <p className="mt-2 text-gray-700">
          Curated selection of old prints, judaica, science fiction and more.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/collection" className="btn-primary px-4 py-2 bg-blue-600 text-white rounded">Browse Collections</Link>
          <Link href="/shop" className="px-4 py-2 rounded border">Visit Shop</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Featured</h3>
          <p className="mt-2 text-sm text-gray-600">Highlighting selected rare items.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Gallery</h3>
          <p className="mt-2 text-sm text-gray-600">Images and categories overview.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Account</h3>
          <p className="mt-2 text-sm text-gray-600">Login, register and view orders.</p>
        </div>
      </section>
    </div>
  )
}
