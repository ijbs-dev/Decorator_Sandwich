// Decorator para pepperoni 
export class Pepperoni implements Sanduiche {
    private sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ", Pepperoni";
    }
  
    getCusto(): number {
      //return this.sanduiche.getCusto() + 0.99;
      return 0.99;
    }
  }