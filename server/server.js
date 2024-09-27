import express from 'express';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import checkoutRoute from './routes/checkout.route.js';
import pizzaRoute from './routes/pizza.route.js';
import dotenv from 'dotenv'; // Asegúrate de importar dotenv

// Configurar dotenv
dotenv.config()

// Inicializar la aplicación Express
const app = express();

// Leer la clave secreta desde el archivo .env
const SECRET_KEY = process.env.SECRET_KEY;
console.log('SECRET_KEY:', SECRET_KEY);


// Middleware
app.use(express.json()); // Manejo de JSON en el cuerpo de las solicitudes
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Middleware para manejar JSON

// Rutas
app.use('/api/auth', authRoute);
app.use('/api/pizzas', pizzaRoute);
app.use('/api/checkouts', checkoutRoute);

// // Ruta de login
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     // Leer los datos del archivo JSON
//     const users = JSON.parse(fs.readFileSync('./db/users.json', 'utf8'));

//     // Buscar el usuario por email
//     const user = users.find(u => u.email === email);

//     if (!user) {
//         return res.status(401).json({ message: 'Usuario no encontrado' });
//     }

//     // Comparar la contraseña enviada con la contraseña almacenada
//     const passwordIsValid = bcrypt.compareSync(password, user.password);

//     if (!passwordIsValid) {
//         return res.status(401).json({ message: 'Contraseña incorrecta' });
//     }

//     // Si el login es exitoso, generar el token JWT
//     const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
//         expiresIn: '1h', // El token expirará en 1 hora
//     });

//     return res.json({ token });
// });

// // Middleware para verificar el token
// const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization'];

//     if (!token) {
//         return res.status(403).json({ message: 'No token provided' });
//     }

//     jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
//         if (err) {
//             return res.status(500).json({ message: 'Failed to authenticate token' });
//         }

//         req.userId = decoded.id;
//         next();
//     });
// };

// // Ruta protegida
// app.get('/profile', verifyToken, (req, res) => {
//     return res.json({ message: `Bienvenido usuario con ID ${req.userId}` });
// });

// Ruta 404 para manejar rutas no encontradas
app.use((_, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
