'use strict';

const data = {
    id: 1,
    name: 'root',
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: 'leaf',
        },
    },
    array: [{ id: 4 }, { name: 'node', children: [{ id: 5 }] }],
};

function findValuesByKey(dataSet, target, box = []) {
    for (const item in dataSet) {
        if (item === target) box.push(dataSet[item]);

        if (typeof dataSet[item] === 'object' && dataSet[item] !== null) {
            findValuesByKey(dataSet[item], target, box);
        }
    }

    return box;
}

const result = findValuesByKey(data, 'id');
console.log(result);
