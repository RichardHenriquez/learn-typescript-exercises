"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '____'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
