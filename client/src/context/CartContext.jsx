import { createContext, useState, useEffect } from 'react'
import { pizzaCart } from "../pizzas"
import Swal from 'sweetalert2';
import customImage from "../assets/pizza.gif"
import { useLocation } from 'react-router-dom';
// import custonBackground from "../assets/bg-1.jpg"

export const CartContext = createContext()

const url = "http://localhost:5000/api/pizzas"


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [data, setData] = useState([]);

    useEffect(() => {
        // Inicializar el carrito con las pizzas desde pizzaCart
        const initialCart = pizzaCart;
        setCart(initialCart);
    }, []);



    // Obtener las pizzas del API
    const getData = async () => {
        try {
            const response = await fetch(url); // Ajusta la URL si es necesario
            const pizzas = await response.json();
            setData(pizzas);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const increaseQuantity = (id) => {
        setCart(cart.map((pizza) =>
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ))
    }

    const decreaseQuantity = (id) => {
        setCart(cart.map((pizza) =>
            pizza.id === id && pizza.quantity > 0
                ? { ...pizza, quantity: pizza.quantity - 1 }
                : pizza
        ).filter(pizza => pizza.quantity > 0)
        )
    }

    const deletePizzaCart = (id) => {
        setCart(cart.map((pizza) =>
            pizza.id === id && pizza.quantity > 0
                ? { ...pizza, quantity: pizza.quantity = 0 }
                : pizza
        ).filter(pizza => pizza.quantity > 0)
        )
    }

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)


    // Función para agregar una pizza al carrito
    const addToCart = (pizzaToAdd) => {
        // console.log('Pizza to Add:', pizzaToAdd);
        setCart(prevCart => {

            
            // Verificar si la pizza ya está en el carrito
            const existingPizzaIndex = prevCart.findIndex(pizza => 
                // console.log('Checking Pizza ID:', pizza.id, 'Against:', pizzaToAdd.id);
                pizza.id === pizzaToAdd.id
            );

            if (existingPizzaIndex > -1) {
                // Si la pizza ya existe en el carrito, actualizar la cantidad
                const updatedCart = [...prevCart];
                updatedCart[existingPizzaIndex].quantity += 1;
                // console.log('Updated Cart:', updatedCart);
                return updatedCart;
            } else {
                // Si la pizza no existe, agregarla al carrito con cantidad 1
                // console.log('Adding New Pizza:', { ...pizzaToAdd, quantity: 1 });
                return [...prevCart, { ...pizzaToAdd, quantity: 1 }];
            }
        });

        Swal.fire({
            title: "Genial!",
            text: "Tu pizza ha sido agregada.",
            imageUrl: customImage,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
            confirmButtonColor: "black"
        });
    };


    const location = useLocation(); // Hook para detectar cambios en la URL

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        // console.log("esta funcionando")
    };

    useEffect(() => {
        setIsDropdownOpen(false)
    }, [location])





        // Swal.fire({
        //     title: "Custom width, padding, color, background.",
        //     width: 600,
        //     padding: "3em",
        //     color: "#716add",
        //     background: `#fff url(${custonBackground})`, // Usar la imagen importada para el fondo
        //     backdrop: `
        //       rgba(0,0,123,0.4)
        //       url(${customImage}) 
        //       left top
        //       no-repeat
        //     `
        //   });
    


    const emptyCart = () => {

        // console.log("Vaciar carrito"); // Verifica si el evento se captura
        setCart([]);
    };


    // Funcion para calcular la cantidad total de productos 
    const totalQuantity = cart.reduce((acc, pizza) => acc + pizza.quantity, 0)

    // Funcion para calcular el total del carrito 
    const totalPrice = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)


    return (
        <CartContext.Provider value={{ cart, setCart, increaseQuantity, decreaseQuantity, addToCart, total, emptyCart, totalPrice, totalQuantity, data, setData, getData, deletePizzaCart, toggleDropdown, isDropdownOpen }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider