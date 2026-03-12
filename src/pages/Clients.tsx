import Layout from "@/components/Layout";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "Homeowner", text: "Phoenix Glass transformed our bathroom with a stunning frameless shower enclosure. The craftsmanship is impeccable and their team was incredibly professional.", rating: 5 },
  { name: "James Rodriguez", role: "Hotel Manager, Grand Oasis", text: "We've worked with Phoenix Glass on multiple projects across our properties. Their commercial glass installations are always on time and exceed expectations.", rating: 5 },
  { name: "Emily Chen", role: "Interior Designer", text: "I recommend Phoenix Glass to all my clients. Their custom mirror work adds that perfect finishing touch to every luxury project I design.", rating: 5 },
  { name: "Michael Torres", role: "Restaurant Owner", text: "The glass storefront they installed for our restaurant is absolutely beautiful. It transformed the entire look of our business.", rating: 5 },
  { name: "Lisa Hampton", role: "Property Developer", text: "Reliable, high-quality, and great to work with. Phoenix Glass has been our go-to for glass railings and partitions on all our developments.", rating: 5 },
  { name: "David Park", role: "Office Manager", text: "The frosted glass partitions they installed in our office look amazing and were completed ahead of schedule. Highly recommend!", rating: 5 },
];

const clients = [
  "Grand Oasis Hotels", "Pinnacle Properties", "Azure Interior Design", "Metro Commercial Group",
  "Sunstone Developments", "Elite Home Builders", "Canyon View Restaurants", "Desert Modern Architects",
];

const Clients = () => (
  <Layout>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Testimonials</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Clients</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trusted by homeowners, designers, and businesses across Arizona.
        </p>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border gold-border rounded p-6 flex flex-col">
            <Quote size={24} className="text-primary/30 mb-4" />
            <p className="text-foreground text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Client logos as text */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground mb-10">Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((c) => (
            <div key={c} className="bg-card border gold-border rounded py-6 px-4">
              <p className="font-display text-sm text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clients;
