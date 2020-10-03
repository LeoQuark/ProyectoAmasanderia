import express, { json } from "express";
import morgan from "morgan";

// inicializo express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(json());

// rutas

// app.use()

// configuracion del puerto
const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
