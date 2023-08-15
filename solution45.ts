interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function create_car(manufacturer: string, modelName: string, ...extras: [string, any][]): Car {
    const car: Car = { manufacturer, modelName };

    for (const [key, value] of extras) {
        car[key] = value;
    }

    return car;
}

const carInfo: Car = create_car("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(carInfo);