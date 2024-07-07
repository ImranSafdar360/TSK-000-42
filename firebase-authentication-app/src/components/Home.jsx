import React from 'react'
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../contexts/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {user, logOut} = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className='p-4 box mt-3 text-center'>
      Hello Welcome <br /> {user && user.email}
    </div>
    <div className='d-grid gap-2 mt-2'>
      <Button variant="primary" 
      onClick={handleLogOut}
      >
        Log out
      </Button>
    </div>
    </>
  )
}

export default Home;
