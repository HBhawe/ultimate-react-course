import { Button } from "./Button";
import React from "react";

export function Note({ note, onHandleNote }) {
  return (
    <>
      <span>{note.title}</span>
      <Button handleClick={() => onHandleNote(note)}>Select</Button>
    </>
  );
}