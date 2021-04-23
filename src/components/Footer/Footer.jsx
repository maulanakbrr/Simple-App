import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#4582ec'}}>
      <Container>
        <Row>
          <Col className='text-center py-3 text-white'>
            Copyright &copy; Simple App for Infracom Test
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
