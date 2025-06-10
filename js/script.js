//----- Task 1
let line = '';
for (let i = 20; i <= 30; i += 0.5) line += i + ' ';
console.log(line);
//-----------

//----- Task 2
const HRY = 27;
for (let i = 10; i <= 100; i += 10) console.log(`${i}$=${i * HRY}`);
//-----------

//----- Task 3
{
    const N = 90;
    for (let i = 1; i <= 100; i++) {
        const squ = i * i;
        if (squ < N) console.log(squ);
    }
}
//-----------

//----- Task 4
{
    const N = 7;
    const result = [];
    for (let i = 1; i <= 100; i++) if (N % i === 0) result.push(i);
    result.length === 2 ? console.log(`natural number ${N}`) : console.log(`NOT natural number ${N}`);
}
//-----------

//----- Task 5
{
    const N = 3;
    const TARGET = 81;
    for (let i = 0; i <= TARGET; i++) {
        const pow = Math.pow(N, i);
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
