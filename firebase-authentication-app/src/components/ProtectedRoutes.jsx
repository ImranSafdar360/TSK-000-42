import React from 'react'
import { useUserAuth } from '../contexts/UserAuthContext'
import { Navigate } from 'react-router-dom';
const ProtectedRoutes = ({children}) => {
  const user = useUserAuth();
  if(!user){
    return <Navigate to='/'/>
  }
  return children;
}
export default ProtectedRoutes;
