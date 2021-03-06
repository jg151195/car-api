import {
    promises as fs
} from "fs";

const repository = {
    async localizarMaisModelos() {
        const data = JSON.parse(await fs.readFile("../car-api/public/car-list.json"));
        const maisModelos = [];
        let value = 0
        data.forEach(element => {
            if (value < element.models.length) {
                value = element.models.length;
            }
        });
        data.forEach(element => {
            if (value == element.models.length) {
                maisModelos.push(element.brand);
            }
        });
        return maisModelos;
    },

    async localizarMenosModelos(){
        const data = JSON.parse(await fs.readFile("../car-api/public/car-list.json"));
        const menosModelos = [];
        let value = 100;
        data.forEach(element => {
            if (value > element.models.length) {
                value = element.models.length;
            }
        });
        data.forEach(element => {
            if (value == element.models.length) {
                menosModelos.push(element.brand);
            }
        });
        return menosModelos;
    },

    async gerarListaMenosModelos(param){
        const data = JSON.parse(await fs.readFile("./public/car-list.json"));
        data.sort((a, b) => {
            return a.models.length - b.models.length || a.brand.localeCompare(b.brand);
        })
        const array = []
        for (let i = 0; i < param; i++) {
            const name = data[i].brand;
            const size = data[i].models.length;
            const result = `${name} - ${size}`;
            array.push(result)
        }
        return array;
    },

    async gerarListaMaisModelos(param){
        const data = JSON.parse(await fs.readFile("./public/car-list.json"));
        const array = []
        data.sort((a, b) => {
            return b.models.length - a.models.length || a.brand.localeCompare(b.brand);
        })
        for (let i = 0; i < param; i++) {
            const name = data[i].brand;
            const size = data[i].models.length;
            const result = `${name} - ${size}`;
            array.push(result);
        }
        return array;
    },
    async gerarListaModelos(request){
        const data = JSON.parse(await fs.readFile("../car-api/public/car-list.json"));
        
        const name = repository.fixBrandName(request);
        let array = []

        const findItem = data.find((a) => a.brand == name || a.brand == name.toUpperCase());


        if (findItem === undefined) {
            return array;
        } else {
            array.push(findItem.models);
            return array;
        }
    },

    fixBrandName(name) {

        const nameLower = name.toLowerCase();
    
        if (nameLower.indexOf(" ") > 0) {
            const words = nameLower.split(" ");
            const word1 = words[0][0].toUpperCase() + words[0].slice(1)
            const word2 = words[1][0].toUpperCase() + words[1].slice(1)
            return word1 + " " + word2;
        } else if (nameLower.indexOf("-") > 0) {
            const words = nameLower.split("-");
            const word1 = words[0][0].toUpperCase() + words[0].slice(1)
            const word2 = words[1][0].toUpperCase() + words[1].slice(1)
            return word1 + "-" + word2;
        } else {
            const word = nameLower[0].toUpperCase() + nameLower.slice(1);
            return word
        }
    }
}

export default repository;