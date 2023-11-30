"use strict";
// Decorator para queijo mussarela ralado
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueijoMussarelaRalado = void 0;
class QueijoMussarelaRalado {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }
    getDescricao() {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }
    getCusto() {
        //return this.sanduiche.getCusto() + 2.0;
        return 2.0;
    }
}
exports.QueijoMussarelaRalado = QueijoMussarelaRalado;
