const array = [1, 2, 3, 4, 5];

const result = array.forEach(element => {
    return element * 2; // This won't work as expected
});

console.log(result); // Output: undefined