import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/lp.png";
import workShower from "@/assets/work-shower.jpg";
import workMirror from "@/assets/work-mirror.jpg";
import workStorefront from "@/assets/work-storefront.jpg";
import { Shield, Award, Clock, ArrowRight } from "lucide-react";

const services = [
  { title: "Shower Enclosures", image: workShower, desc: "Custom frameless and semi-frameless shower enclosures." },
  { title: "Decorative Mirrors", image: workMirror, desc: "Elegant mirrors for residential and commercial spaces." },
  { title: "Glass Storefronts", image: workStorefront, desc: "Commercial glass facades and storefront installations." },
];

const stats = [
  { icon: Shield, label: "Licensed & Insured", value: "100%" },
  { icon: Award, label: "Projects Completed", value: "2,500+" },
  { icon: Clock, label: "Years Experience", value: "20+" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-section relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with slow drift */}
      <img src={heroImg} alt="Luxury glass installation" className="hero-eagle absolute inset-0 w-full h-full object-cover" />

      {/* 1. Lighter base overlay so image stays rich */}
      <div className="absolute inset-0 bg-background/30" />

      {/* 2. Vignette */}
      <div className="hero-vignette absolute inset-0" />

      {/* 3. Large glass panel — right side bright reflection */}
      <div className="hero-mirror-panel" />

      {/* 4. Horizontal shimmer bands — like reflections across a glass wall */}
      <div className="hero-shimmer hero-shimmer-1" />
      <div className="hero-shimmer hero-shimmer-2" />

      {/* 6. Floor mirror — strong glossy pool at bottom */}
      <div className="hero-floor-mirror absolute bottom-0 left-0 right-0" />

      {/* 7. Fine glass panel grid */}
      <div className="hero-glass-grid absolute inset-0" />

      {/* 8. Gold corner frame ornaments */}
      <div className="hero-corner hero-corner-tl" />
      <div className="hero-corner hero-corner-tr" />
      <div className="hero-corner hero-corner-bl" />
      <div className="hero-corner hero-corner-br" />

      {/* 9. Top & bottom edge gold lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-primary font-body text-sm font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>Premium Glass Solutions</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          Phoenix Glass <span className="gold-text">&</span> Mirror Inc
        </h1>
        <p className="text-foreground text-base md:text-lg font-semibold mb-8 max-w-xl mx-auto animate-fade-in drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]" style={{ animationDelay: "1s", opacity: 0 }}>
          Transforming spaces with precision-crafted glass and mirror installations since 2005.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <Link to="/contact" className="gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded transition-all hover:opacity-90">
            Get a Free Quote
          </Link>
          <Link to="/our-works" className="border border-primary/30 text-primary font-body font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-primary/10 transition-all">
            View Our Work
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-secondary py-10 md:py-16 relative overflow-hidden">
      {/* Top gold reflection line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
      {/* Bottom gold reflection line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
      {/* Subtle gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,hsl(43_50%_55%_/_0.07),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 justify-center">
            <s.icon className="text-primary" size={32} />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-2">What We Do</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded overflow-hidden border gold-border hover:border-primary/50 transition-all duration-300">
              <div className="overflow-hidden h-56">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-widest uppercase hover:gap-3 transition-all">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gold-gradient py-12 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Ready to Transform Your Space?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto text-sm md:text-base">Contact us today for a free consultation and quote on your glass or mirror project.</p>
        <Link to="/contact" className="bg-background text-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-background/90 transition-all">
          Contact Us Today
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
