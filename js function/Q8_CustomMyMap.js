"use strict";

// Q8: Add a map-like method to arrays.
// defineProperty keeps myMap non-enumerable, like built-in Array.prototype methods.
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this == null) {
            throw new TypeError("myMap called on null or undefined");
        }
        if (typeof callback !== "function") {
            throw new TypeError("callback must be a function");
        }

        const source = Object(this);
        const length = source.length >>> 0;
        const result = new Array(length);

        // Preserve holes in sparse arrays, as built-in map() does.
        for (let index = 0; index < length; index++) {
            if (index in source) {
                result[index] = callback.call(
                    thisArg,
                    source[index],
                    index,
                    source
                );
            }
        }
        return result;
    },
    writable: true,
    configurable: true,
    enumerable: false
});

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log(["a", "b"].myMap((letter, index) => `${index}:${letter}`));
// ["0:a", "1:b"]
