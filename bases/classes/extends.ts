(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log(`Constructor Avenger llamado!`);
        };

        protected getFullname(): string {
            return `${ this.name } ${ this.realName }`
        };

    };

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutand: boolean,
        ){
            super( name, realName )
            console.log('Constructor Xmen llamado!');
        };

        get fullName(): string {
            return `${this.name} - ${this.fullName}`
        };

        set Setfullname( name: string ) {
            
            if ( name.length < 3 ) {
                throw new Error( 'El nombre de ser mayor de 3 letras' );
            }

            this.name = name
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullname() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    wolverine.Setfullname = 'Ri';

    console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();

})();