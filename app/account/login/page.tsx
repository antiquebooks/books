export default function LoginPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Login</h2>
      <p className="text-sm text-gray-600">Placeholder login form (hook up auth to enable).</p>
      <form className="mt-4 space-y-3 max-w-sm">
        <input placeholder="Email" className="w-full p-2 border rounded" />
        <input placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  )
}
