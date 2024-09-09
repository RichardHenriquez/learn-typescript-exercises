"use strict";
(() => {
    let myCustonVariable = 'Richard';
    console.log(typeof (myCustonVariable));
    myCustonVariable = 20;
    console.log(typeof myCustonVariable);
    myCustonVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
})();
