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
import Articles from './components/Articles.jsx'
import DoctorPage from './pages/DoctorPage.jsx'
import Doctors from './components/Doctors.jsx'
import Article from './components/Article.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import Gallery from './components/Gallery.jsx'
import { ToastContainer as ToastMaster } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { AuthContext } from './context/AuthContext.jsx'
import { useContext } from 'react'
import ProtectedRoute from './components/ProtectedRoute.jsx'



function AppLayout() {
  const location = useLocation();

  const authRoutes = ['/login', '/register'];
  const isAuthRoute = authRoutes.includes(location.pathname);
  const { isLoggedIn } = useContext(AuthContext);

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
          <Route path="/users" element={<ProtectedRoute isLoggedIn={isLoggedIn}><User/></ProtectedRoute>} />
          
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/articles" element={<Articles/>} />
          <Route path="/articles/:id" element={<ArticlePage/>} />
          <Route path="/doctors/:id" element={<DoctorPage/>}/>
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/articles/:id" element={<Article/>} />
          <Route path="/gallery" element={<Gallery/>} />
          </Route>
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
