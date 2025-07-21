import { Button } from "./Button";
import React from "react";

export function NoteView({
  note,
  handleSave,
  openNoteValue,
  handleOpenNoteValue,
}) {
  return (
    <form
      className={"note-form"}
      onSubmit={(e) => handleSave(e, note, openNoteValue)}
    >
      <h3>{note.title}</h3>
      <label>Note content:</label>
      <textarea
        value={openNoteValue}
        onChange={(e) => handleOpenNoteValue(e.target.value)}
      ></textarea>
      <div className={"submit-button"}>
        <Button className={`button-submit`}>Save</Button>
      </div>
    </form>
  );
}
