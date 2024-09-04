// import pizzaCart from '../pizzaCart'
import { pizzaCart } from '../pizzas'
import  '../Cart.css'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Cart = () => {

    const {cart, increaseQuantity, decreaseQuantity, total, deletePizzaCart} = useContext(CartContext)
    const { token } = useContext(UserContext)

    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>🛒 Tu Carrito</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map(pizza => (
                        <div key={pizza.id} className='card mb-3 shadow-sm rounded'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <img src={pizza.img} alt={pizza.name} className='img-fluid rounded-start' style={{ height: '100%', objectFit: 'cover' }}/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body d-flex flex-column justify-content-between'>
                                        <div>
                                            <h5 className='card-title fw-bold'>{pizza.name}</h5>
                                            <p className='card-text mb-2 text-muted'>Precio: {pizza.price.toLocaleString()}</p>
                                            <p className='card-text mb-4'>Cantidad: {pizza.quantity}</p>
                                            <p className='card-text text-muted'> {pizza.desc}</p> 
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <button className='btn btn-outline-primary btn-sm me-2 rounded-pill' onClick={() => increaseQuantity(pizza.id)}><i className="fas fa-plus"></i></button>
                                            <button className='btn btn-outline-danger btn-sm me-2 rounded-pill' onClick={() => decreaseQuantity(pizza.id)}><i className="fas fa-minus"></i></button>
                                            <button className='btn btn-danger btn-sm rounded-pill ms-auto' onClick={() => deletePizzaCart(pizza.id)}><i className="fas fa-trash"></i></button>
                                            
                                        </div>
                                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='text-center  mb-3'>
                        <h4>Total: ${total.toLocaleString()}</h4>
                        <button className='btn btn-dark btn-sm mt-2 w-25' disabled={!token}>Pagar</button>
                    </div>
                </>
            ) : (
                <h4 className='text-center'>El carrito está vacio</h4>
            )}
        </div>
    )

}

export default Cart

