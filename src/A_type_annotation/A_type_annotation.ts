/* eslint-disable */
//tipos de variáveis;
let nome: string = 'Luiz'; //tipo string
let idade: number = 1; //tipo numerico
let adulto: boolean = true; //tipo true ou false
let simbolo: symbol = Symbol('qualque_symbol'); //symbol
//let big : bigint = 10n; //bigint

//array  Arra<> dentro tem que passar o tipo

let arrayDeNumeros: Array<number> = [1, 2, 2.2];
let arrayNumberMais: number[];[1, 2, 3];
let arrayDeSrings: Array<string> = ['laura', 'mariana'];
let arrayDeSringAr: string[] = ['luma'];

//objetos

let pessoa: {
    name: string,
    idade: number,
    adulto?: boolean, //o sinal de ? diz que adulto é opcional
} = {
    name: 'Patricia',
    idade: 34,
    adulto: true
};
//console.log(pessoa.name);

//funções
function soma(x: number, y: number): number {
    return x + y;
}
const result: number = soma(3, 4);
const soma2: (x: number, y: number) => number = (x, y) => x + y;

//OBS so coloca tipo dessa maneira acima caso ele não coloque automaticamente e retorn "any", representa uma falta de tipo.

//tipo void não retorna nada

function notReturn(): void { }

//função tipo objeto
const objetoA:{
    readonly chaveA:string; //não podemos alterar essa chave
    chaveB:string;
    chaveC?:string; //pode colocar ou não
    [key:string]:unknown; //define a chave depois
}
= {
    chaveA: 'valor a',
    chaveB: 'valorB'
}

objetoA.chaveB = 'will';
objetoA.chaveD = 'patricia';
objetoA.chaveC = 'emerson';
objetoA.chaveE = 'guilherme';

//console.log(objetoA.chaveE);
