import express from 'express';

const app = express();

app.get('/api/v1', (req, res) => {
  res.send('Hello World!');
});

// GET http://localhost:3000/api/v1
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

/**
 * 
 * Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. 
 * O projeto deve seguir os seguintes critérios:

- deve imprimir no console: Sanduíche de Carne, Bacon, Queijo MussarelaRalado custa $7,49. 
- o sanduíche de frango assado custa $4,50.
- o ingrediente adicional pepperoni custa $0,99. 
- o ingrediente adicional queijo mussarela ralado custa $2,00.

crie as classes necessárias: FrangoAssado, Pepperoni e Queijo MussarelaRalado.

 */

//importando SanduicheBase
import {SanduicheBase} from './SanduicheBase';
import { FrangoAssado } from './FrangoAssado';
import { Pepperoni } from './Pepperoni';
import { QueijoMussarelaRalado } from './QueijoMussarelaRalado';

// Criando instâncias dos decoradores
const sanduicheBase: Sanduiche = new SanduicheBase();
const frangoAssado: FrangoAssado = new FrangoAssado(sanduicheBase);
const pepperoni: Pepperoni = new Pepperoni(sanduicheBase);
const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado(sanduicheBase)));

// Imprimindo = Descrição: Sanduíche de Carne, Queijo Mussarela Ralado, Pepperoni, Frango Assado custa $14.98.
console.log(`${sanduicheBase.getDescricao()} custa $${sanduicheBase.getCusto().toFixed(2)}.`);

// Imprimindo: o sanduíche de frango assado custa $4,50.
console.log(`o sanduíche de frango assado custa $${frangoAssado.getCusto().toFixed(2)}.`);

// Imprimindo: o ingrediente adicional pepperoni custa $0,99. 
console.log(`o ingrediente adicional pepperoni custa $${pepperoni.getCusto().toFixed(2)}.`);

// Imprimindo: o ingrediente adicional queijo mussarela ralado custa $2,00.
console.log(`o ingrediente adicional queijo mussarela ralado custa $${sanduicheDecorado.getCusto().toFixed(2)}.`);