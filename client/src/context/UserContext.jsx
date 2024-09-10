// src/context/UserContext.jsx
import React, { createContext, useEffect, useState } from 'react';


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
         // Obtener el token desde localStorage al inicializar el estado, o establecerlo en true si no existe
         const storedToken = localStorage.getItem('token')
        return storedToken !== null ? storedToken === 'true' : true
    })

    useEffect(() => {
        // guardar el token en localstorage cuando cambie
        localStorage.setItem('token', token)
    }, [token])

    const logout = () => {
        setToken(false); // Cambiar el token a false cuando se cierre sesión
    };

    return (
        <UserContext.Provider value={{ token, logout, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider
