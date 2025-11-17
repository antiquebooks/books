import data from '../../../data/collections'
import Link from 'next/link'

interface Props {
  params: { category: string }
}

export default function CategoryPage({ params }: Props) {
  const category = data.categories.find((c) => c.slug === params.category)
  if (!category) {
    return <p className="bg-white p-4 rounded shadow">Category not found.</p>
  }

  const items = data.items.filter((i) => i.category === category.slug)

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{category.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{category.description}</p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.slug} href={`/collection/${category.slug}/${item.slug}`} className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{item.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
