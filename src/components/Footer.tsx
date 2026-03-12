import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.jpg";

const Footer = () => (
  <footer className="bg-secondary border-t gold-border">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={phoenixLogo} alt="Phoenix Glass Logo" className="h-10 w-auto rounded" />
            <h3 className="font-display text-lg font-bold gold-text">
              Phoenix Glass & Mirror Inc
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium glass and mirror solutions for residential and commercial spaces. Crafting clarity since 2005.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/our-works", label: "Our Works" },
              { to: "/clients", label: "Clients" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@phoenixglass.com</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> 123 Glass Avenue, Phoenix, AZ</span>
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
