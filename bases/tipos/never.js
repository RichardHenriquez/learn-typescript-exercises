"use strict";
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Auxlio');
})();
