import { Form } from './form.js';
import { Storage } from './storage.js';

(function editProduct() {
    const formWrap = document.querySelector('.w-50.p-3');
    const param = window.location.search;
    const searchId = Number(param.replace(/[^\d]/g, ''));
    const item = Storage.getByID(searchId);
    formWrap.innerHTML = Form.create('Apply', item.title, item.desc, item.cost);
    Form.handler('form', Storage, searchId);
})();
