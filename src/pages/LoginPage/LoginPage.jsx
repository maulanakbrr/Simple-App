import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <Container className='form-container'>
      <h2 className='mb-4 login-title'>Sign in to Simple App</h2>
      <div className='form-box p-4'>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className='btn-block mt-4'>
            Log in
          </Button>
          
        </Form>
        
      </div>
    </Container>
  )
}

export default LoginPage
