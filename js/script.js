//----- Task 1

let line = '';
for (let i = 10; i <= 20; i++) line += i + ',';
console.log(line);
//-----------

//----- Task 2
for (let i = 10; i <= 20; i++) console.log(i * i);
//-----------

//----- Task 3
for (let i = 7; i < 8; i++) {
    for (let j = 1; j < 10; j++) console.log(`${i} x ${j} = ${i * j}`);
}
//-----------

//----- Task 4
{
    let sum = 0;
    let count = 1;
    const limit = 15;
    while (count <= limit) sum += count++;
    console.log(sum);
}
//-----------

//----- Task 5
{
    let sum = 1n;
    for (let i = 15n; i <= 35n; i++) {
        sum *= i;
    }
    console.log(sum);
}
//-----------

//----- Task 6
{
    let sum = 0;
    const limit = 500;
    for (let i = 1; i <= limit; i++) sum += i;
    console.log(sum / limit);
}
//-----------

//----- Task 7
for (let i = 30; i <= 80; i++) if (i % 2 === 0) console.log(i);
//-----------

//----- Task 8
for (let i = 100; i <= 200; i++) if (i % 3 === 0) console.log(i);
//-----------

//----- Task 9 and Task 10, 11
{
    const N = 10;
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            console.log(i);
            if (i % 2 === 0) {
                ++count;
                sum += i;
            }
        }
    }
    console.log(`Count: ${count}\nSum: ${sum}`);
}
//-----------

//----- Task 12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('~'.repeat(10));
}
//-----------
