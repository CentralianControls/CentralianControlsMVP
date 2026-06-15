import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/logos/cc-logo2-nobg.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a1d23] text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="mb-5 flex items-center gap-2">
            <img
              src={logo}
              alt="Centralian Controls"
              className="h-14 w-auto"
            />
          </div>
          <p className="max-w-md leading-relaxed text-gray-400">
            Better Controls, Better Business. Industrial automation hardware,
            control panels, RTU/PLC enclosures and turnkey packages for
            Australian industry.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Website</h4>
          <div className="space-y-3">
            <Link to="/about" className="block hover:text-cyan-400">About</Link>
            <Link to="/solutions" className="block hover:text-cyan-400">Solutions</Link>
            <Link to="/products" className="block hover:text-cyan-400">Products</Link>
            <Link to="/case-studies" className="block hover:text-cyan-400">Case Studies</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <div className="space-y-4 text-sm">
            <p className="flex gap-3"><MapPin size={18} className="text-cyan-400" /> Adelaide, Australia</p>
            <p className="flex gap-3"><Phone size={18} className="text-cyan-400" /> +61 8 8300 3500</p>
            <p className="flex gap-3"><Mail size={18} className="text-cyan-400" /> enquiries@centralian.com.au</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
        © 2026 Centralian Controls. Website MVP Prototype.
      </div>
    </footer>
  );
}