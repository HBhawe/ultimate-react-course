import { AccordionItem } from "./AccordionItem";
import React from "react";

export function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = React.useState(null);
  return (
    <div className={"accordion"}>
      {faqs.map((faq, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          index={index}
          faq={faq}
          key={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}
