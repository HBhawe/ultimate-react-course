import React from "react";

const initialNotes = [
  { title: "Note 1", text: "this is note 1", id: crypto.randomUUID() },
  { title: "Note 2", text: "this is note 2", id: crypto.randomUUID() },
  { title: "Note 3", text: "this is note 3", id: crypto.randomUUID() },
];

function App() {
  const [notes, setNotes] = React.useState(initialNotes);
  const [openNote, setOpenNote] = React.useState("");

  function handleOpenNote(note) {
    console.log(note);
    setOpenNote(note);
  }

  function saveNote(e, note, noteValue) {
    e.preventDefault();
    console.log(note, noteValue);
    // setNotes(
    //   notes.map((el) => (el?.id === note.id ? console.log(el.text) : 2)),
    // );
  }

  return (
    <div className={"app"}>
      <Header />
      <div className="container">
        <NoteList notes={notes} onHandleNote={handleOpenNote} />
        {openNote ? (
          <div className={"note-view"}>
            <NoteView note={openNote} handleSave={saveNote} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className={"header"}>
      <h2>Notes</h2>
    </div>
  );
}

function NoteList({ notes, onHandleNote }) {
  return (
    <div className={"note-list"}>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onHandleNote={() => onHandleNote(note)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Note({ note, onHandleNote }) {
  return (
    <>
      <span>{note.title}</span>
      <Button handleClick={() => onHandleNote(note)}>Select</Button>
    </>
  );
}

function NoteView({ note, handleSave }) {
  const [noteValue, setNoteValue] = React.useState(note.text);
  console.log(noteValue);

  return (
    <form
      className={"note-form"}
      onSubmit={(e) => handleSave(e, note, noteValue)}
    >
      <h3>{note.title}</h3>
      <label>Note content:</label>
      <textarea
        value={note.text}
        onChange={(e) => setNoteValue(e.target.value)}
      ></textarea>
      <div className={"submit-button"}>
        <Button className={`button-submit`}>Save</Button>
      </div>
    </form>
  );
}

function Button({ handleClick, children, className }) {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default App;
