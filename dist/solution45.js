"use strict";
function createCar(manufacturer, modelName, ...extras) {
    const car = { manufacturer, modelName };
    for (const [key, value] of extras) {
        car[key] = value;
    }
    return car;
}
const carInfo = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023], ["features", ["GPS", "Sunroof"]]);
console.log(carInfo);
