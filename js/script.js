'use strict';

function buildUserSession() {
    return {
        username: null,
        age: null,
        userId: BigInt(Date.now()),
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

function registration(user) {
    user.username = prompt('Enter your name: ');
    user.age = prompt('Enter your age: ');
    if (confirm('Do you want notification ?')) user.settings.notification = true;
    user.nickname = prompt('Enter your nickname: ');
    for (let i = 0; i < 3; i++) user.favoriteTech[i] = prompt(`I like Tech ${i + 1}: `);
    user.settings.theme = confirm('Select theme light color ?') ? 'light' : 'dark';
}

const session = buildUserSession();
registration(session);

alert(`Hello ${session.username}! Your ID: ${session.userId}`);
console.log(session);

for (const key in session) console.log(typeof session[key]);
