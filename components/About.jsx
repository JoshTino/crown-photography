import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-gold font-bold mb-6">About Us</h2>
        <p className="text-gray-400 leading-relaxed">
          Crown Photography delivers timeless images with premium precision.
          We specialize in weddings, portraits, and commercial shoots with a royal touch.
        </p>
      </motion.div>
    </section>
  );
}