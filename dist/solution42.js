"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log("the Great", magician);
    }
}
const magicianNames = ["Hamoon", "Zakouta", "Bilbatory", "Karnani"];
show_magicians(magicianNames);
