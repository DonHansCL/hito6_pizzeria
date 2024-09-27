import {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const ProtectedRoute = ({children}) => {
    const { token } = useContext(UserContext)

    // Redirigir a /login si no hay token
  // return token ? children : <Navigate to="/login" />    // esto era con el ejemplo del desafio 7

  if(!token) {
    return <Navigate to = "/login" />
  }

  return children

}

export default ProtectedRoute