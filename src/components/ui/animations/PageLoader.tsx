import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageLoaderProps {
  onFinish: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onFinish }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading delay (e.g., 1.2s)
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 1.1,
          ease: "power3.inOut",
          onComplete: onFinish,
        });
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-100 via-fuchsia-100 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all"
    >
      <span className="text-4xl font-extrabold tracking-widest text-pink-500 animate-pulse drop-shadow-lg">
        Skincare
      </span>
    </div>
  );
};

export default PageLoader;
