import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Droplets, Frame, Building2, Fence, GlassWater, DoorOpen, Layers, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Shower Enclosures",
    desc: "Custom frameless and semi-frameless shower doors and enclosures. We measure, fabricate, and install with precision for a seamless, modern look.",
    features: ["Frameless & semi-frameless options", "Tempered safety glass", "Custom hardware finishes", "Lifetime warranty"],
  },
  {
    icon: Frame,
    title: "Custom Mirrors",
    desc: "Decorative and functional mirrors for bathrooms, gyms, dance studios, and more. Available in any size with beveled or polished edges.",
    features: ["Wall-to-wall installations", "Beveled & polished edges", "Antique & tinted options", "Custom shapes"],
  },
  {
    icon: Building2,
    title: "Glass Storefronts",
    desc: "Commercial glass facades, entry doors, and curtain wall systems. Energy-efficient glazing options to maximize natural light.",
    features: ["Curtain wall systems", "Entry door assemblies", "Energy-efficient glass", "ADA compliant"],
  },
  {
    icon: Fence,
    title: "Glass Railings",
    desc: "Frameless and post-mounted glass railings for balconies, staircases, and pool areas. Elegant safety solutions that preserve your view.",
    features: ["Frameless & post-mounted", "Indoor & outdoor rated", "Code-compliant designs", "Stainless steel hardware"],
  },
  {
    icon: GlassWater,
    title: "Tabletops & Shelving",
    desc: "Custom-cut glass tabletops, shelves, and protective covers. Tempered for safety and available in clear, frosted, or tinted glass.",
    features: ["Custom sizes & shapes", "Tempered safety glass", "Frosted & tinted options", "Edge polishing"],
  },
  {
    icon: DoorOpen,
    title: "Glass Partitions",
    desc: "Office and residential glass partitions that create open, light-filled spaces. Available in clear, frosted, or switchable privacy glass.",
    features: ["Sliding & fixed systems", "Privacy glass options", "Sound reduction", "Custom branding"],
  },
  {
    icon: Layers,
    title: "Window Glass Replacement",
    desc: "Single, double, and triple-pane window glass replacement. Emergency board-up services and energy-efficient upgrades available.",
    features: ["Emergency services", "Energy-efficient upgrades", "Insulated glass units", "UV protection coatings"],
  },
  {
    icon: Wrench,
    title: "Glass Repair & Maintenance",
    desc: "Professional repair services for scratched, chipped, or cracked glass. Regular maintenance programs for commercial properties.",
    features: ["Scratch removal", "Chip repair", "Seal replacement", "Maintenance contracts"],
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">What We Offer</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From custom residential installations to large-scale commercial projects, we deliver premium glass solutions tailored to your needs.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group bg-card border gold-border rounded p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <div className="flex items-start gap-5">
              <div className="gold-gradient p-3 rounded shrink-0">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="text-foreground text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="gold-gradient py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Every project is unique. Contact us to discuss your specific requirements and get a free estimate.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-background/90 transition-all">
          Request a Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
