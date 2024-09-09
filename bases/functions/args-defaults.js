"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return (upper) ? `${firstName} ${lastName || '____'}`.toUpperCase()
            : `${firstName} ${lastName || '____'}`;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
