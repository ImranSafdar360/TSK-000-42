import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import ResetPassword from './components/ResetPassword'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Col, Container, Row } from 'react-bootstrap'
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import { UserAuthContextProvider } from './contexts/UserAuthContext'

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Router>
        <Routes>
        <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
          <Route path='/' element={<LogIn />}/>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        </Router>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  )
}

export default App
