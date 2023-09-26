const nombres = ["Juanky", "Santiago", "Camila", "Valeria", "Manuela"];

function contNombres(nombres) {

    for (let i = 0; i < nombres.length; i++) {
        if (i == nombres.length -1) {
            document.write(`${nombres[i]}. `);
        } else {
            document.write(`${nombres[i]}, `);
        }
    }
}

contNombres(nombres);