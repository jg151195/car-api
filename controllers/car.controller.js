import CarService from "../services/car.service.js";

const controller = {

    async maisModelos(req, res) {
        res.send(await CarService.localizarMaisModelos());
    },

    async menosModelos(req, res) {
        res.send(await CarService.localizarMenosModelos());
    },

    async listaMenosModelos(req, res) {

        const param = parseInt(req.params.X);
        res.send(await CarService.gerarListaMenosModelos(param));
    },

    async listaMaisModelos(req, res) {

        const param = parseInt(req.params.X);
        res.send(await CarService.gerarListaMaisModelos(param));
    },

    async listaModelos(req, res) {
        const request = req.body.brand;
        res.send(await CarService.gerarListaModelos(request));
    },
}

export default controller;