import { AccordionItem } from "./AccordionItem";
import React from "react";

export function Accordion({ faqs }) {
  return (
    <div className={"accordion"}>
      {faqs.map((faq, index) => (
        <AccordionItem index={index} faq={faq} key={faq.title} />
      ))}
    </div>
  );
}