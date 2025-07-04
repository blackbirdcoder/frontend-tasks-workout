'use strict';

(function themeChangeHandler() {
    const page = document.getElementById('page');
    const btnChange = document.getElementById('toggle-theme');
    const cssClass = 'theme-dark';

    const state = {
        isChange: false,
    };

    function _handler() {
        !state.isChange
            ? page.classList.add(cssClass)
            : page.classList.remove(cssClass);

        state.isChange = !state.isChange;
    }

    btnChange.addEventListener('click', _handler);
})();
