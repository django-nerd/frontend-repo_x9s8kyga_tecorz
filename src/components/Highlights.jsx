import { motion } from 'framer-motion';
import { Diamond, Landmark, Waves, Flower2 } from 'lucide-react';

const features = [
  {
    icon: Diamond,
    title: 'Intricate Jali Work',
    desc: 'Delicate stone lattice patterns that breathe light and shadow into serene spaces.',
  },
  {
    icon: Landmark,
    title: 'Majestic Domes',
    desc: 'Silhouettes inspired by palaces and havelis, regal yet calming in pastel hues.',
  },
  {
    icon: Waves,
    title: 'Sacred Symmetry',
    desc: 'Geometry drawn from mandalas and stepwells, composed with quiet elegance.',
  },
  {
    icon: Flower2,
    title: 'Hand-carved Motifs',
    desc: 'Floral and vine motifs echoing temple art, refined with modern minimalism.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-stone-900 text-center"
        >
          Hallmarks of Heritage Luxury
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50 p-6 ring-1 ring-black/5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <f.icon className="h-6 w-6 text-amber-700" />
                <h3 className="text-lg font-medium text-stone-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-stone-700 text-sm leading-6">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
