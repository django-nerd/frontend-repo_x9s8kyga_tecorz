export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-stone-600 text-sm">© {new Date().getFullYear()} Shilpa Heritage. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-stone-700">
          <a href="#highlights" className="hover:text-stone-900">Highlights</a>
          <a href="#gallery" className="hover:text-stone-900">Gallery</a>
          <a href="#" className="hover:text-stone-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
