( () => {

    class Avenger {

        name;
        poder;

        constructor ( name = 'No name', power = 0 ) {
            this.name = name;
            this.poder = power;
        };

    }

    class FlyingAvenger extends Avenger {
        
        flyng;

        constructor (name, power) {
            super(name, power)
            this.flyng = true
        }

    }


    const hulk = new Avenger('Hukl', 9001);
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log( hulk );
    console.log( falcon );

})();