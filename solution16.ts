
// Define the initial array of guests
let guests: string[] = ["Dr. Abdul Qadeer", "Allama Iqbal", "Mr. Jinnah"];

// Print invitation messages for the original 3 guests
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. Please join us for a delightful evening.`);
}

// Remove the guest who can't make it and replace with Mr. Abdul Sattar Edhi
console.log(`${guests[0]} can't make it to the dinner.`);
guests[0] = "Mr. Abdul Sattar Edhi";

// Print invitation messages after the replacement
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. Please join us for a delightful evening.`);
}

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add new guests to the list
guests.unshift("Mr. Kashif");
guests.splice(Math.floor(guests.length / 2), 0, "Mr. Nadeem");
guests.push("Mr. Asad");

// Print invitation messages after adding three more guests
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. Please join us for a delightful evening.`);
}

export{}