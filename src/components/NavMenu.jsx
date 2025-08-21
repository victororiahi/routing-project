import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navmenu.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {toast} from 'react-toastify'
import { useContext, useState, useEffect } from 'react'
import {FaChevronUp, FaUserCircle, FaUser} from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import '../css/Dropdown.css'


const NavMenu = () => {
  const navigate = useNavigate();
  const {logout, isLoggedIn, user} = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);


    const handleLogout = () => {
      const loadingToast = toast.loading('Logging out...')
      logout();
      toast.update(loadingToast, { render: 'Logged out successfully', type: 'success', isLoading: false, autoClose: 3000 });
      navigate('/login');
    };


  return (
    <nav className="nav-menu">
      <div className='nav-links'>
        <NavLink to="/" className="left"> Home</NavLink>
        <NavLink to="/about" className="left">About</NavLink>
        <NavLink to="/contact" className="left">Contact</NavLink>
        <NavLink to="/users" className="left">Users</NavLink>
        <NavLink to="/articles" className="left">Articles</NavLink>
        <NavLink to="/doctors" className="left">Doctors</NavLink>
        <NavLink to="/gallery" className="left">Gallery</NavLink>

      </div>
      
      <div className="nav-auth">
        <NavLink to="/register" className="signup-link">
          <button>Signup</button>
        </NavLink>

        
        {isLoggedIn 
        ? (<div className="user-menu">
        <button className="user-menu-trigger" onClick={() => setMenuOpen(!menuOpen)}>
          {user?.profileImageUrl 
          ? (<img src = {user.profileImageUrl} className='user-avatar'/>) 
          :(<FaUserCircle className='user-icon'/>) }

          <span>Hi {user.name}</span>

          {menuOpen ? <FaChevronUp/> : <FaChevronDown/>}
        </button>
        {menuOpen && (
          <div className="user-dropdown">
            <button className="dropdown-item"><FaUser/>My Account</button>
            <button onClick={handleLogout} className="dropdown-item logout"><FiLogOut/> Logout</button>
          </div>
        )}
        </div>)
        
        :(<NavLink to="/login" className="login-link">
          <button>LogIn</button>
        </NavLink>)}
      </div>
      
    </nav>  
    
  )
}

export default NavMenu