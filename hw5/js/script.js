'use strict';

const username = prompt('Enter name:');
if (username) {
    const answer = confirm('Do you want to see the name?');
    if (answer) alert('Your name ' + username);
}
