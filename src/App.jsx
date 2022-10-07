import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import TaskDashboard from './pages/TaskDashboard'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registro" element={<Register/>} />
      <Route path="/dashboard" element={<TaskDashboard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
