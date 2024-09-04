import { useState } from 'react'

const Register = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [repass, setRepass] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)


    //const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const validarDatos = (e) => {
        e.preventDefault()

        //reset success message
        setSuccess(false)

        if (!email.trim() || !pass.trim() || !repass.trim()) {
            setError("Todos los campos son obligatorios")
            return
        }

        if (pass.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres")
            return
        }

        if (pass !== repass) {
            setError("Las contraseña deben coincidir")
            return
        }

        
        // si pasa todas las validaciones
        setError("")
        setSuccess(true)
        setEmail("")
        setPass("")
        setRepass("")
    }

  return (
    <>
    <div className='container-fluid m-4 '>
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h1 className="text-center mb-4">Registro</h1>
                <form className='formulario' onSubmit={validarDatos}>
                    {error && <p className='error'>{error}</p>}
                    {success && <p className='success'>Registro Exitoso</p>}
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
                    <div className='form-group'>
                        <label>Confirmar contraseña</label>
                        <input type="password" name="repass" className='form-control' value={repass} 
                        onChange={(e) => setRepass(e.target.value)}/>
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

export default Register