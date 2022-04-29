import express from "express";
import cars from "./public/routes/cars.js"

const app = express();
app.use(express.json());

app.use("/marcas",cars);

app.listen(3000, ()=> console.log("Listening 3000"));

