const letters = ["a", "b", "c", "d"];

const f = function () {
  console.log("Un elemento de función por expresión");
};
letters.forEach(f);


letters.forEach(function () {
  console.log("Un elemento de función anónima");
});


letters.forEach(() => console.log("Un elemento de función flecha"));


// Función Flecha (push)
const cars = ["BMW", " Nissan", " Ferrari", " Ford"];

const carsNormal = document.querySelector("#normalPush");
carsNormal.textContent = cars;

const pushCar = () => {cars.push(" KIA")}
pushCar();

const resultadoCars = document.querySelector("#push");
resultadoCars.textContent = cars;


// Función Flecha (reverse)
const ordenados = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", " 10"];

const ordenadosNormal = document.querySelector("#normalReverse");
ordenadosNormal.textContent = ordenados;

const ordenadosReverse = () => {ordenados.reverse()};
ordenadosReverse();


const ordenadosReverseHTML = document.querySelector("#reverse");
ordenadosReverseHTML.textContent = ordenados;
