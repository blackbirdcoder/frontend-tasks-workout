'use strict';

function Student(firstName, lastName, yearBirth) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._yearBirth = yearBirth;
    this._attendance = [];
    this._ratings = [];
    this.__visitCounter = 0;
}

Student.prototype.notification = {
    good: 'Well done!',
    middle: 'Good, but you can do better',
    bad: 'Radish!',
};

Student.prototype.visitCounterOption = {
    _MAX: 25,
};

Student.prototype.rating = {
    visit: 0,
    score: 0,
};

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this._yearBirth;
};

Student.prototype.getGrade = function () {
    this.rating.score =
        this._ratings.reduce((a, v) => a + v) / this._ratings.length;
    this.rating.visit =
        this._attendance.reduce((a, v) => a + v) / this._attendance.length;
    return [this.rating.score, this.rating.visit];
};

Student.prototype._registrar = function (value) {
    if (this.__visitCounter < this.visitCounterOption._MAX) {
        this._attendance.push(value);
        value
            ? this._ratings.push(Math.floor(Math.random() * 101))
            : this._ratings.push(0);
        ++this.__visitCounter;
    } else {
        throw 'Error visit the limit has been reached';
    }
};

Student.prototype.getFullName = function () {
    return [this._firstName, this._lastName];
};
Student.prototype.present = function () {
    this._registrar(true);
};

Student.prototype.absent = function () {
    this._registrar(false);
};

Student.prototype.summary = function () {
    const goodScore = 90;
    const goodVisit = 0.9;

    if (this.rating.score >= goodScore && this.rating.visit >= goodVisit) {
        return this.notification.good;
    } else if (
        (this.rating.score < goodScore && this.rating.visit >= goodVisit) ||
        (this.rating.visit < goodVisit && this.rating.score >= goodScore)
    ) {
        return this.notification.middle;
    } else if (this.rating.score < goodScore && this.rating.visit < goodVisit) {
        return this.notification.bad;
    }
};

{
    const bob = new Student('Bob', 'Lazar', 2005);
    const [firstName, lastName] = bob.getFullName();
    console.log('Student Name: ', firstName, lastName);
    console.log('Student age: ', bob.getAge());

    for (let i = 0; i < 25; ++i) {
        i % 2 == 0 ? bob.present() : bob.absent();
    }

    const grade = bob.getGrade()[0];
    console.log('Grade: ', grade);
    console.log('Summary: ', bob.summary());
}

console.log('='.repeat(40));

{
    const robert = new Student('Robert', 'Tomato', 2003);
    const [firstName, lastName] = robert.getFullName();
    console.log('Student Name: ', firstName, lastName);
    console.log('Student age: ', robert.getAge());

    for (let i = 0; i < 25; ++i) {
        i % 2 == 0 ? robert.present() : robert.absent();
    }

    const grade = robert.getGrade()[0];
    console.log('Grade: ', grade);
    console.log('Summary: ', robert.summary());
}
