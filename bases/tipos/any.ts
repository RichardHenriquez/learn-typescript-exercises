(() => {

    let avenger: any = 123;
    let exist;
    let power;

    avenger = 'Dr Strange';
    // console.log( avenger.charAt(0) );
    console.log( (avenger as string).charAt(0) );

    avenger = 150.235245;

    console.log( avenger.toFixed(2) );

    console.log( exist );
    console.log( power );


})();