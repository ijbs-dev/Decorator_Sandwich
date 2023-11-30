// Decorator para frango assado
export class FrangoAssado implements Sanduiche {
    private sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ", Frango Assado";
    }
  
    getCusto(): number {
      //return this.sanduiche.getCusto() + 4.5;
      return 4.5;
    }
  }