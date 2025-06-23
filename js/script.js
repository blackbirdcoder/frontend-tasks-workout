'use strict';

// ========= indexOf
const trash = [2, 5, 9, 'x'];
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

Array.prototype.customIndexOf = function (srh, idx = 0) {
    if (idx >= this.length) return -1;
    else if (idx < 0 && -this.length <= idx) idx = idx + this.length;
    else if (idx < -this.length) idx = 0;

    for (let i = idx; i < this.length; i++) {
        if (this[i] === srh) return i;
    }

    return -1;
};

console.log(trash.customIndexOf('x')); // 3
console.log(trash.customIndexOf('x', -1)); // 3
console.log(beasts.customIndexOf('bison')); // 1
console.log(beasts.customIndexOf('bison', 2)); // 4
console.log(beasts.customIndexOf('giraffe')); // -1
//==================

console.log('-'.repeat(20));

// ========= LastIndexOf
const chars = ['c', 'b', 'c', 'd'];
const numbers = [2, 5, 9, 2];
const joke = [1, , , , 'x'];

Array.prototype.customLastIndexOf = function (srh, idx = this.length - 1) {
    if (idx < -this.length || isNaN(idx) || srh === undefined) return -1;
    else if (idx < 0 && -this.length <= idx) idx = idx + this.length;
    else if (idx >= this.length) idx = this.length - 1;

    for (let i = idx; i >= 0; i--) {
        if (this[i] === srh) return i;
    }

    return -1;
};

console.log(chars.customLastIndexOf('c')); // 2
console.log(joke.customLastIndexOf(undefined)); // -1
console.log(numbers.customLastIndexOf(2)); // 3
console.log(numbers.customLastIndexOf(7)); // -1
console.log(numbers.customLastIndexOf(2, 3)); // 3
console.log(numbers.customLastIndexOf(2, 2)); // 0
console.log(numbers.customLastIndexOf(2, -2)); // 0
console.log(numbers.customLastIndexOf(2, -1)); // 3
//==================

console.log('-'.repeat(20));

// ============ Find
const temperatures = [10, -10, 3, 25, -1, 2];

Array.prototype.customFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) return this[i];
    }
};

const temperature = temperatures.customFind((value) => value > 20);
console.log(temperature);

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

const cherry = inventory.customFind(isCherries); // {name: 'cherries', quantity: 5}
//==================

console.log('-'.repeat(20));

// ============ FindIndex
const cash = [5, 12, 8, 130, 44];

Array.prototype.customFindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) return i;
    }

    return -1;
};

const boringIdx = cash.customFindIndex((item) => item > 13);
console.log(boringIdx);
//=======================

console.log('-'.repeat(20));

// ============ Includes
Array.prototype.customIncludes = function (srh, idx = 0) {
    if (idx >= this.length) return false;
    else if (idx < 0 && -this.length <= idx) idx = idx + this.length;
    else if (idx < -this.length) idx = 0;

    for (let i = idx; i < this.length; i++) {
        if (
            (srh !== NaN.toString() &&
                isNaN(this[i]) &&
                this[i].toString() === srh.toString()) ||
            this[i] === srh
        ) {
            return true;
        }
    }

    return false;
};
console.log([1, 2, 3].customIncludes(2)); // true
console.log([1, 2, 3].customIncludes(4)); // false
console.log([1, 2, 3].customIncludes(3, 3)); // false
console.log([1, 2, 3].customIncludes(3, -1)); // true
console.log([1, 2, NaN, 3].customIncludes(NaN)); // true
console.log(['1', '2', '3'].customIncludes(3)); // false
console.log(['a', 'b', 'c'].customIncludes('c', -100)); // true
console.log(['a', 'b', 'c'].customIncludes('c', -2)); // true
//======================

console.log('-'.repeat(20));

// ============ Every
const costs = [12, 5, 8, 130, 44];

Array.prototype.customEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) continue;
        return false;
    }
    return true;
};

const isBig = costs.customEvery((item) => {
    return item >= 10 ? true : false;
});

console.log(isBig); // false
//=======================

console.log('-'.repeat(20));

// ============ Some
const prime = [1, 2, 3, 4, 5];

Array.prototype.customSome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) return true;
        continue;
    }

    return false;
};

const isLess = prime.customSome((item) => {
    return item < 0 ? true : false;
});

console.log(isLess);
//==================
