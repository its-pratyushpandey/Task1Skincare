import React, { useRef } from "react";
import gsap from "gsap";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);

  const slideTo = (idx: number) => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -idx * 100 + "%",
        duration: 0.6,
        ease: "power2.inOut",
      });
      currentIndex.current = idx;
    }
  };

  // Tactile feedback for buttons (scale, shadow, ripple)
  const animateButton = (btn: HTMLButtonElement | null) => {
    if (!btn) return;
    gsap.fromTo(
      btn,
      { scale: 1, boxShadow: "0 2px 8px 0 rgba(245,56,3,0.10)" },
      {
        scale: 0.92,
        boxShadow: "0 4px 24px 0 rgba(245,56,3,0.18)",
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      }
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500"
        style={{ width: `${products.length * 100}%` }}
      >
        {products.map((product) => (
          <div key={product.id} className="w-full flex-shrink-0 p-4">
            <img src={product.image} alt={product.name} className="w-full rounded-xl shadow-lg" />
            <div className="mt-4 text-lg font-bold">{product.name}</div>
            <div className="text-pink-600 font-semibold">{product.price}</div>
          </div>
        ))}
      </div>
      {/* Left Button */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          ref={leftBtnRef}
          className="bg-white/80 rounded-full p-2 shadow hover:scale-110 active:scale-95 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-pink-400 md:active:scale-100 md:hover:scale-110 md:shadow-lg select-none"
          onClick={() => {
            animateButton(leftBtnRef.current);
            slideTo(Math.max(0, currentIndex.current - 1));
          }}
          aria-label="Previous"
        >
          <span className="sr-only">Previous</span>
          &#8592;
        </button>
      </div>
      {/* Right Button */}
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          ref={rightBtnRef}
          className="bg-white/80 rounded-full p-2 shadow hover:scale-110 active:scale-95 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-pink-400 md:active:scale-100 md:hover:scale-110 md:shadow-lg select-none"
          onClick={() => {
            animateButton(rightBtnRef.current);
            slideTo(Math.min(products.length - 1, currentIndex.current + 1));
          }}
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
