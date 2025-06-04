function inputNumbers(quantity = 3) {
    const numbers = [];
    for (let i = 0; i < quantity; i++) {
        const number = prompt('Enter number: ');
        numbers[i] = isNaN(number) ? 0 : +number;
    }
    return numbers;
}

function arithmeticMean(staff) {
    return (
        staff.reduce(function (acc, val) {
            return acc + val;
        }) / staff.length
    );
}

const numbers = inputNumbers();
alert(`Result arithmetic mean: ${arithmeticMean(numbers)}`);
