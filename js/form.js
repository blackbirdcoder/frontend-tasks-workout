'use strict';

export const Form = (function () {
    function create(btn, title = null, desc = null, cost = null) {
        const template = ` <form method="post">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input
                            type="text"
                            class="form-control"
                            id="title"
                            placeholder="Title"
                            value="${title !== null ? title : ''}"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="desc" class="form-label">Desc</label>
                        <input
                            type="text"
                            class="form-control"
                            id="desc"
                            placeholder="Desc"
                            value="${desc !== null ? desc : ''}"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="cost" class="form-label">Cost</label>
                        <input
                            type="number"
                            class="form-control"
                            id="cost"
                            placeholder="0"
                            min="1"
                            max="1000000"
                            value="${cost !== null ? cost : 0}"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        ${btn}
                    </button>
                </form>`;
        return template;
    }

    function handler(selector, storage, id = null) {
        const form = document.querySelector(selector);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (e.submitter.innerText.trim().toUpperCase() === 'CREATE') {
                const data = [];
                for (const item of e.target.children) {
                    if (item.nodeName !== 'DIV') continue;
                    for (const itemDeep of item.children) {
                        if (itemDeep.nodeName !== 'INPUT') continue;
                        data.push(itemDeep.value);
                    }
                }
                storage.write(data);
                data.length = 0;
            }
            console.log(e.target);
            if (e.submitter.innerText.trim().toUpperCase() === 'APPLY') {
                const data = [];
                for (const item of e.target.children) {
                    if (item.nodeName !== 'DIV') continue;
                    for (const itemDeep of item.children) {
                        if (itemDeep.nodeName !== 'INPUT') continue;
                        data.push(itemDeep.value);
                    }
                }
                storage.update(id, data);
                data.length = 0;
                window.location.href = 'index.html';
            }
        });
    }

    return {
        create,
        handler,
    };
})();
