"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrangoAssado = void 0;
// Decorator para frango assado
class FrangoAssado {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }
    getDescricao() {
        return this.sanduiche.getDescricao() + ", Frango Assado";
    }
    getCusto() {
        //return this.sanduiche.getCusto() + 4.5;
        return 4.5;
    }
}
exports.FrangoAssado = FrangoAssado;
