"use strict";
(() => {
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Amorsuit'
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
    ;
})();
