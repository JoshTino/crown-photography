import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 text-center bg-gradient-to-b from-black via-black to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl md:text-7xl w-fit leading-14 text-gold mb-6">
          Capture Royal Moments
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto leading-7 my-3 font-light">
            We transform fleeting moments into royal masterpieces - capturing emotion, beauty,
            and timeless sophistication in every frame.
        </p>

      <a href="#portfolio" className="px-8 py-3 cursor-pointer bg-white my-3 text-black rounded-full hover:bg-gray-200 transition">
        View Portfolio
      </a>
      <a href="#contact" className="px-8 py-3 cursor-pointer bg-gold text-black my-3 text-black rounded-full hover:bg-yellow-700 transition">
        Book now
      </a>
      </motion.div>
    </section>
  );
}