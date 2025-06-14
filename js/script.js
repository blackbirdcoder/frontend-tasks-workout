const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(number, dataset) {
    let key = '';
    for (let i = 0; i < number; i++) {
        key += dataset[Math.floor(Math.random() * dataset.length)];
    }

    return key;
}

const key = generateKey(16, characters);
console.log(key);
