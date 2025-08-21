import React from 'react'
import {useState, useEffect} from 'react'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from '../api/http.js'




const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const loadingToast = toast.loading('Please wait while we sign you up...');
        axios.post('/api/Auth/register', {name: name, email: email, password: password})
        .then((res) => {
            toast.update(loadingToast, { render: 'Registration successful', type: 'success', isLoading: false, autoClose: 3000 });
            navigate('/login');
        })

        .catch((error) => {
            console.error('There was an error registering!', error);
            toast.update(loadingToast, { render: 'Registration failed. Please try again or contact administrator.', type: 'error', isLoading: false, autoClose: 3000 });
        })}


  return (
    <>
    <h2>Register</h2>
    <div className="container">
        <form onSubmit={handleSubmit} className="form">
            <div className="input-field">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name'/>
            </div>

            <div className="input-field">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            </div>

            <div className="input-field">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            </div>

            <div className="btn-container">
                <button type='submit' className='btn'>Register</button>
            </div>

        </form>
    </div>

    </>

  )
}

export default Register