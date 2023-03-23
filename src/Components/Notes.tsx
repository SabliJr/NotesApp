import React from "react";
import { Note } from "../Models/Notes.model";
import { Button, Card } from "react-bootstrap";

interface INotes {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FC<INotes> = ({ note, handleDelete }) => {
  return (
    <div className='mb-3'>
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle>{note.date}</Card.Subtitle>
          <Button
            className='mt-3'
            variant='danger'
            onClick={() => handleDelete(note.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
