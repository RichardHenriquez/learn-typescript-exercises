(() => {

    // const numbers: (string | number | boolean)[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log({ numbers });

    const villian: string[] = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

    villian.forEach( v => console.log( v.toUpperCase() ) );

})();