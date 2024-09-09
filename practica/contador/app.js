"use strict";
(() => {
    let contador = 0;
    const button = document.querySelector('#button');
    const button2 = document.querySelector('#button2');
    const miDiv = document.querySelector('#miDiv');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        if (miDiv) {
            miDiv.innerHTML = `<div
            <strong>${contador += 1}</strong>
            </div>
            `;
        }
    });
    button2 === null || button2 === void 0 ? void 0 : button2.addEventListener('click', () => {
        if (miDiv) {
            miDiv.innerHTML = `<div
            <strong>${contador = 0}</strong>
            </div>
            `;
        }
        ;
    });
})();
