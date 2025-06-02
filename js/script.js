'use strict';

function blankUserSessionModel() {
    return {
        userId: null,
        username: null,
        age: null,
        lastLogin: null,
        nickname: undefined,
        favoriteTech: [],
        settings: {
            theme: null,
            autoLogin: false,
            notification: false,
        },
    };
}

function registration(cbCreateSessionBlank) {
    const session = cbCreateSessionBlank();
    session.userId =  BigInt(Date.now());
    session.username = prompt('Enter your name: ');
    session.age = prompt('Enter your age: ');
    if (confirm('Do you want notification ?')) session.settings.notification = true;
    session.nickname = prompt('Enter your nickname: ');
    for (let i = 0; i < 3; i++) session.favoriteTech[i] = prompt(`I like Tech ${i + 1}: `);
    session.settings.theme = confirm('Select theme light color ?') ? 'light' : 'dark';
    return session;
}

const session = registration(blankUserSessionModel);

alert(`Hello ${session.username}! Your ID: ${session.userId}`);
console.log(session);

for (const key in session) console.log(typeof session[key]);
