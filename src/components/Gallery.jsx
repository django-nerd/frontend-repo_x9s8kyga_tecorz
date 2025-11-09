import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1706741507425-730eca44e24b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRyaWNhdGUlMjBqYWxpJTIwd2luZG93JTIwd2l0aHxlbnwwfDB8fHwxNzYyNjYwMTc3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Intricate jali window with soft light',
  },
  {
    src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1780&auto=format&fit=crop',
    alt: 'Stepwell geometry in pastel tones',
  },
  {
    src: 'https://images.unsplash.com/photo-1665071727585-436f8af6efee?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGVwd2VsbCUyMGdlb21ldHJ5JTIwaW4lMjBwYXN0ZWx8ZW58MHwwfHx8MTc2MjY2MDE3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Palace corridor with arches',
  },
  {
    src: 'https://images.unsplash.com/photo-1710195571110-7d91598c8b2a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWxhY2UlMjBjb3JyaWRvciUyMHdpdGglMjBhcmNoZXN8ZW58MHwwfHx8MTc2MjY2MDE3OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Temple carvings close-up',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-rose-50/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-stone-900 text-center"
        >
          Serene Visuals
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-60 w-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
