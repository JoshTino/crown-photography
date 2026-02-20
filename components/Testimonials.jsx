import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Queen Juliet",
      text: "The birthday shoot exceeded my expectations. The lighting, angles, and edits were absolutely stunning. I felt like royalty!",
    },
    {
      name: "Sandra Alaefuna",
      text: "Crown phtography makes great shots.",
    },
  ];
  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-4xl text-gold font-bold text-center mb-12">
        Testimonials
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map(
          (testimonial, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="p-6 border border-gold/30 rounded-xl"
            >
              <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <h4 className="font-medium"><cite>{testimonial.name}</cite></h4>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}