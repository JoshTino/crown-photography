import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "images/lady-squat.jpg",
  "images/sitting-man.jpg",
  "images/wedding.jpg",
  "images/red-gown.jpg",
  "images/birthday.jpg",
  "images/couple.jpg",
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl text-gold font-bold text-center mb-12">
        Portfolio
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={`${img}?auto=format&fit=crop&w=800&q=80`}
            className="w-full h-48 md:64 object-cover transition duration-500 cursor-pointer rounded-xl hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute top-4 right-4 text-gold cursor-pointer"
              size={32}
              onClick={() => setSelected(null)}
            />
            <img
              src={`${selected}?auto=format&fit=crop&w=1200&q=100`}
              className="rounded-xl w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}