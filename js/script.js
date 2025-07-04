'use strict';

(function selectionHandler() {
    const gds = document.querySelectorAll('.card');
    const mainFilter = document.querySelector('#filter');
    const TURN_ALL = 'all';

    function _handler(e) {
        const value = e.target.value;
        if (value !== TURN_ALL) {
            for (const item of gds) {
                value !== item.dataset.category
                    ? (item.hidden = true)
                    : (item.hidden = false);
            }
        } else {
            for (const item of gds) item.hidden = false;
        }
    }

    mainFilter.addEventListener('change', _handler);
})();
