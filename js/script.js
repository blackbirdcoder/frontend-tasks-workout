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
