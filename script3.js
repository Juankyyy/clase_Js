const letters = ["a", "b", "c", "d"];

const f = function () {
  console.log("Un elemento de función por expresión");
};
letters.forEach(f);


letters.forEach(function () {
  console.log("Un elemento de función anónima");
});


letters.forEach(() => console.log("Un elemento de función flecha"));


// Función Flecha
const cars = ["BMW", " Nissan", " Ferrari", " Ford"];

const pushCar = () => {cars.push(" KIA")}
pushCar();

const resultadoCars = document.querySelector("#array");
resultadoCars.textContent = cars;