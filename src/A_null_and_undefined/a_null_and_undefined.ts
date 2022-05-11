//undefined
let x;
//console.log(x*2); x não é definido


//null
//any pode ser qualquer coisa
export function squareOf(x: any){
    if(typeof x == 'number') return x * x;
    return null;
}
//jeito correto

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

if(squareOfNumber === null){
    console.log('Conta inválida');
}else{
    console.log(squareOfNumber * 100);
}