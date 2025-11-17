export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Antiquebooks</div>
          <div className="space-x-4">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/collection">Collection</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
