function make_great(magicians: string[]) {
    const greatMagicians: string[] = magicians.map(magician => "the Great " + magician);
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicianNames: string[] = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];

const greatMagicianNames: string[] = make_great([...magicianNames]); // Create a copy
show_magicians(magicianNames); // Original array remains unchanged
show_magicians(greatMagicianNames); // Modified array with "the Great" added


export {}