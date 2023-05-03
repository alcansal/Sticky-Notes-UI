import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  const matchedNotes = (note) => note.doesMatchSearch === true;

  const searchMatch = props.notes.filter(matchedNotes);

  const renderNotes = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );

  const notesElement = searchMatch.map(renderNotes);

  return <ul className="notes-list">{notesElement}</ul>;
};

export default NotesList;
