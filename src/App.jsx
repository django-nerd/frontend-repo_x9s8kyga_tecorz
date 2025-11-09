import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Shilpa Heritage
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#highlights" className="text-stone-700 hover:text-stone-900">Highlights</a>
            <a href="#gallery" className="text-stone-700 hover:text-stone-900">Gallery</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Highlights />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
