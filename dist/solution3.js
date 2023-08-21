"use strict";
let myName = "amir hanif jaVed";
console.log(`Lowercase Name: ${myName.toLowerCase()}`);
console.log(`Uppercase Name: ${myName.toUpperCase()}`);
let words = myName.split(' ');
let titleCase = "";
for (let i = 0; i < words.length; ++i) {
    titleCase += words[i].charAt(0).toLocaleUpperCase() +
        words[i].slice(1).toLowerCase() + " ";
}
;
console.log(`Titlecase Name: ${titleCase}`);
