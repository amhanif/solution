"use strict";
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
// Call the function with default values
make_shirt(); // Large shirt with the default message
// Call the function with different sizes and messages
make_shirt("Medium"); // Medium shirt with the default message
make_shirt("Small", "I am a Web 3.0 Developer."); // Small shirt with a custom message
