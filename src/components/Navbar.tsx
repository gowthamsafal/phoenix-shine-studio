import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/new.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/our-works", label: "Our Works" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b gold-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1.5 md:gap-2 group">
          <img src={logoImg} alt="Phoenix Logo" className="h-12 w-12 md:h-14 md:w-14 object-contain mix-blend-screen shrink-0" />
          <span className="relative font-display text-base md:text-xl font-bold tracking-wide overflow-hidden gold-text leading-none">
            {/* Auto shine sweep */}
            <span className="logo-shine-text absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(43_80%_80%_/_0.7)] to-transparent pointer-events-none z-10" />
            Phoenix Glass & Mirror
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 group ${
                location.pathname === link.to
                  ? "gold-text"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
              {/* Gold underline bar */}
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ${
                location.pathname === link.to ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-effect border-t gold-border px-6 pb-6 pt-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block py-3 border-b border-border/20 last:border-0 font-body text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.to
                  ? "gold-text"
                  : "text-foreground/60 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
