import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavMenu from './components/Navmenu.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import LogIn from './components/Login.jsx'
import Register from './components/Register.jsx'
import User from './components/User.jsx'
import { ToastContainer as ToastMaster } from 'react-toastify'
import { useLocation } from 'react-router-dom'



function AppLayout() {
  const location = useLocation();

  const authRoutes = ['/login', '/register'];
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <>
        
          {!isAuthRoute &&   <NavMenu />}
            <div className="page-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<User />} />
        </Routes>
        <ToastMaster position='top-right' autoClose={3000}/>

          </div>
          
    </>
  )
}

function App() {
  return(
    <Router>
      <AppLayout />
    </Router>
  )

}

export default App
