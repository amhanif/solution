"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => "the Great " + magician);
    return greatMagicians;
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
const greatMagicianNames = make_great([...magicianNames]); // Create a copy
show_magicians(magicianNames); // Original array remains unchanged
show_magicians(greatMagicianNames); // Modified array with "the Great" added
