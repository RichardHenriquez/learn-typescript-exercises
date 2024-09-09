(() =>{

    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    console.log({ isBatman });

    isSuperman = true && true;

    console.log({ isSuperman });

    isSuperman = ( isBatman ) ? true : false;

    console.log( isSuperman );

})(); 