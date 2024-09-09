"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman });
    isSuperman = true && true;
    console.log({ isSuperman });
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
