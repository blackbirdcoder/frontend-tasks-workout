function userHourData() {
    const hours = Number(prompt('Enter number hours: '));
    return isNaN(hours) ? 0 : hours;
}

function converterHourSeconds(time) {
    return time * 3600;
}

const hours = userHourData();
const seconds = converterHourSeconds(hours);

alert(`Hours: ${hours} so many seconds: ${seconds}`);
