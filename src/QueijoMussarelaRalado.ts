// Decorator para queijo mussarela ralado

export class QueijoMussarelaRalado implements Sanduiche {
    private sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }
  
    getCusto(): number {
      //return this.sanduiche.getCusto() + 2.0;
      return 2.0;
    }
  }
  