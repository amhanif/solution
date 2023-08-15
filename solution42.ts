
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log("the Great",magician);
    }
}

const magicianNames: string[] = ["Hamoon", "Zakouta", "Bilbatory", "Karnani"];

show_magicians(magicianNames);
export{}