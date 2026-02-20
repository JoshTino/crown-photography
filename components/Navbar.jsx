import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gold">CROWN PHOTOGRAPHY</h1>

          <div className="hidden md:flex gap-8 text-sm">
            {["Home", "About", "Portfolio", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gold transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <button
            className="md:hidden text-gold"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Side Nav */}
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed top-0 left-0 w-3/4 h-screen bg-black z-50 p-8"
        >
          <div className="flex justify-between mb-8">
            <h2 className="text-gold text-xl font-bold">Menu</h2>
            <X className="text-gold cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <div className="flex flex-col gap-6 text-lg">
            {["Home", "About", "Portfolio", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-gold"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}