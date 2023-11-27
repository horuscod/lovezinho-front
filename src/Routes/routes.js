import React from 'react'
import Login from '../Components/Forms/Login/Login.js'
import ProtectedRoutes from './ProtectedRoutes'
import Register from '../Components/Forms/Register/Register.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Register/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <h1>Home</h1> 
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;