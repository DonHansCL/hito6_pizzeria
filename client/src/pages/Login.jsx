import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    // const [error, setError] = useState("")
    // const [success, setSuccess] = useState(false)

    // const validarDatos = (e) => {
    //     e.preventDefault()

    //     //reset success message
    //     setSuccess(false)

    //     if (!email.trim() || !pass.trim()) {
    //         setError("Todos los campos son obligatorios")
    //         return
    //     }

    //     if (pass.length < 6) {
    //         setError("La contraseña debe tener al menos 6 caracteres")
    //         return
    //     }

       
    //     setError("")
    //     setSuccess(true)
    //     setEmail("")
    //     setPass("")
        
    // }


    const { setToken } = useContext(UserContext);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        // simular un inicio de sesion
        if (email && password) {
            setToken(true) // cambia el estado del token a true al iniciar sesion
            navigate('/profile') // redirige a la pagina del perfil
        } else {
            alert('Por favor completa todos los campos')
        }
    }

    // if (token) {
    //     return <Navigate to="/" />;
    // }

  return (

    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="row w-100">
        <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg p-4">
                <div className="card-body">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Ingresa tu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>




    // <>
    // <div className='container-fluid m-4 '>
    //     <div className="row justify-content-center">
    //         <div className="col-md-6">
    //         <h1 className="text-center mb-4">Login</h1>
    //             <form className='formulario' onSubmit={validarDatos}>
    //                 {error && <p className='error'>{error}</p>}
    //                 {success && <p className='success'>Autenticación Exitosa</p>}
    //                 <div className='form-group'>
    //                     <label>Email</label>
    //                     <input type="email" name="email" className="form-control" value={email}
    //                     onChange={(e) => setEmail(e.target.value)}/>
    //                 </div>
    //                 <div className='form-group'>
    //                     <label>Contraseña</label>
    //                     <input type="password" name="pass" value={pass} className='form-control' 
    //                     onChange={(e) => setPass(e.target.value)}/>
    //                 </div>
    //                 <div className='text-center'>
    //                     <button type='submit' className='btn btn-primary mt-2'>Enviar</button>
    //                 </div>
    //             </form>
    //            </div>
    //         </div>    
    //     </div>
    // </>
  )
}

export default Login