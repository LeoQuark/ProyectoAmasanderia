import express, { json } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

// import para las rutas
import usuarioRoutes from "./routes/usuarios";
import productoRoutes from "./routes/productos";
import clienteRoutes from "./routes/clientes";
import ventaRoutes from "./routes/ventas"
import mail from "./routes/mail";

// inicializo express
const app = express();

// middlewares
// app.use(morgan("dev"));
// app.use(json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// rutas
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/productos', productoRoutes)
app.use('/api/clientes', clienteRoutes)
app.use('/api/ventas', ventaRoutes)
app.use('/api/sendmail', mail)

export default app;