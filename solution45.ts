interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...extras: [string, any][]): Car {
    const car: Car = { manufacturer, modelName };

    for (const [key, value] of extras) {
        car[key] = value;
    }

    return car;
}

const carInfo: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023], ["features", ["GPS", "Sunroof"]]);
console.log(carInfo);

