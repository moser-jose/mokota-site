import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext'

const ProtectedRouter = (props) => {
    const { autenticado } = useAuthContext();
    if (autenticado === true) return <Route {...props} />
    else if (autenticado === false) return <Navigate to="/minha-conta" />
    else return null;
}

export default ProtectedRouter
