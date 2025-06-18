import React, { useRef } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../accordion";
import gsap from "gsap";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Enhanced animation: height, opacity, and scale for a luxury feel
  const handleToggle = (idx: number, open: boolean) => {
    const el = contentRefs.current[idx];
    if (el) {
      const tl = gsap.timeline();
      if (open) {
        tl.to(el, {
          height: el.scrollHeight,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power2.inOut",
          onStart: () => {
            el.style.display = "block";
          },
        });
      } else {
        tl.to(el, {
          height: 0,
          opacity: 0.5,
          scale: 0.98,
          duration: 0.45,
          ease: "power2.inOut",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      }
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger onClick={() => handleToggle(idx, !item.isOpen)}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <div
              ref={el => (contentRefs.current[idx] = el)}
              style={{
                overflow: "hidden",
                height: item.isOpen ? undefined : 0,
                opacity: item.isOpen ? 1 : 0.5,
                scale: item.isOpen ? 1 : 0.98,
                display: item.isOpen ? "block" : "none",
                transition: "none",
              }}
              className="transition-all ease-in-out will-change-transform will-change-opacity"
            >
              {item.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
