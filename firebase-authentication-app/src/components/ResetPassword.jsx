// ResetPassword.js
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useUserAuth } from '../contexts/UserAuthContext';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Password Reset</h2>
        {message && <Alert variant='success'>{message}</Alert>}
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' id='fromBasicEmail'>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email address'
            />
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit'>
              Reset Password
            </Button>
          </div>
          <div className='d-grid gap-2'>
            <Link className='btn btn-primary mt-2' to='/'>Log In</Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default ResetPassword;
