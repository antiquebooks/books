import Link from 'next/link'
import data from '../../data/collections'

export default function CollectionIndex() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {data.categories.map((category) => (
        <Link key={category.slug} href={`/collection/${category.slug}`} className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">{category.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
