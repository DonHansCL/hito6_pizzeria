import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza}) => {
    const { cart, setCart, addToCart} = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart(pizza);
    };


    return (
        <div className="card h-100">
            <img src={pizza.img} alt={pizza.name} className="card-img-top rounded mx-auto d-block" />
            <div className="card-body">
                <h2 className="card-title">🍕  {pizza.name}</h2>
                <p className="card-text"><strong>🍕  Ingredientes: </strong></p>                                       
                <ul className="card-text list-inline">
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index} className="list-inline-item">{ingredient}</li>
                    ))}
                </ul>
                <h4 className="card-text text-center p-1"><strong>Precio: </strong>${pizza.price.toLocaleString()}</h4> 
                <div className="d-flex justify-content-evenly">
                    <Link to={`/pizza/${pizza.id}`} className="btn btn-card text-white bg-dark">
                        <button className="btn btn-card text-white bg-dark"><strong>Ver más</strong></button>
                    </Link>
                    <button 
                        className="btn btn-card text-white bg-dark" 
                        onClick={handleAddToCart}
                        // onClick={() => addToCart(pizza)}
                    >
                        <strong>Añadir</strong> 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;


            // <div className="card mb-4">
            //     <img src={pizza.img} alt={pizza.name} className="card-img-top rounded mx-auto d-block" />
            //     <div className="card-body">
            //         <h2 className="card-title">🍕  {pizza.name}</h2>
            //         <p className="card-text"><strong>🍕  Ingredientes: </strong></p>                                       
            //         <ul className="card-text list-inline">
            //             {pizza.ingredients.map((ingredient, index) => (
            //                 <li key={index} className="list-inline-item">{ingredient}</li>
            //             ))}
            //         </ul>
            //         <h4 className="card-text text-center p-1"><strong>Precio: </strong>${pizza.price.toLocaleString()}</h4> 
            //         <div className="d-flex justify-content-evenly">
            //             <button className="btn btn-warning">Ver más</button>
            //             <button className="btn btn-warning">Añadir</button>
            //         </div>
            //     </div>
            // </div>


// <div class="container-fluid">
//     <div class="row row-cols-1 row-cols-md-3 g-4 px-3 py-3">
//         <div class="col">
//           <div class="card h-100">
//             <img src="./assets/img/cupon-1.jpg" class="card-img-top" alt="...">
//             <div class="card-body roboto-light">
//               <!-- <h5 class="card-title">Card title</h5> -->
//               <p class="card-text fs-5">Plumón Coral Fleece estampado en modelo y tamaño a elección</p>
//               <p class="card-text text-secondary fs-6">Plumones Manolino</p>
//               <p class="card-text text-secondary fs-6"><i class="fa-solid fa-location-dot"></i> 9191 Avenida Vitacura, Chile</p>
//             </div>
//             <div class="card-footer text-end">
//                 <s>$45.990</s><strong class="ms-2 text-verde">$22.990</strong>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card h-100">
//             <img src="./assets/img/cupon-2.jpg" class="card-img-top" alt="...">
//             <div class="card-body roboto-light">
//               <!-- <h5 class="card-title">Card title</h5> -->
//               <p class="card-text fs-5">Entrada para compartir + platos de fondo + postres + bebestibles</p>
//               <p class="card-text text-secondary fs-6">V for Vegan</p>
//               <p class="card-text text-secondary fs-6"><i class="fa-solid fa-location-dot"></i> 777 Jesse Pinkman, Chile</p>
              
//             </div>
//             <div class="card-footer text-end">
//                 <s>$30.990</s><strong class="ms-2 text-verde">$12.990</strong>
//             </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card h-100">
//             <img src="./assets/img/cupon-3.jpg" class="card-img-top" alt="...">
//             <div class="card-body roboto-light">
//               <!-- <h5 class="card-title">Card title</h5> -->
//               <p class="card-text fs-5">Evaluación integral + blanqueamiento dental led + limpieza + fluoración</p>
//               <p class="card-text text-secondary fs-6">Clinica Dental Quijada</p>
//               <p class="card-text text-secondary fs-6"><i class="fa-solid fa-location-dot"></i> 1342, Blanco Escalada, Chile</p>
//             </div>
//             <div class="card-footer text-end">
//               <s>$299.990</s><strong class="ms-2 text-verde">$25.990</strong>
//           </div>
//           </div>
//         </div>
//     </div>

//     <div class="row row-cols-1 row-cols-md-3 g-4 p-3">
//         <div class="col">
//           <div class="card h-100">
//             <img src="./assets/img/cupon-4.jpg" class="card-img-top" alt="...">
//             <div class="card-body roboto-light">
//               <!-- <h5 class="card-title">Card title</h5> -->
//               <p class="card-text fs-5">Colación para 2 personas + postre (no incluye bebidas)</p>
//               <p class="card-text text-secondary fs-6">Suricata Almacen</p>
//               <p class="card-text text-secondary fs-6"><i class="fa-solid fa-location-dot"></i> 1071 Miguel Claro, Chile</p>
//             </div>
//             <div class="card-footer text-end">
//               <s>$4.200</s><strong class="ms-2 text-verde">$2.100</strong>
//           </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card h-100">
//             <img src="./assets/img/cupon-5.jpg" class="card-img-top" alt="...">
//             <div class="card-body roboto-light">
//               <!-- <h5 class="card-title">Card title</h5> -->
//               <p class="card-text fs-5">1, 2 o 4 tickets para Stukids. Elige sucursal</p>
//               <p class="card-text text-secondary fs-6">Stukids Centro de Eventos</p>
//               <p class="card-text text-secondary fs-6"><i class="fa-solid fa-location-dot"></i> 133 El Tranque, Chile</p>
//             </div>
//             <div class="card-footer text-end">
//               <s>$4.000</s><strong class="ms-2 text-verde">$2.500</strong>
//           </div>
//           </div>
//         </div>
//         <div class="col">
//           <div class="card h-100">
//             <img src="./assets/img/cupon-6.jpg" class="card-img-top" alt="...">
//             <div class="card-body roboto-light">
//               <!-- <h5 class="card-title">Card title</h5> -->
//               <p class="card-text fs-5">San Pedro de Atacama: 1 o 2 noches en alojamiento a elección</p>
//               <p class="card-text text-secondary fs-6">D-Latam Travel</p>
//               <p class="card-text text-secondary fs-6"><i class="fa-solid fa-location-dot"></i> 9191 Avenida Vitacura, Chile</p>
//             </div>
//             <div class="card-footer text-end">
//               <s>$80.200</s><strong class="ms-2 text-verde">$44.100</strong>
//           </div>
//           </div>
//         </div>
//     </div>
// </div>