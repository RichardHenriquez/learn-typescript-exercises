(() => {

    const addNumbers = ( a: number, b: number ): number => a + b;
    const greet = ( name: string ): string => `Hola ${ name }`;
    const saveTheWorld = (): string => `El mundo esta salvado!`
    
    let myFunction: (z: number, y: number) => number
    // let myFunction: Function;

    // myFunction = 10;
    // console.log(myFunction);

    myFunction = addNumbers;
    console.log( myFunction( 1, 2 ) );

    // myFunction = greet
    // console.log( myFunction( 'Richard' ) );

    // myFunction = saveTheWorld
    // console.log( myFunction() );

    
})();