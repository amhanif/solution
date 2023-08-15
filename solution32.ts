
let current_users: string[] = ['john', 'alice', 'bob', 'charlie', 'emma'];
let new_users: string[] = ['alice', 'emily', 'John', 'dave', 'Sophia'];

for (let newUsername of new_users) {
    let isUsernameTaken = current_users.some(username => username.toLowerCase() === newUsername.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${newUsername}' is available.`);
    }
}