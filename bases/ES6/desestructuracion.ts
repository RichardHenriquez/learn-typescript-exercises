((): void => {

    type Avengers = {

        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number,

    }

    const avengers = {

        nick: 'Samuel L. jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123,

    };

    // const {poder, vision} = avengers
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( { ironman, ...resto }: Avengers ): void => {

        console.log( ironman, resto.nick ); // o solo resto para traer el resto de datos del objeto
        
    };

    console.log( printAvenger( avengers ) );

    const avengerArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];

    const [capitan, ironman, ] = avengerArr;
    console.log( {ironman ,  capitan} );
   

})();