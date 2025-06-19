'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(dataset, target) {
    let idx;
    for (let i = 0; i < dataset.length; i++) {
        if (dataset[i] === target) {
            delete dataset[i];
            idx = i + 1;
            break;
        }
    }
    if (idx !== undefined) {
        for (let i = idx; i < dataset.length; i++) {
            dataset[i - 1] = dataset[i];
            delete dataset[i];
        }

        dataset.length -= 1;
    }
}

removeElement(array, 5);
console.log(array);
