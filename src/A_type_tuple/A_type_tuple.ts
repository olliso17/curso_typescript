//um array com tipo específico e tamanho

const dadosCliente1: readonly [number, string, boolean?] = [1, 'Luiz', true]; //imutável por causa do readonly
const dadosCliente2: [number, string, ...string[]] = [1, 'Luiz', 'miranda', 'mariana'];

dadosCliente2[0] = 100; //muda o valor mas tem que ser do mesmo tipo