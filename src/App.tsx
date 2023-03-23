import React, { useState } from "react";
import "./index.css";
import { Note } from "./Models/Notes.model";

import Header from "./Components/Header";
import NotesList from "./Components/NotesList";
import { Col, Container, Row } from "react-bootstrap";
import CreateNotes from "./Components/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Go to Tours",
      text: "Visit the agencies to submit my resume",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
