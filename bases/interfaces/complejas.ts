(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress( id: string ): string
    };

    interface Address {
        id: number,
        zip: string,
        city: string,
    };

    const client: Client = {
        name: 'Richard',
        age: 30,
        address: {
            id: 10,
            zip: 'KYZ SUD',
            city: 'Barranquilla',
        },
        getFullAddress( id ) {
            return `${ this.address.city } ${ id }`;
        },
    };

    const client2: Client = {
        name: 'Carolay',
        age: 30,
        address: {
            id: 20,
            zip: 'KYZ SHD',
            city: 'Barranquilla',
        },
        getFullAddress( id ) {
            return id;
        },
    };

    console.log( client.getFullAddress('Atlantico') );


})();