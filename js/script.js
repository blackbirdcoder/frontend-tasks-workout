'use strict';

const numbers = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];

// Sum
const sum = numbers.reduce((acc, val) => acc + val);
console.log(sum);

// Positive numbers
let positive = 0;
numbers.forEach((item) => {
    if (item > 0) ++positive;
});
console.log('positive: ', positive);

// Min value and index
const min = {
    value: null,
    index: null,
};
min.value = Math.min(...numbers);
min.index = numbers.findIndex((item) => item === min.value);
console.log(min);

// Max value and index
const max = {
    value: null,
    index: null,
};
max.value = Math.max(...numbers);
max.index = numbers.findIndex((item) => item === max.value);
console.log(max);

// Amount even and odd numbers (task 5 and 6)
const numBox = {
    even: 0,
    odd: 0,
};

numbers.forEach((item) => {
    item % 2 !== 0 ? ++numBox.odd : ++numBox.even;
});

console.log(numBox);

//Positive numbers sum even and add (task 7 and 8)
const sumBox = {
    positive: {
        even: 0,
        odd: 0,
    },
};

numbers.forEach((item) => {
    if (item > 0) {
        item % 2 !== 0
            ? (sumBox.positive.odd += item)
            : (sumBox.positive.even += item);
    }
});

console.log(sumBox.positive);

// Task 9
let proNumber = 1;

numbers.forEach((item) => {
    if (item > 0) proNumber *= item;
});

console.log(proNumber);

// Task 10
const greatZeroFiller = (sequence) => {
    const ZERO = 0;
    const max = Math.max(...sequence);
    const idx = sequence.findIndex((item) => item === max);

    for (let i = 0; i < sequence.length; i++) {
        if (i !== idx) sequence[i] = ZERO;
        continue;
    }
};

greatZeroFiller(numbers);

console.log(numbers);
