( () => {

    type Hero = {

        name: string;
        age? : number;
        powers: number[];
        getName?: () => string;

    }

    let myCustonVariable: ( string | number | Hero ) = 'Richard';

    console.log( typeof( myCustonVariable ) );

    myCustonVariable = 20;
    console.log( typeof myCustonVariable );

    myCustonVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    }




})();