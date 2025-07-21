import React from "react";
import { Button } from "./Button";

export function NewNote({ onSubmit }) {
  const [noteName, setNoteName] = React.useState("");

  function setNewNoteName(noteName) {
    setNoteName(noteName);
  }

  return (
    <div className={"form"}>
      <form onSubmit={(e) => onSubmit(e, noteName)}>
        <label>New Note:</label>
        <input
          type="text"
          value={noteName}
          onChange={(e) => setNewNoteName(e.target.value)}
          autoFocus
        />
        <Button>Save</Button>
      </form>
    </div>
  );
}