import { useState } from "react";
import Layout from "@/components/Layout";
import workShower from "@/assets/work-shower.jpg";
import workMirror from "@/assets/work-mirror.jpg";
import workStorefront from "@/assets/work-storefront.jpg";
import workRailing from "@/assets/work-railing.jpg";
import workTabletop from "@/assets/work-tabletop.jpg";
import workPartition from "@/assets/work-partition.jpg";

const categories = ["All", "Residential", "Commercial"];

const projects = [
  { title: "Frameless Shower Enclosure", category: "Residential", image: workShower, desc: "Custom frameless glass shower for luxury bathroom renovation." },
  { title: "Grand Foyer Mirror", category: "Residential", image: workMirror, desc: "Oversized decorative mirror with gold-leaf frame installation." },
  { title: "Modern Glass Storefront", category: "Commercial", image: workStorefront, desc: "Full glass facade for downtown retail space." },
  { title: "Balcony Glass Railing", category: "Residential", image: workRailing, desc: "Frameless glass balustrade for high-rise apartment." },
  { title: "Custom Glass Tabletop", category: "Residential", image: workTabletop, desc: "Precision-cut tempered glass tabletop for dining room." },
  { title: "Office Glass Partition", category: "Commercial", image: workPartition, desc: "Frosted and clear glass partition walls for corporate office." },
];

const OurWorks = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Portfolio</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Works</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of our finest glass and mirror installations.
          </p>
          <div className="flex gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-body text-sm tracking-widest uppercase px-5 py-2 rounded transition-all ${
                  filter === cat
                    ? "gold-gradient text-primary-foreground"
                    : "border gold-border text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.title} className="group bg-card rounded overflow-hidden border gold-border hover:border-primary/50 transition-all duration-300">
              <div className="overflow-hidden h-64">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs tracking-widest uppercase">{p.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default OurWorks;
