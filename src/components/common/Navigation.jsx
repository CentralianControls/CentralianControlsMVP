import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/cc-logo-nobg.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Products", path: "/products" },
  { label: "Brands", path: "/brands" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-[#0ea5e9]" : "text-[#1a1d23] hover:text-[#0ea5e9]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Centralian Controls"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClass}>
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="rounded-lg bg-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0284c7]"
            >
              Enquire Now
            </Link>
          </div>

          <button
            className="text-[#1a1d23] lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-3 px-5 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={navClass}
              >
                <span className="block py-1">{link.label}</span>
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg bg-[#0ea5e9] px-5 py-3 text-center font-semibold text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}