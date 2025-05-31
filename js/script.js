'use strict';

const user = {
    name: 'Bob',
    age: 20,
    isOnline: true,
    friends: ['Robert', 'Kurt', 'Simon'],
    settings: {
        theme: 'dark',
        notification: false,
    },
};

const firstFriendName = user.friends[0];
const notificationsEnable = user.settings.notification;

console.log(`
    ${'-'.repeat(25)}
    Current user name: ${user.name}
    Friends: ${user.friends.length}
    First friend: ${firstFriendName}
    Current theme: ${user.settings.theme}
    Notification work: ${notificationsEnable}
    ${'-'.repeat(25)}`);
