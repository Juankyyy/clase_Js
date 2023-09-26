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
