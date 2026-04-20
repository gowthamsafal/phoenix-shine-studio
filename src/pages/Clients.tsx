import Layout from "@/components/Layout";
import { Star, Quote } from "lucide-react";
import phoenixBg from "@/assets/Gemini_Generated_Image_ebvsvdebvsvdebvs.png";

const testimonials = [
  { name: "Sarah Mitchell", role: "Homeowner", text: "Phoenix Glass transformed our bathroom with a stunning frameless shower enclosure. The craftsmanship is impeccable and their team was incredibly professional.", rating: 5 },
  { name: "James Rodriguez", role: "Hotel Manager, Grand Oasis", text: "We've worked with Phoenix Glass on multiple projects across our properties. Their commercial glass installations are always on time and exceed expectations.", rating: 5 },
  { name: "Emily Chen", role: "Interior Designer", text: "I recommend Phoenix Glass to all my clients. Their custom mirror work adds that perfect finishing touch to every luxury project I design.", rating: 5 },
  { name: "Michael Torres", role: "Restaurant Owner", text: "The glass storefront they installed for our restaurant is absolutely beautiful. It transformed the entire look of our business.", rating: 5 },
  { name: "Lisa Hampton", role: "Property Developer", text: "Reliable, high-quality, and great to work with. Phoenix Glass has been our go-to for glass railings and partitions on all our developments.", rating: 5 },
  { name: "David Park", role: "Office Manager", text: "The frosted glass partitions they installed in our office look amazing and were completed ahead of schedule. Highly recommend!", rating: 5 },
];

const clients = [
  "Sterling Glass Company",
  "Mattamy Homes",
  "Fmf glass hardware",
  "Sensus design build",
  "Raja builders",
  "Flato Inc",
];

const Clients = () => (
  <Layout>
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Testimonials</p>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Clients</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Trusted by homeowners, designers, and businesses across Florida.
        </p>
      </div>
    </section>

    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Faint phoenix watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `url(${phoenixBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

    <section className="py-10 md:py-16 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Our Network</p>
        <h2 className="font-display text-2xl font-bold text-foreground mb-10">Trusted Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {clients.map((c) => (
            <div
              key={c}
              className="group relative bg-card border gold-border rounded py-8 px-4 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_hsl(43_50%_55%_/_0.25)]"
            >
              {/* Gold shimmer sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-display text-sm font-semibold text-foreground/70 group-hover:text-primary transition-colors duration-300 tracking-wide">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clients;
