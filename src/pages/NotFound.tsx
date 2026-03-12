import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Error 404</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold gold-text mb-4">404</h1>
        <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded hover:opacity-90 transition-all inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
