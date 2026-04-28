
// Dynamically import all WhatsApp images in the assets folder
const imageModules = import.meta.glob("../assets/WhatsApp*.jpeg", { eager: true });
let images = Object.values(imageModules).map((mod: any) => mod.default || mod);

// Sort images by filename for consistent order
images = images.sort();


const Gallery = () => {
  return (
    <div className="container mx-auto py-12 px-4">
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
