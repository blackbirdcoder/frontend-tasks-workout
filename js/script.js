'use strict';

// task custom apply

const customApply = function (obj, fn, ...args) {
    obj.tempFunction = fn;
    obj.tempFunction(...args);
    delete obj.tempFunction;
};

const getValue = function () {
    console.log(this.val);
    return this.val;
};

const staff = {
    val: 100,
};

customApply(staff, getValue, 1, 2);

// task custom bind

const customBind = function (obj, fn, ...arg) {
    const env = obj;
    return function () {
        env.f = fn;
        env.f(...arg);
        delete env.f;
    };
};

const b = customBind(staff, getValue, 1, 2);
console.log(b);
b();
