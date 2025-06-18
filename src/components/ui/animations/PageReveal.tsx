import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// PageRevealProps: Wraps children with a fast, elegant reveal animation
interface PageRevealProps {
  children: React.ReactNode;
}

const PageReveal: React.FC<PageRevealProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6, // Faster reveal for a premium, snappy feel
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700"
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
};

export default PageReveal;
