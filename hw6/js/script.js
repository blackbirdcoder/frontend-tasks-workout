const username = 'Bob Lazar';
let age = 20;
isVerified = true;
const registrationDate = new Date();
const cardNumber = +Math.random().toString().replace('.', '');
let promoCode = Math.round(Math.random() * 1) ? `PROM${Math.round(Math.random() * 10)}` : null;
let nickname;
let bonuses = Math.random();

console.log(`User: ${username}, Age: ${age}, Registration date: ${registrationDate}`);
console.log(`Verification: ${isVerified}, Promo code: ${promoCode}`);
console.log(`Nickname: ${nickname}, Card Number: ${cardNumber}, Bonuses: ${bonuses}`);

console.log(`\n${'-'.repeat(20)} Showing data types of values ${'-'.repeat(20)}`);

console.log(typeof age); // number
console.log(typeof cardNumber); // number
console.log(typeof registrationDate); // object
console.log(typeof isVerified); // boolean
console.log(typeof promoCode); // string | object
console.log(typeof nickname); // undefined
console.log(typeof bonuses); // number
