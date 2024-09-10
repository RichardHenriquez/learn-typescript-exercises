"use strict";
(() => {
    class Mutant {
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
        constructor(name, age, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
    }
})();
