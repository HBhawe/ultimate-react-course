import React from "react";
import { NoteView } from "./NoteView";
import { NoteList } from "./NoteList";
import { NewNote } from "./NewNote";
import { Header } from "./Header";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [openNote, setOpenNote] = React.useState("");
  const [openNoteValue, setOpenNoteValue] = React.useState(openNote?.text);
  const [showNewNoteForm, setShowNewNoteForm] = React.useState(false);

  function handleOpenNote(note) {
    setOpenNote("");
    setOpenNote(note);
    setOpenNoteValue(note.text);
  }

  function handleOpenNoteValue(noteValue) {
    setOpenNoteValue(noteValue);
  }

  function saveNote(e, note, noteValue) {
    e.preventDefault();
    const newNotes = notes.map((el) => {
      if (el.id === note.id) {
        el.text = noteValue;
      }
      return el;
    });
    setNotes(newNotes);
    setOpenNote("");
    setOpenNoteValue("");
  }

  function showNoteForm() {
    setShowNewNoteForm(!showNewNoteForm);
  }

  function handleNewNote(e, noteName) {
    e.preventDefault();

    const newNote = {
      title: noteName,
      text: "",
      id: crypto.randomUUID(),
    };
    setNotes([...notes, newNote]);
    setShowNewNoteForm(false);
  }

  return (
    <div className={"app"}>
      <Header />
      <div className="container">
        <NoteList
          notes={notes}
          onHandleNote={handleOpenNote}
          handleShowNoteForm={showNoteForm}
        />
        {showNewNoteForm && <NewNote onSubmit={handleNewNote} />}
        {openNote ? (
          <div className={"note-view"}>
            <NoteView
              note={openNote}
              handleSave={saveNote}
              openNoteValue={openNoteValue}
              handleOpenNoteValue={handleOpenNoteValue}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
