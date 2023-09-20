
//----------------------------------
// 1. Entrada del programa Input (I)
//----------------------------------
const items = [2, 3, 5, 7, 11, 13, 17]; // index es el cursor
//----------------------------------
// 2. Definición función de búsqueda
//----------------------------------
// A la función de busqueda le vamos a pasar dos parametros: el array items y el elemento_a_buscar y el objetivo del algoritmo es encontrar en que posición está el elemento_a_buscar
function search(items, elemento_a_buscar) { 
  let posicion = 0;
  const total_itemsArray = items.length;

  while (posicion < total_itemsArray) {
    if (items[posicion] == elemento_a_buscar) { 
      return posicion;

    }
    posicion++; // sumar 1 a la variable
  }
  return null;
}
//-----------------------------------------------------------
// 3. Ejecución de la función: buscar un elemento en el array
//-----------------------------------------------------------
const resultado = search(items, 13);
//----------------------------------
// 4. Salida del programa Output (O)
//----------------------------------
const container = document.querySelector('#container');
const resultadoHTML = document.createElement('p');
resultadoHTML.id = 'resultado'; // Asigna el ID que desees

if (resultado !== null) {
  resultadoHTML.textContent = `El elemento se encuentra en la posición: ${resultado} \u{1F643}`;
} else {
  resultadoHTML.textContent = 'El elemento no se encuentra en el array \u{1F644}';
}

container.appendChild(resultadoHTML);
