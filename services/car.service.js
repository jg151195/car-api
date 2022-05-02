import CarRepository from "../repository/car.repository.js";

const service = {

    async localizarMaisModelos() {
        return CarRepository.localizarMaisModelos();
    },

    async localizarMenosModelos() {

        return CarRepository.localizarMenosModelos();
    },

    async gerarListaMenosModelos(param) {

        return CarRepository.gerarListaMenosModelos(param);
    },

    async gerarListaMaisModelos(param) {

        return CarRepository.gerarListaMaisModelos(param);

    },

    async gerarListaModelos(request) {
        return CarRepository.gerarListaModelos(request);
    },
}

export default service;