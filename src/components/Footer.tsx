import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import phoenixLogo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-secondary border-t gold-border">
    <div className="container mx-auto px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={phoenixLogo} alt="Phoenix Glass Logo" className="h-10 w-auto mix-blend-screen" />
            <h3 className="font-display text-lg font-bold gold-text">
              Phoenix Glass & Mirror Inc
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium glass and mirror solutions for residential and commercial spaces. Crafting clarity since 2017.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base font-bold tracking-widest uppercase mb-1 text-foreground">
            Quick Links
          </h4>
          <div className="h-[1.5px] w-10 bg-gradient-to-r from-primary to-transparent mb-5" />
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/our-works", label: "Our Works" },
              { to: "/clients", label: "Clients" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative font-body text-xs font-bold tracking-widest uppercase text-foreground/60 hover:text-primary transition-all duration-300 group w-fit"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-base font-bold tracking-widest uppercase mb-1 text-foreground">
            Contact
          </h4>
          <div className="h-[1.5px] w-10 bg-gradient-to-r from-primary to-transparent mb-5" />
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+19803562966" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} className="text-primary shrink-0" /> 9803562966</a>
            <a href="mailto:phoenixglassandmirror@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={14} className="text-primary shrink-0" /> phoenixglassandmirror@gmail.com</a>
            <a href="https://maps.google.com/maps?q=Tampa+Florida+USA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><MapPin size={14} className="text-primary shrink-0" /> Tampa, Florida, USA</a>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/phoenix_glass_and_mirror_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded border gold-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/phoenix.mirrors.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded border gold-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t gold-border mt-10 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Phoenix Glass and Mirror Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
