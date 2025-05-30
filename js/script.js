const username = prompt('Enter your name?', 'Guest');
let age = +prompt('Enter your age?', '18');
const isRegistration = confirm('Do you want to register?');
const userId = BigInt((Math.random() * Number.MAX_SAFE_INTEGER).toString().replace('.', '1'));
let bonusCode = null;
let secondName;

alert(`Hello, ${username}!\nYour age: ${age}\nYour status: ${isRegistration}`);

console.log(`${'-'.repeat(20)} Show types ${'-'.repeat(20)}`);

console.log('Name', username, typeof username);
console.log('Age', age, typeof age);
console.log("Is Registration", isRegistration, typeof isRegistration);
console.log('User ID', userId, typeof userId);
console.log('Bonus Code', bonusCode, typeof bonusCode);
console.log('Second Name', secondName, typeof secondName);
