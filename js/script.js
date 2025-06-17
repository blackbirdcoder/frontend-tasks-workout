'use strict';

function padString(line, number, char, right = true) {
    const error = '{1} argument is not correct, contains: {2}';

    if (line === undefined) {
        return error.replace('{1}', 'String').replace('{2}', line);
    }
    if (number === undefined || isNaN(number)) {
        return error.replace('{1}', 'Number').replace('{2}', number);
    }
    if (char === undefined || char.length !== 1) {
        return error.replace('{1}', 'String (one sing)').replace('{2}', char);
    }

    if (number < line.length) return line.substring(0, number);

    return right ? line + char.repeat(number) : char.repeat(number) + line;
}

const stringOne = padString('hello', 6, '*', false);
console.log(stringOne);

const stringTwo = padString('hello', 6, '*', true);
console.log(stringTwo);

const stringThree = padString('hello', 2, '*', true);
console.log(stringThree);
