"use strict";
(() => {
    class FormularioGrupoA {
        constructor(name, age, cedula, estadoCivil) {
            this.name = name;
            this.age = age;
            this.cedula = cedula;
            this.estadoCivil = estadoCivil;
        }
        ;
        cambiarEstadoCivil(NuevoEstadoCivil) {
            this.estadoCivil = NuevoEstadoCivil;
        }
        ;
        getNuevaEdad(nuevaEdad) {
            this.age = nuevaEdad;
        }
        set cambiarNomre(newName) {
            if (FormularioGrupoA.usuarioActivo) {
                this.name = newName;
                console.log('Nombre cambiado');
            }
            else {
                console.log('Usuarios inactivos, imposible cambiar nombre');
            }
        }
    }
    FormularioGrupoA.usuarioActivo = true;
    ;
    const richard = new FormularioGrupoA('Richard Henriquez', 30, '1.045.721.066', 'Casado');
    const carolay = new FormularioGrupoA('Carolay Gutierrez', 29, '1.140.878.684', 'Casada');
    carolay.getNuevaEdad(30);
    // if(FormularioGrupoA.usuarioActivo) {
    //     console.log(richard);
    //     console.log(carolay);
    // }else {
    //     console.log('Ningun usuario activo por mostrar');
    // };
    richard.cambiarNomre = 'Richard David';
    console.log({ richard });
})();
