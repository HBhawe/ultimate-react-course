import { Button } from "./Button";
import { Note } from "./Note";
import React from "react";

export function NoteList({ notes, onHandleNote, handleShowNoteForm }) {
  return (
    <div className={"note-list"}>
      <Button handleClick={handleShowNoteForm}>New Note</Button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onHandleNote={onHandleNote} />
          </li>
        ))}
      </ul>
    </div>
  );
}