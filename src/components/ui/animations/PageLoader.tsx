import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// PageLoaderProps: Props for the loader, expects a callback when finished
interface PageLoaderProps {
  onFinish: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onFinish }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Shorter loading delay for a faster, premium feel (e.g., 0.4s)
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        // Animate loader out: slide up, fade, and scale for a luxury effect
        gsap.to(loaderRef.current, {
          y: "-100%",
          opacity: 0,
          scale: 1.08,
          duration: 0.45, // Much faster exit
          ease: "power3.inOut",
          onComplete: onFinish,
        });
      }
    }, 400); // Faster initial delay
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-100 via-fuchsia-100 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all"
      style={{ willChange: "opacity, transform" }}
    >
      {/* Premium brand text with subtle animation */}
      <span className="text-4xl md:text-6xl font-extrabold tracking-widest text-pink-500 animate-pulse drop-shadow-lg select-none">
        Skincare
      </span>
    </div>
  );
};

export default PageLoader;
