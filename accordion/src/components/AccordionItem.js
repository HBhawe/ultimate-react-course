import React from "react";

export function AccordionItem({ index, faq }) {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div className={`${open ? "open" : ""}`}>
      <ul className={`item`} onClick={() => handleOpen()}>
        <div className={"number"}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </div>
        <div className={"title text"}>{faq.title}</div>
        <div className={"icon"}>{open ? "-" : "+"}</div>
        {open ? <div className="content-box">{faq.text}</div> : null}
      </ul>
    </div>
  );
}
