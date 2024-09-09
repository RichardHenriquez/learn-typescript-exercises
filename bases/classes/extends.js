"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log(`Constructor Avenger llamado!`);
        }
        ;
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
        ;
    }
    ;
    class Xmen extends Avenger {
        constructor(name, realName, isMutand) {
            super(name, realName);
            this.isMutand = isMutand;
            console.log('Constructor Xmen llamado!');
        }
        ;
        get fullName() {
            return `${this.name} - ${this.fullName}`;
        }
        ;
        set Setfullname(name) {
            if (name.length < 3) {
                throw new Error('El nombre de ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.Setfullname = 'Ri';
    console.log(wolverine);
})();
