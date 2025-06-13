'use strict';

//----- Task 1
let line = '';
for (let i = 20; i <= 30; i += 0.5) {
    line += `${i} `;
}
console.log(line);
//-----------

//----- Task 2
const ONE_DOLLAR_HRYVNIA = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i}$=${i * ONE_DOLLAR_HRYVNIA}`);
}
//-----------

//----- Task 3
{
    const GIVEN_NUMBER = 90;
    for (let i = 1; i <= 100; i++) {
        const squ = i * i;
        if (squ < GIVEN_NUMBER) console.log(squ);
    }
}
//-----------

//----- Task 4
{
    const GIVEN_NUMBER = 7;
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (GIVEN_NUMBER % i === 0) result.push(i);
    }
    result.length === 2
        ? console.log(`natural number ${GIVEN_NUMBER}`)
        : console.log(`NOT natural number ${GIVEN_NUMBER}`);
}
//-----------

//----- Task 5
{
    const GIVEN_NUMBER = 3;
    const TARGET = 81;
    for (let i = 0; i <= TARGET; i++) {
        const pow = Math.pow(GIVEN_NUMBER, i);
        if (pow === TARGET) {
            console.log(true + ' ' + TARGET);
            break;
        }

        if (pow > TARGET) {
            console.log(false + ' NOT ' + TARGET);
            break;
        }
    }
}
//-----------
