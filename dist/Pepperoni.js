"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pepperoni = void 0;
// Decorator para pepperoni 
class Pepperoni {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }
    getDescricao() {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }
    getCusto() {
        //return this.sanduiche.getCusto() + 0.99;
        return 0.99;
    }
}
exports.Pepperoni = Pepperoni;
