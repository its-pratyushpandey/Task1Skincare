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

  const handleToggle = (idx: number, open: boolean) => {
    const el = contentRefs.current[idx];
    if (el) {
      gsap.to(el, {
        height: open ? el.scrollHeight : 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
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
              style={{ overflow: "hidden", height: item.isOpen ? undefined : 0 }}
              className="transition-all ease-in-out"
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
