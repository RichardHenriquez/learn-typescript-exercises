"use strict";
(() => {
    class Persona {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        set changeName(newName) {
            this.name = newName;
        }
        ;
        set changeAge(newAge) {
            this.age = newAge;
        }
        ;
        get gettingName() {
            return this.name;
        }
        get gettingAge() {
            return this.age;
        }
        saludar() {
            if (!this.name && !this.age) {
                Persona.saludo = 'Sin parametros en nombre y edad';
            }
            else {
                Persona.saludo = `Hola, me llamo ${this.name} y tengo ${this.age} años`;
            }
            ;
            return Persona.saludo;
        }
        ;
    }
    class Empleado extends Persona {
        constructor(name, age, salario) {
            super(name, age);
            this.salario = salario;
        }
        ;
        saludar() {
            if (!this.name && !this.age) {
                Persona.saludo = 'Sin parametros en nombre y edad';
            }
            else {
                Persona.saludo = `Hola, me llamo ${this.name} y tengo ${this.age} años y mi salario es de ${this.salario}$ dólares al mes`;
            }
            return Persona.saludo;
        }
        ;
    }
    ;
    const richard = new Persona('Richard', 30);
    console.log(richard.saludar());
    const carolay = new Empleado('Carolay', 29, 3000);
    console.log(carolay.saludar());
    carolay.changeAge = 30;
    console.log(carolay.saludar());
})();
