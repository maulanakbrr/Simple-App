import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" bg='primary' variant='dark' fixed='top'>
      <Container>

        <LinkContainer to='/'>
          <Navbar.Brand>Simple App</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ml-auto">
            
            <LinkContainer to='/profile'>
              <Nav.Link>
                Profile
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>

            
            <Nav.Link href={process.env.PUBLIC_URL + '/cv/CV_Portfolio_Akbar Maulana.pdf'} download>
              My CV
            </Nav.Link>
            
          </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
