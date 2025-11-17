import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-700">Have questions? Send us a message and we'll get back to you.</p>

        <div className="mt-6">
          <ContactForm />
        </div>
      </div>

      <aside className="bg-white p-8 rounded shadow">
        <h2 className="font-semibold">Contact Details</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li><strong>Email:</strong> info@antiquebooks.example</li>
          <li><strong>Phone:</strong> +421 123 456 789</li>
          <li><strong>Address:</strong> 123 Old Street, Bratislava, Slovakia</li>
        </ul>
      </aside>
    </div>
  )
}
