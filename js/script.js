'use strict';

function createPersona() {
    return new Map([
        ['birth', null],
        ['city', null],
        ['sport', null],
    ]);
}

function resume(cbCreatePersona) {
    const persona = cbCreatePersona();
    for (const key of persona.keys()) {
        const answer = prompt(`Please yours ${key}:`);
        if (!answer) {
            alert(`Sorry, you not enter yours ${key}`);
            continue;
        }
        persona.set(key, answer);
    }
    return persona;
}

function personAnalyzer(staff) {
    let result = '';
    const data = {
        countries: {
            kyiv: 'Ukraine',
            london: 'United Kingdom',
            washington: 'United States',
        },
        sports: {
            football: 'Lionel Messi',
            basketball: "Shaquille O'neal",
            chess: 'Magnus Carlsen',
        },
    };

    if (confirm('Do you want to know something?')) {
        const userCity = staff.get('city')?.trim().toLowerCase();
        const userSport = staff.get('sport')?.trim().toLowerCase();
        const userBirth = Number(staff.get('birth'));

        if (userCity) {
            for (const city in data.countries) {
                if (city === userCity) {
                    result += `You live in the capital of ${data.countries[city]}\n`;
                    break;
                }
            }

            if (!result) {
                const firstChar = userCity[0].toUpperCase();
                const otherChars = userCity.split('').splice(1);
                result += `You live in the city of ${firstChar + otherChars.join('').toLowerCase()}\n`;
            }
        }

        if (userSport) {
            for (const sport in data.sports) {
                if (sport === userSport) {
                    result += `Cool! You want to be ${data.sports[sport]}\n`;
                    break;
                }
            }
        }

        if (!isNaN(userBirth) && userBirth > 0) {
            let age = `You age ${new Date().getFullYear() - userBirth}\n`;
            result ? (result = age += result) : (result += age);
        }
    }

    return result;
}

const persona = resume(createPersona);
const result = personAnalyzer(persona);
result ? alert(result) : alert('You are not registered');
