export default function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="text-sm font-semibold text-gray-900">Auralabs</span>
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Auralabs. All rights reserved.</p>
      </div>
    </footer>
  )
}
