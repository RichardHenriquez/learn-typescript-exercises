( () => {

    const fullName = ( firstName: string, lastName?: string ): string => {

        return `${firstName} ${lastName || '____'}`;
    };

    const name = fullName( 'Tony',  );

    console.log( {name} );

})();