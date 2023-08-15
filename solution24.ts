
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Is 'Subaru' lower case == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is 'SUBARU' lower case == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

let age = 25;
console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age <= 30? I predict True.");
console.log(age <= 30);

let isStudent = true;
console.log("Is isStudent true and age > 21? I predict False.");
console.log(isStudent && age > 21);

console.log("Is isStudent true or age > 21? I predict True.");
console.log(isStudent || age > 21);

let numbers = [10, 20, 30, 40];
console.log("Is 20 in the numbers array? I predict True.");
console.log(numbers.includes(20));

console.log("Is 50 not in the numbers array? I predict True.");
console.log(!numbers.includes(50));