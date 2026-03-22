import Layout from "@/components/Layout";
import heroGlass from "@/assets/hero-glass.jpg";
import { CheckCircle } from "lucide-react";

const values = [
  "Premium quality materials and craftsmanship",
  "Licensed, bonded, and fully insured",
  "Since 2017: trusted industry expertise",
  "Custom solutions for every project",
  "On-time delivery and installation",
  "Exceptional customer service",
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Our Story</p>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">About Us</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Since 2017, Phoenix Glass and Mirror Inc has been a trusted name in glass solutions across Florida.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="rounded overflow-hidden">
          <img src={heroGlass} alt="Phoenix Glass and Mirror team and glass work" className="w-full h-full object-cover rounded" />
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Crafting <span className="gold-text">Excellence</span> in Glass
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Founded in 2017, Phoenix Glass and Mirror Inc began with a simple mission: to deliver the highest quality glass and mirror solutions with unmatched craftsmanship. What started as a small family operation has grown into one of Florida's trusted glass companies.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our team of skilled artisans and technicians bring years of combined experience to every project, from custom shower enclosures and decorative mirrors to commercial storefronts and architectural glass installations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
