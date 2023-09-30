var galaxies = [3, 4, 67, 87, 3, 12, 6, 7];
function contarEstrellas(galaxies) {
    var total = 0;
    galaxies.forEach(function (i) {
        //
        total += i;
    });
    return total;
}

var result = contarEstrellas(galaxies);
document.querySelector("#header").innerHTML = result;


const letters = ["a", "b", "c", "d"];

const f = function () {
  console.log("Un elemento de función por expresión");
};
letters.forEach(f);


letters.forEach(function () {
  console.log("Un elemento de función anónima");
});


letters.forEach(() => console.log("Un elemento de función flecha"));