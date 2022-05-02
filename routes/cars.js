import express from "express";
import CarController from "../controllers/car.controller.js";

const router = express.Router();

router.get("/maisModelos", CarController.maisModelos);

router.get("/menosModelos", CarController.menosModelos);

router.get("/listaMenosModelos/:X", CarController.listaMenosModelos);

router.get("/listaMaisModelos/:X", CarController.listaMaisModelos);

router.post("/listaModelos", CarController.listaModelos)

export default router;