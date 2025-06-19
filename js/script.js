'use strict';

const target = [1, 2, 3, -1, -2, -3];

function emptyCheck(seqNumbers) {
    return seqNumbers.length === 0;
}

function selectionPositiveNumbers(seqNumbers, cbEmptyCheck) {
    if (cbEmptyCheck(seqNumbers)) throw new Error("Array is empty. Can't work.");
    const positiveNumbers = [];
    for (const number of seqNumbers) if (number > 0) positiveNumbers.push(number);
    if (cbEmptyCheck(positiveNumbers)) return null;

    return positiveNumbers;
}

const positiveNumbers = selectionPositiveNumbers(target, emptyCheck);
console.log(positiveNumbers);
