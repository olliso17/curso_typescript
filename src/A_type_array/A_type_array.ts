// Array<T>  - T[]
export function multi(...args: Array<number>): number {
  return args.reduce((ac, valor): number => ac * valor, 1);
}

export function sum(...args: string[]): string {
  return args.reduce((ac, valor): string => ac + valor);
}

export function retornaArray(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const multiplicar = multi(1, 2, 3);

const nomeSobrenome = sum('Patricia', 'Silva');

console.log(multiplicar, nomeSobrenome);
