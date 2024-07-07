import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useUserAuth(); 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Firebase Auth Signup</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' id='fromBasicEmail'>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email address'
            />
          </Form.Group>
          <Form.Group className='mb-3' id='formBasicPassword'>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit'>
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className='p-4 box mt-3 text-center'>
        Don't have an account? <Link to='/'>Log In</Link>
      </div>
    </>
  );
}

export default SignUp;
