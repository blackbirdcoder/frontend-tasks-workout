'use strict';

//============ Task 1
const dataset = ['1', false, 12, 13, 100, undefined, null, { user: 'bob' }];

function numberMeanCalc(sequence) {
    const accountant = {
        quantity: 0,
        amount: 0,
    };

    for (const item of sequence) {
        if (typeof item === 'number') {
            accountant.quantity += 1;
            accountant.amount += item;
        }
    }

    return accountant.amount / accountant.quantity;
}

const numberMean = numberMeanCalc(dataset);
console.log(numberMean);
//===================

//============ Task 2
function doMath(numX, sing, numY) {
    let result;
    if (
        typeof numX === 'number' &&
        typeof numY === 'number' &&
        isFinite(numX) &&
        isFinite(numY) &&
        typeof sing === 'string' &&
        sing.length === 1
    ) {
        switch (sing) {
            case '+':
                result = numX + numY;
                break;
            case '-':
                result = numX - numY;
                break;
            case '*':
                result = numX * numY;
                break;
            case '/':
                result = numX / numY;
                break;
            case '%':
                result = numX % numY;
                break;
            case '^':
                result = numX ** numY;
                break;
            default:
                throw new Error(`Incorrect mathematical operation. Sign:${sing}`);
        }
    } else {
        throw new Error('Invalid arguments, check the arguments again');
    }

    return result;
}

const NUMBER_X = Number(prompt('Enter number X'));
const SING = prompt('Enter sing operation');
const NUMBER_Y = Number(prompt('Enter number Y'));
const result = doMath(NUMBER_X, SING, NUMBER_Y);
console.log(result);
//===================

//============ Task 3
function spamFiller(row, col) {
    const spam = [];
    for (let i = 0; i < row; i++) {
        const tmp = [];
        for (let j = 0; j < col; j++) {
            tmp.push(prompt(`Enter value [${i}][${j}]`));
        }
        spam.push(tmp);
    }

    return spam;
}

const row = prompt('Enter number rows');
const column = prompt('Enter number columns');
const spam = spamFiller(row, column);
console.log(spam);
//===================

//============ Task 4
function charCleaner(line, targets) {
    const chars = [];
    for (let i = 0; i < line.length; i++) {
        if (!targets.includes(line[i])) chars.push(line[i]);
    }

    return chars.join('');
}

const line = charCleaner('hello world', ['l', 'd']);
console.log(line);
//===================
