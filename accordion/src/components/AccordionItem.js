import React from "react";

export function AccordionItem({ index, faq, curOpen, onOpen, children }) {
  const isOpen = index === curOpen;
  function handleOpen() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div className={`${isOpen ? "open" : ""}`}>
      <ul className={`item`} onClick={() => handleOpen()}>
        <div className={"number"}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </div>
        <div className={"title text"}>{faq.title}</div>
        <div className={"icon"}>{isOpen ? "-" : "+"}</div>
        {isOpen ? <div className="content-box">{children}</div> : null}
      </ul>
    </div>
  );
}
