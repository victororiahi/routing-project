import axios from '../api/http.js'
import { useState, useEffect } from 'react'
import '../css/User.css'
import { Navigate } from 'react-router-dom'


const User = () => {
    const [users, setUsers] = useState([]);

useEffect(() => {
    axios.get('/api/users')
    .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
    })
}, [])

    
  return (
    <>
    <h2>Users</h2>
    <div className="container">
        {users.map((user) => {
        return (
            <div key={user.id} className="user-card">
                <img src={user.profileImageUrl || ""} alt={user.name} className="user-avatar" />
                <div className="user-details">
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
                
            </div>
        )
    })}

    </div>
    
    </>
  )
}

export default User