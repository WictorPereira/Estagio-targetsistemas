/* 
 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça 
 { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

let INDICE = 12;
let SOMA = 0;
let k = 1;

while (k < INDICE) {
    k = k + 1;
    SOMA = SOMA + k;
}

console.log(SOMA); //O resultado será 77