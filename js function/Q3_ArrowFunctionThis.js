"use strict";

// Q3: Arrow functions do not create their own `this`.
// They use `this` from the surrounding (lexical) scope.
const user = {
    name: "Jayant",
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();
// In a Node.js CommonJS file with strict mode, top-level `this` is module.exports,
// so its `name` property is normally undefined. Arrow `this` does not mean `user`.

// Fix: use a normal method/function, where `this` is set by the call site.
const correctedUser = {
    name: "Jayant",
    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

correctedUser.showName(); // Jayant
