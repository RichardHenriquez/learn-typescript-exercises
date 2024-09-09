( () => {

    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {

        // if (upper) {
        //     return `${firstName} ${lastName || '____'}`.toUpperCase();
        // } else {
        //     return `${firstName} ${lastName || '____'}`;
        // }

        return (upper) ? `${firstName} ${lastName || '____'}`.toUpperCase()
                       : `${firstName} ${lastName || '____'}`

    };

    const name = fullName( 'Tony', 'Stark', true );

    console.log( {name} );

})();