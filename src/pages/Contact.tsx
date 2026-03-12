import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
  { icon: Mail, label: "Email", value: "info@phoenixglass.com" },
  { icon: MapPin, label: "Address", value: "123 Glass Avenue, Phoenix, AZ 85001" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM | Sat: 9AM–2PM" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Reach out for a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card border gold-border rounded p-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Tell us about your project..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="gold-gradient p-3 rounded">
                      <c.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{c.label}</p>
                      <p className="text-muted-foreground text-sm">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-card border gold-border rounded h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-primary mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">123 Glass Avenue, Phoenix, AZ 85001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
