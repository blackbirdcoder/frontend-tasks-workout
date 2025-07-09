'use strict';

function createUserInterface() {
    const form = document.querySelector('[data-form]');
    const contactList = document.querySelector('[data-contact]');
    const cssClass = {
        item: 'list-group-item d-flex align-items-center justify-content-between',
        wrap: 'text-black',
        danger: 'btn btn-danger btn-sm',
    };

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { target } = e;

        // Get data from the form
        const data = inputs.reduce((acc, { name, value }) => {
            acc[name] = value;
            return acc;
        }, {});

        target.reset();
        const id = dataBase.setData(data)?.id;
        submitBtn.setAttribute('disabled', 'disabled');
        _makeShowContact(data, id);
    });

    const disabledHandler = (e) => {
        let isInputFilled = true;
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if (isInputFilled) {
            submitBtn.removeAttribute('disabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    };
    form.addEventListener('input', disabledHandler);

    function _makeShowContact(data, id) {
        const { firstName, lastName } = data;
        const userId = id;
        const li = document.createElement('li');

        li.className = cssClass.item;
        li.innerHTML = `<div class=${cssClass.wrap} data-user=${userId}>
        <b>${firstName} ${lastName}</b></div>
        <button class="${cssClass.danger}">Delete</button>`;
        contactList.append(li);
    }

    contactList.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target.attributes[0]?.value === cssClass.danger) {
            dataBase.deleteData({
                id: +e.target.offsetParent.childNodes[0].dataset.user,
            });
            e.target.offsetParent.remove();
        }
    });
}

createUserInterface();
