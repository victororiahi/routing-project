import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({isLoggedIn, children}) => {
  
    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        return <Navigate to="/login" replace />;
    }
  
    return children;
}

export default ProtectedRoute