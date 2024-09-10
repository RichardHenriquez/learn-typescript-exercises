"use strict";
(() => {
    ;
    ;
    const client = {
        name: 'Richard',
        age: 30,
        address: {
            id: 10,
            zip: 'KYZ SUD',
            city: 'Barranquilla',
        },
        getFullAddress(id) {
            return `${this.address.city} ${id}`;
        },
    };
    const client2 = {
        name: 'Carolay',
        age: 30,
        address: {
            id: 20,
            zip: 'KYZ SHD',
            city: 'Barranquilla',
        },
        getFullAddress(id) {
            return id;
        },
    };
    console.log(client.getFullAddress('Atlantico'));
})();
