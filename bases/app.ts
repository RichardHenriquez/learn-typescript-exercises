// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean,
  velocidadMaxima: number,
  acelerar: () => void
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  },
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean,
  comer?: boolean,
  llorar?:boolean
}

const guason = {
  reir:true,
  come:true,
  llor:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
  (ciudadanos: string[]) : number
};

let ciudadGotica: CiudadGotica

ciudadGotica = ( ciudadanos:string[] ): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Biografia{
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}

class Persona implements Biografia {

  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  public imprimirBio(): void {
    console.log('Imprimiendo biografia')
  };

  public miFuncion: Function

  constructor( nombre: string, edad: number, sexo: string, estadoCivil: string, miFuncion: Function ) {

    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
    this.miFuncion = miFuncion()

  };


  imprimirMiFuncion(): void {
    console.log( this.miFuncion );
  }

};

const richard = new Persona('Richard', 30, 'Masculino', 'Casado', () => {
  console.log('Callback')
  return 'Hola callback'
});

richard.imprimirMiFuncion();



