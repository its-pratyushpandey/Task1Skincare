import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll("span");
      gsap.set(words, { opacity: 0, color: "#d1d5db", y: 20 });
      gsap.to(words, {
        opacity: 1,
        color: "#111827",
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }
  }, [text]);

  return (
    <p ref={textRef} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-1 will-change-transform will-change-opacity">
          {word}
        </span>
      ))}
    </p>
  );
};

export default AnimatedText;
