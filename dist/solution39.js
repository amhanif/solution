"use strict";
function city_country(city, country) {
    return (`"${city}", "${country}"`);
}
const city1 = city_country("Lahore", "Pakisan");
const city2 = city_country("Paris", "France");
const city3 = city_country("London", "UK");
console.log(city1);
console.log(city2);
console.log(city3);
