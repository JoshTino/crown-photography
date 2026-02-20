import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-t from-black to-gray-900">
      <h2 className="text-4xl text-gold font-bold text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-4 bg-black border border-gold/40 rounded-xl outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-black border border-gold/40 rounded-xl outline-none"
          />
          <textarea
            placeholder="Message"
            required
            rows="4"
            className="w-full p-4 bg-black border border-gold/40 rounded-xl outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-bold py-3 rounded-xl hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-gold">
          <a href="https://facebook.com/profile.php?id=100083536351969"><Facebook className="cursor-pointer hover:scale-110 transition" /></a>
          <a href=""><Instagram className="cursor-pointer hover:scale-110 transition" /></a>
          <a href="https://wa.me/2348158255799"><MessageCircle className="cursor-pointer hover:scale-110 transition" /></a>
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} Crown Photography.  
          Made with ❤️ by Dangana Joshua
        </p>
      </div>
    </section>
  );
}