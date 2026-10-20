
import React from "react";
import { useNavigate } from "react-router-dom";

// Dynamically import all WhatsApp images in the assets folder
const imageModules = import.meta.glob("../assets/WhatsApp*.jpeg", { eager: true });
let images = Object.values(imageModules).map((mod: { default?: string; [key: string]: unknown }) => mod.default || mod);

// Sort images by filename for consistent order
images = images.sort();

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-12 px-4 relative">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-0 top-2 md:top-4 flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 hover:bg-background/95 border border-border shadow text-gold font-bold z-20"
        aria-label="Go back"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        <span className="hidden sm:inline">Back</span>
      </button>
      <h1 className="text-3xl font-bold mb-8 text-center gold-text">Gallery</h1>
      {images.length === 0 ? (
        <p className="text-center text-muted-foreground">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {images.map((img, idx) => (
            <div key={img} className="overflow-hidden rounded-lg shadow-lg bg-white/10 border border-border/30">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
