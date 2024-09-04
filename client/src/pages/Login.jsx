import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault()

        //reset success message
        setSuccess(false)

        if (!email.trim() || !pass.trim()) {
            setError("Todos los campos son obligatorios")
            return
        }

        if (pass.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres")
            return
        }

       
        setError("")
        setSuccess(true)
        setEmail("")
        setPass("")
        
    }


    const { token } = useContext(UserContext);

    if (token) {
        return <Navigate to="/" />;
    }

  return (
    <>
    <div className='container-fluid m-4 '>
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h1 className="text-center mb-4">Login</h1>
                <form className='formulario' onSubmit={validarDatos}>
                    {error && <p className='error'>{error}</p>}
                    {success && <p className='success'>Autenticación Exitosa</p>}
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Contraseña</label>
                        <input type="password" name="pass" value={pass} className='form-control' 
                        onChange={(e) => setPass(e.target.value)}/>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-primary mt-2'>Enviar</button>
                    </div>
                </form>
               </div>
            </div>    
        </div>
    </>
  )
}

export default Login