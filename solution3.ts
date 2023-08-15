
let myName:string="amir hanif jaVed"

console.log(`Lowercase Name: ${myName.toLowerCase()}`);
console.log(`Uppercase Name: ${myName.toUpperCase()}`);


let words:string[]=myName.split(' ')
let titleCase:string=""

for(let i=0;i<words.length; ++i){
titleCase +=words[i].charAt(0).toLocaleUpperCase()+
words[i].slice(1).toLowerCase()+" "};
console.log(`Titlecase Name: ${titleCase}`);

