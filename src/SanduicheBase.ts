// Implementação da classe base de sanduíche
export class SanduicheBase implements Sanduiche {
    getDescricao(): string {
      return "Sanduíche de Carne, Bacon, Queijo MussarelaRalado";
    }
  
    getCusto(): number {
      return 7.49;
    }
  }
  

