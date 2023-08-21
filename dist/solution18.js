"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Store the locations in an array
let places_to_visit = ["Tokyo", "Paris", "New York", "London", "Sydney"];
//Print the array in its original order
console.log("Original Order:", places_to_visit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...places_to_visit].sort());
//Show that the array is still in its original order
console.log("Original Order:", places_to_visit);
//Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...places_to_visit].sort().reverse());
//Show that the array is still in its original order
console.log("Original Order:", places_to_visit);
//Reverse the order of the list
places_to_visit.reverse();
console.log("Reversed Order:", places_to_visit);
//Reverse the order of the list again to get back the original order
places_to_visit.reverse();
console.log("Original Order:", places_to_visit);
//Sort the array in alphabetical order
places_to_visit.sort();
console.log("Sorted Alphabetical Order:", places_to_visit);
//Sort the array in reverse alphabetical order
places_to_visit.sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", places_to_visit);
