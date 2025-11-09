import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-amber-50 to-emerald-50" aria-hidden />
      <div className="absolute inset-0 opacity-40 mix-blend-multiply" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="jali" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 2 L78 40 L40 78 L2 40 Z" fill="none" stroke="#e9dccb" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="6" fill="#f5eadf" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jali)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-emerald-800 shadow-sm ring-1 ring-black/5"
        >
          <Crown className="h-4 w-4 text-amber-600" />
          <span className="text-sm font-medium">An ode to timeless grandeur</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-stone-900"
        >
          Luxury of Ancient Indian Architecture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-5 max-w-2xl mx-auto text-stone-700 text-lg"
        >
          Soft pastels, intricate jali patterns, hand-carved motifs, and domed silhouettes—
          a serene visual journey inspired by palaces and stepwells.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#highlights"
            className="rounded-full bg-emerald-600/90 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Explore Highlights
          </a>
          <a
            href="#gallery"
            className="rounded-full bg-white/70 backdrop-blur text-stone-800 px-6 py-3 text-sm font-medium shadow-sm ring-1 ring-black/5 hover:bg-white"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  );
}
