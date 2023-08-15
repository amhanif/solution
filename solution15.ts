
// Define the initial array of guests
const guests: string[] = ["Dr. Abdul Qadeer", "Allama Iqbal", "Mr. Jinnah"];

// Print invitation messages for each initial guest
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. Please join us for a delightful evening.`);
}

// Print a message about the guest who can't make it
console.log(`${guests[0]} can't make it to the dinner.`);

// Replace the guest who can't make it with the new guest
guests[0] = "Mr. Abdul Sattar Edhi";

// Print invitation messages for the updated guest list
for (const guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. Please join us for a delightful evening.`);
}
