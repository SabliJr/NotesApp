import React from "react";
import { Note } from "../Models/Notes.model";
import Notes from "./Notes";

interface INotesList {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesList> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    console.log("You're deleted the note");
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    <>
      <h3 className='mt-3'>Notes</h3>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
