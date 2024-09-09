(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName:  string
        ){}
    }

    class Xmen extends Mutante {

        salvarMundo(): string {
            return 'Mundo a salvo'
        }

    };
    class Villian extends Mutante {

        consquistarMundo(): string {
            return 'Mundo conquistado';
        }

    };

    const wolverine = new Xmen( 'Wolverine', 'Logan' );
    const magneto = new Villian( 'Magneto', 'Magnus');

    // console.log( wolverine.salvarMundo() );
    // console.log( magneto.consquistarMundo() );

    const printName = ( character: Mutante ) => {
        console.log( character.realName )
    };

    printName( wolverine );
    

})();