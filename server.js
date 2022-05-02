import express from "express";
import cars from "./routes/cars.js"

const app = express();
app.use(express.json());

app.use("/marcas",cars);

app.listen(3000, ()=> console.log("Listening 3000"));

