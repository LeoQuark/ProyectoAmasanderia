import express, { json } from "express";
import morgan from "morgan";

// import para las rutas
import usuarioRoutes from "./routes/usuarios";
import productoRoutes from "./routes/productos";
import clienteRoutes from "./routes/clientes";
import ventaRoutes from "./routes/ventas"

// inicializo express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(json());

// rutas
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/productos', productoRoutes)
app.use('/api/clientes', clienteRoutes)
app.use('/api/ventas', ventaRoutes)

export default app;