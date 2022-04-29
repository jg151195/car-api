import express from "express";
import {promises as fs} from "fs";
import {worstFive} from "../functions.js";
import {topFive} from "../functions.js";
import {fixBrandName} from "../functions.js"

const router = express.Router();

router.get("/maisModelos", async (req,res)=>{
    const data = JSON.parse(await fs.readFile("../car-api/public/car-list.json"));
    const maisModelos = [];
    let value = 0
    data.forEach(element => {
        if(value<element.models.length){
            value = element.models.length;
        }
    });
    data.forEach(element => {
        if(value == element.models.length){
            maisModelos.push(element.brand);
        }
    });

    maisModelos.sort((a,b)=> a.localeCompare(b));
    
    res.send(maisModelos);
})

router.get("/menosModelos", async (req,res)=>{
    const data = JSON.parse(await fs.readFile("../car-api/public/car-list.json"));
    const menosModelos = [];
    let value = 100;
    data.forEach(element => {
        if(value>element.models.length){
            value = element.models.length;
        }
    });
    data.forEach(element => {
        if(value == element.models.length){
            menosModelos.push(element.brand);
        }
    });
    res.send(menosModelos);
})

router.get("/listaMenosModelos/:X", async (req,res) =>{
    const param = parseInt(req.params.X);
    const lista = await worstFive(param);
    res.send(lista);
})
router.get("/listaMaisModelos/:X", async (req,res) =>{
    const param = parseInt(req.params.X);
    const lista = await topFive(param);;
    res.send(lista);
})

router.post("/listaModelos", async(req,res)=>{
    const data = JSON.parse(await fs.readFile("../car-api/public/car-list.json"));
    const request = req.body.brand;
    const name = fixBrandName(request);
    let array = []

    const findItem = data.find((a)=> a.brand == name || a.brand == name.toUpperCase());
    
    
    if(findItem === undefined){
        res.send(array);
    }else{
        array.push(findItem.models);
        res.send(array);
    }

})

export default router;