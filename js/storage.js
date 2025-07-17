'use strict';

export const Storage = (function (storageName) {
    const mainKey = storageName;
    const counter = {
        tokenName: 'idCounter',
    };

    function init() {
        if (!localStorage.getItem(mainKey)) {
            localStorage.setItem(mainKey, JSON.stringify([]));
            localStorage.setItem(counter.tokenName, 0);
        }
    }

    function write(data) {
        const currentData = JSON.parse(localStorage.getItem(mainKey));
        let id = localStorage.getItem(counter.tokenName);
        currentData.push({
            id: ++id,
            title: data[0],
            desc: data[1],
            cost: data[2],
        });
        localStorage.setItem(mainKey, JSON.stringify(currentData));
        localStorage.setItem(counter.tokenName, id);
    }

    function read() {
        return JSON.parse(localStorage.getItem(mainKey));
    }

    function getByID(id) {
        const data = JSON.parse(localStorage.getItem(mainKey));
        for (const item of data) {
            if (item.id === id) return item;
            continue;
        }
        return null;
    }

    function update(id, data) {
        const currentData = JSON.parse(localStorage.getItem(mainKey));
        for (const item of currentData) {
            if (item.id === id) {
                item.title = data[0];
                item.desc = data[1];
                item.cost = data[2];
                break;
            }
        }
        localStorage.setItem(mainKey, JSON.stringify(currentData));
    }

    function remove(id) {
        const currentData = JSON.parse(localStorage.getItem(mainKey));
        for (let i = 0; i < currentData.length; i++) {
            if (currentData[i].id === id) {
                console.log(currentData[i]);
                currentData.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(mainKey, JSON.stringify(currentData));
    }

    return { init, write, read, getByID, update, remove };
})('store');
