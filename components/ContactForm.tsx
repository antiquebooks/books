'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    // In real site: POST to API route /api/contact
    setStatus('sent')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
      <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full p-2 border rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-2 border rounded h-28" />
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </div>

      {status === 'sent' && <div className="text-green-600">Message sent (demo only).</div>}
      {status === 'error' && <div className="text-red-600">Please fill the required fields.</div>}
    </form>
  )
}
