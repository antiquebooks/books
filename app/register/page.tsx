export default function RegisterPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Register</h2>
      <p className="text-sm text-gray-600">Create an account (placeholder).</p>
      <form className="mt-4 space-y-3 max-w-sm">
        <input placeholder="Name" className="w-full p-2 border rounded" />
        <input placeholder="Email" className="w-full p-2 border rounded" />
        <input placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
      </form>
    </div>
  )
}
