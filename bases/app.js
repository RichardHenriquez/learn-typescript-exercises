"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    },
};
const guason = {
    reir: true,
    come: true,
    llor: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
;
let ciudadGotica;
ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
        console.log('Imprimiendo biografia');
    }
    ;
    constructor(nombre, edad, sexo, estadoCivil, miFuncion) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.miFuncion = miFuncion();
    }
    ;
    imprimirMiFuncion() {
        console.log(this.miFuncion);
    }
}
;
const richard = new Persona('Richard', 30, 'Masculino', 'Casado', () => {
    console.log('Callback');
    return 'Hola callback';
});
richard.imprimirMiFuncion();
