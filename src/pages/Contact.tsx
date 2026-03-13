import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_xr6wq9b";
const EMAILJS_TEMPLATE_ID = "template_n48shdn";
const EMAILJS_PUBLIC_KEY = "8K7EycbaXAPwlib5F";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
  { icon: Mail, label: "Email", value: "info@phoenixglass.com", href: "mailto:info@phoenixglass.com" },
  { icon: MapPin, label: "Address", value: "123 Glass Avenue, Phoenix, AZ 85001", href: "https://maps.google.com/maps?q=123+Glass+Avenue+Phoenix+AZ+85001" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM–6PM | Sat: 9AM–2PM", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Failed to send. Please try again or call us directly at (555) 123-4567.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">Get In Touch</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Ready to start your project? Reach out for a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-card border gold-border rounded p-5 sm:p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-6">
                <div className="gold-gradient p-5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h2>
                  <p className="text-foreground/80 text-base">Thank you, we will get back to you soon!</p>
                </div>
              </div>
            ) : (
            <>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                maxLength={200}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone (e.g. 555-123-4567)"
                maxLength={20}
                pattern="[0-9+\-\s\(\)]*"
                title="Please enter a valid phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Tell us about your project... *"
                required
                rows={5}
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-secondary border gold-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <p className="text-muted-foreground text-xs -mt-2">* Required fields</p>
              <button
                type="submit"
                disabled={sending}
                className="gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
            </form>
            </>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="gold-gradient p-3 rounded shrink-0">
                      <c.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="relative rounded overflow-hidden border gold-border" style={{ height: 300 }}>
              {/* Gold top reflection line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent z-10 opacity-90" />
              {/* Gold bottom reflection line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent z-10 opacity-90" />
              <iframe
                title="Phoenix Glass and Mirror Location"
                src="https://maps.google.com/maps?q=Phoenix+Glass+and+Mirror+Inc+Phoenix+AZ&output=embed&z=15"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/phoenixglassandmirror"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 gold-gradient px-4 py-3 rounded hover:opacity-90 transition-all"
                >
                  <Instagram size={18} className="text-primary-foreground" />
                  <span className="text-primary-foreground font-body text-sm tracking-wider">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/phoenixglassandmirror"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 gold-gradient px-4 py-3 rounded hover:opacity-90 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary-foreground">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span className="text-primary-foreground font-body text-sm tracking-wider">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
