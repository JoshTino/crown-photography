import { motion } from "framer-motion";

export default function Services() {
  const services = [
  {
    title: "Wedding Coverage",
    description:
      "Complete coverage capturing every emotional moment of your special day with timeless elegance."
  },
  {
    title: "Birthday Shoots",
    description:
      "Vibrant and stylish photography to preserve your celebration beautifully."
  },
  {
    title: "Indoor & Outdoor Shoots",
    description:
      "Professional portrait sessions in studio or natural settings."
  },
  {
    title: "Commercial Photography",
    description:
      "High-quality branding and product visuals for businesses."
  },
  {
    title: "Pre-Wedding & Engagement Sessions",
    description:
      "Romantic sessions that tell your love story before the big day."
  }
];
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl text-gold font-bold text-center mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 border border-gold/30 rounded-2xl bg-gradient-to-b from-gray-900 to-black"
          >
            <h3 className="text-xl text-gold font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}