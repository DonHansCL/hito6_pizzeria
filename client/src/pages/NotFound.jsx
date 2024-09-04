// import { Container } from "react-bootstrap";
import '../../src/404.css'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    // <Container classNameName="pt-5">
    //   <h1 classNameName="mb-4">La ruta que intentas consultar no existe :/</h1>
    // </Container>

  <>
    <body className="bg-purple h-100">
        
        <div className="stars">
            <div className="custom-navbar">
                <div className="brand-logo">
                    <img src="" width="80px"/>
                </div>
                <div className="navbar-links">
                    <ul>
                      <li><Link to="/" className="text-white ms-3 text-decoration-none">HOME</Link></li>
                      <li><Link to="/register" className="text-white ms-3 text-decoration-none"> Registro </Link> </li>
                      <li><Link to="/login" className="text-white ms-3 text-decoration-none ms-auto">Login</Link> </li>                     
                    </ul>
                </div>
            </div>
            <div className="central-body">
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                <Link to="/" className="btn-go-home">Volver a HOME</Link>
                {/* <a href="http://salehriaz.com/404Page/404.html" className="btn-go-home" target="_blank">GO BACK HOME</a> */}
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>

        </div>

    </body>
    </> 
  );
};
export default NotFound;
