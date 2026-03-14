import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
  { icon: Clock, label: "Years Experience", value: "9+" },
];

const Index = () => {
  return (
  <Layout>
    {/* Hero */}
    <section className="hero-section relative h-[65vh] flex items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
        <div className="relative h-full">
          <img src={workShower} alt="Shower enclosure glass" className="h-full w-full object-cover" />
        </div>
        <div className="relative hidden md:block h-full">
          <img src={workMirror} alt="Decorative mirror glass" className="h-full w-full object-cover" />
        </div>
        <div className="relative hidden md:block h-full">
          <img src={workStorefront} alt="Commercial storefront glass" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background/75" />

      <div className="relative z-10 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Phoenix Glass <span className="gold-text">&</span> Mirror Inc
        </h1>
        <div className="mt-8">
          <Link to="/contact" className="gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded hover:opacity-90 transition-all inline-block">
            Get a Quote
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
};

export default Index;
