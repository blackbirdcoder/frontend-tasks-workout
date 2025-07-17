import { Storage } from './storage.js';

(function main() {
    const table = document.querySelector('tbody');
    Storage.init();
    const dataset = Storage.read();
    for (let i = 0; i < dataset.length; i++) {
        const template = `<tr>
                            <th scope="row">${dataset[i].id}</th>
                            <td>${dataset[i].title}</td>
                            <td>${dataset[i].desc}</td>
                            <td>${dataset[i].cost}</td>
                            <td>
                                <button data-id=${dataset[i].id} class="btn btn-warning">
                                    Edit
                                </button>
                                <button data-id=${dataset[i].id} type="button" class="btn btn-danger">
                                    Del
                                </button>
                            </td>
                        </tr>`;
        table.insertAdjacentHTML('afterbegin', template);
    }
    table.addEventListener('click', (e) => {
        if (e.target.innerText === 'Edit') {
            const link = '/edit.html';
            const url = new URL(window.location.origin + link);
            url.searchParams.append('id', e.target.dataset.id);
            window.location.href = url;
        }
        
        if (e.target.innerText === 'Del') {
            console.dir(e.target.dataset.id);
            Storage.remove(Number(e.target.dataset.id));
            window.location.href = 'index.html';
        }
    });
})();
