"use strict";
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        ;
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis el unico');
            }
            ;
            return Apocalipsis.intance;
        }
        ;
    }
    ;
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
