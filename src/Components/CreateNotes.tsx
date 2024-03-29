import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../Models/Notes.model";

interface ICreateNotes {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FC<ICreateNotes> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }

    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

  return (
    <>
      <h2>Create Notes</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='fromBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a name for the note'
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='fromBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control
            rows={3}
            as='textarea'
            placeholder='Enter a description for the note'
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Notes Color</Form.Label>
          <Form.Control
            type='color'
            id='colorInput'
            defaultValue='#dfdfdf'
            title='chose the color'
            ref={colorRef}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
