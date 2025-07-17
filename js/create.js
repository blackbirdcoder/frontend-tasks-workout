'use strict';

import { Form } from './form.js';
import { Storage } from './storage.js';

(function createProduct() {
    const formWrap = document.querySelector('.w-50.p-3');
    formWrap.innerHTML = Form.create('Create');
    Form.handler('form', Storage);
})();
