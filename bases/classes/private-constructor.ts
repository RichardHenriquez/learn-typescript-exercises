(() => {

    class Apocalipsis {

        static intance: Apocalipsis; 

        private constructor( public name: string) {

        };

        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis el unico');
            };

            return Apocalipsis.intance;
        };

    };

    const apocalipsis1 = Apocalipsis.callApocalipsis();


    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el unico');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el unico');
    console.log( apocalipsis );



})();