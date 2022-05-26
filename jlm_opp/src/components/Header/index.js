import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo_JLM_op.png"
function Header() {
  return (

    <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
    <img
        src={logo}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Acceuil</Nav.Link>
      <Nav.Link href="#Formations">Formations</Nav.Link>
      <Nav.Link href="#offre">Offre de travail</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>

    )
}

export default Header