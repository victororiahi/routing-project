import React from 'react'
import { createContext, useState, useEffect } from 'react'


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        else {
            setUser(null);
        }
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoggedIn(true);
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider};