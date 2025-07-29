'use strict';

class Student {
    static #NUM_LESSONS = 25;

    #firstName = null;
    #lastName = null;
    #yearBirth = null;

    #attendance = [];
    #ratings = [];

    #average = {
        visit: 0,
        score: 0,
    };

    constructor(person) {
        this.#firstName = person.firstName;
        this.#lastName = person.lastName;
        this.#yearBirth = person.yearBirth;
    }

    get age() {
        return new Date().getFullYear() - this.#yearBirth;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    visitMark(value) {
        if (typeof value !== 'boolean') throw 'Error value!';
        if (this.#attendance.length < Student.#NUM_LESSONS) {
            this.#attendance.push(value);
        } else {
            console.warn(`limit ${Student.#NUM_LESSONS} `);
            return false;
        }
        return value;
    }

    reward(num) {
        if (this.#ratings.length < Student.#NUM_LESSONS) {
            this.#ratings.push(num);
        }
    }

    summary() {
        if (this.#ratings.length) {
            this.#average.score =
                this.#ratings.reduce((a, v) => a + v) / this.#ratings.length;
            this.#average.visit =
                this.#attendance.reduce((a, v) => a + v) /
                this.#attendance.length;
        }
    }

    analysis() {
        const goodScore = 90;
        const goodVisit = 0.9;
        if (
            this.#average.score >= goodScore &&
            this.#average.visit >= goodVisit
        ) {
            console.log('Well done!');
        } else if (
            (this.#average.score < goodScore &&
                this.#average.visit >= goodVisit) ||
            (this.#average.visit < goodVisit &&
                this.#average.score >= goodScore)
        ) {
            console.log('Good, but you can do better');
        } else if (
            this.#average.score < goodScore &&
            this.#average.visit < goodVisit
        ) {
            console.log('Radish!');
        }
    }
}

class Simulation {
    static process(student, limit = 25) {
        for (let i = 0; i < limit; ++i) {
            const mark = student.visitMark(Math.random() > 0.1 ? true : false);
            if (mark) student.reward(Math.floor(Math.random() * 101));
        }
    }
}

{
    const bob = new Student({
        firstName: 'Bob',
        lastName: 'lazar',
        yearBirth: 2004,
    });

    Simulation.process(bob);
    bob.summary();
    bob.analysis();
}

{
    const robert = new Student({
        firstName: 'Robert',
        lastName: 'Fisher',
        yearBirth: 2005,
    });

    Simulation.process(robert);
    robert.summary();
    robert.analysis();
}

{
    const kurt = new Student({
        firstName: 'Kurt',
        lastName: 'Owl',
        yearBirth: 2004,
    });

    Simulation.process(kurt);
    kurt.summary();
    kurt.analysis();
}
