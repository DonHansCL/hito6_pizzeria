// src/context/UserContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // aqui en este ejemplo me permitia iniciar sesion con cualquier email y contraseña y por defecto estaba con token true
    // const [token, setToken] = useState(() => {
    //      // Obtener el token desde localStorage al inicializar el estado, o establecerlo en true si no existe
    //      const storedToken = localStorage.getItem('token')
    //     return storedToken !== null ? storedToken === 'true' : true
    // })

    const [token, setToken] = useState(() => localStorage.getItem('token'))
    const [email, setEmail] = useState(() => localStorage.getItem('email'))


    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token])

    useEffect(() => {
        if (email) {
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('email');
        }
    }, [email])


    useEffect(() => {
        const fetchProfile = async () => {
            if (token) {
                try {
                    const { email } = await getProfile();
                    setEmail(email);
                } catch (error) {
                    console.error('Error al obtener perfil', error);
                }
            }
        }
        fetchProfile()
    }, [token])



    // Método para hacer login
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setToken(response.data.token);
            setEmail(response.data.email);
        } catch (error) {
            console.error("Error en login", error);
            throw error;
        }
    };

    // metodo para hacer register
    const register = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { email, password })
            setToken(response.data.token)
            setEmail(response.data.email)
        } catch (error) {
            console.error("Error en registro", error)
            throw error
        }
    }


    // metodo para cerrar sesion
    const logout = () => {
        setToken(null)  // eliminamos el token al cerrar sesion
        setEmail(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }

    // const logout = () => {
    //     setToken(false); // Cambiar el token a false cuando se cierre sesión
    // };


    // metodo para obtener el perfil de usuario autenticado
    const getProfile = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            console.error("Error al obtener perfil", error)
            throw error
        }
    }


    return (
        <UserContext.Provider value={{ token, logout, email, login, getProfile, register }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider
