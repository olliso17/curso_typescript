//never nunca vai retornar nada, erro ou laço infinito

function criaErro():never{
    throw new Error('erro');
}
 
criaErro();
