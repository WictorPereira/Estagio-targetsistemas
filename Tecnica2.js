/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência 
ou pode ser previamente definida no código;

*/


function verificarLetraA(texto) {

    const ocorrencias = texto.match(/a/gi); 
    
    if (ocorrencias) {
        console.log(`Na Palavra: ${stringEntrada}. A letra 'a' aparece ${ocorrencias.length} vezes.`);
    } else {
        console.log(`Na Palavra: ${stringEntrada}. A letra 'a' não aparece na string.`);
    }
}

const stringEntrada = "joao Wictor";

verificarLetraA(stringEntrada);
