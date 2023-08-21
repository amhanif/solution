"use strict";
let current_users = ['john', 'alice', 'bob', 'charlie', 'emma'];
let new_users = ['alice', 'emily', 'John', 'dave', 'Sophia'];
for (let newUsername of new_users) {
    let isUsernameTaken = current_users.some(username => username.toLowerCase() === newUsername.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Username '${newUsername}' is available.`);
    }
}
