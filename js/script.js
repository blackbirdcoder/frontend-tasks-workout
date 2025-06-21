'use strict';

//========= Task 1
const numbers = [1, 2, 3, 4, 5, 6];
const chars = ['a', 'b', 'c'];

Array.prototype.customShift = function () {
    if (this.length === 0) return;
    const item = this[0];
    delete this[0];
    for (let i = 1; i < this.length; i++) this[i - 1] = this[i];
    this.length -= 1;
    return item;
};

console.log(numbers.customShift());

let chr;
while ((chr = chars.customShift()) !== undefined) console.log(chr);
//================

//========= Task 2
const candidates = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

Array.prototype.customReverse = function () {
    let count = this.length;
    while (count > 0) {
        for (let i = this.length - count; i > 0; i--) {
            const tmp = this[i - 1];
            this[i - 1] = this[i];
            this[i] = tmp;
        }
        --count;
    }
    return this;
};

const heCandidates = candidates.customReverse();
console.log(candidates);
console.log(candidates === heCandidates);
//================
