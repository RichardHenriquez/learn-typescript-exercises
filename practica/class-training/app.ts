(() => {

    class Persona {

        protected static saludo: string
    
        constructor(
            protected name?: string,
            protected age?: number,
        ){};

        public set changeName(newName: string) {
            this.name = newName;
        };

        public set changeAge(newAge: number) {
            this.age = newAge;
        };

        public get gettingName(){
            return this.name;
        }

        public get gettingAge() {
            return this.age
        }

        saludar(): string {
            
            if ( !this.name && !this.age ){
                Persona.saludo = 'Sin parametros en nombre y edad';
            } else {
                Persona.saludo =  `Hola, me llamo ${this.name} y tengo ${this.age} años`;
            };

            return Persona.saludo;

        };

    }

    class Empleado extends Persona {
        constructor(
            name: string,
            age: number,
            public salario: number
        )
        {
            super( name, age );
        };

        saludar(): string {

            if ( !this.name && !this.age ){
                Persona.saludo = 'Sin parametros en nombre y edad';
            } else {
                Persona.saludo =  `Hola, me llamo ${this.name} y tengo ${this.age} años y mi salario es de ${this.salario}$ dólares al mes`
            }

            return Persona.saludo;
        };

        

    };

    const richard = new Persona('Richard', 30);
    console.log( richard.saludar() );

    const carolay = new Empleado( 'Carolay', 29, 3000 );
    console.log( carolay.saludar() );

    carolay.changeAge = 30;

    console.log(carolay.saludar());

})();