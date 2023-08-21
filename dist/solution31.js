"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    while (usernames.length > 0) {
        usernames.pop();
    }
    console.log("All usernames have been removed.");
}
