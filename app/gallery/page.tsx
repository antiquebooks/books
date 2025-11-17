import data from '../../data/collections'

export default function GalleryPage() {
  const categories = data.categories
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((c) => (
          <div key={c.slug} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
