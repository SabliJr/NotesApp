import React from "react";
import { Container, NavbarBrand, Navbar } from "react-bootstrap";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
      <Container>
        <NavbarBrand>Notes Taking App</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
