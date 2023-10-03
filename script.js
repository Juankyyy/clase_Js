const items = [2, 3, 5, 7, 11, 13, 17];

function search(items, elemento_a_buscar) { 
  let posicion = 0;
  const total_itemsArray = items.length;

  while (posicion < total_itemsArray) {
    if (items[posicion] == elemento_a_buscar) { 
      return posicion;

    }
    posicion++;
  }
  return null;
}

const resultado = search(items, 7);

const resultadoHTML = document.querySelector("#posicion_elemento")
resultadoHTML.classList.add("contenido")

if (resultado !== null) {
  resultadoHTML.textContent = `El elemento se encuentra en la posición: ${resultado}`;
} else {
  resultadoHTML.textContent = 'El elemento no se encuentra en el array';
}

function search2(items, posicion_a_buscar) {
  if (posicion_a_buscar <= items.length) {
    return items[posicion_a_buscar];
  }
return null;
}

const resultado2 = search2(items, 3);

const resultado2HTML = document.querySelector("#elemento_en_posicion");
resultado2HTML.classList.add("contenido")

if (resultado2 !== null) {
  resultado2HTML.textContent = `En esta posición se encuentra el elemento: ${resultado2}`;
} else {
  resultado2HTML.textContent = 'La posición no se encuentra en el array';
}