import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar as Nb} from 'react-bootstrap';
import logo from './logo.png';

const StyledNavbar = styled(Nb)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const NavContainer = styled(Container)`
`;

const NavbarLogo = styled('img')`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const Navbar = () => {
  return (
    <StyledNavbar bg="primary" variant="dark" expand="lg">
      <NavContainer>
        <Nb.Brand as={Link} to="/">
          <NavbarLogo src={logo} width="30" height="30" />
          Fingerguns
        </Nb.Brand>
        <Nb.Toggle aria-controls="basic-navbar-nav"/>
        <Nb.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/feed">Feed</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Nb.Collapse>
      </NavContainer>
    </StyledNavbar>
  );
};

export default Navbar;