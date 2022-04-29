import {
    promises as fs
} from "fs";

export async function worstFive(value) {
    const data = JSON.parse(await fs.readFile("./public/car-list.json"));
    data.sort((a, b) => {
        return a.models.length - b.models.length || a.brand.localeCompare(b.brand);
    })
    const array = []
    for (let i = 0; i < value; i++) {

        const name = data[i].brand;
        const size = data[i].models.length;
        const result = `${name} - ${size}`;
        array.push(result)
    }
    return array
}

export async function topFive(value) {
    const data = JSON.parse(await fs.readFile("./public/car-list.json"));
    const array = []
    data.sort((a, b) => {
        return parseInt(b.models.length) - parseInt(a.models.length) || a.brand.localeCompare(b.brand);
    })
    for (let i = 0; i < value; i++) {
        const name = data[i].brand;
        const size = data[i].models.length;
        const result = `${name} - ${size}`;
        array.push(result);
    }
    return array;

}

export function fixBrandName(name) {

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