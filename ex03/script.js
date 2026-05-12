const numeroSecreto = 7;
let tentativa;
let contador = 0;

do {
    tentativa = parseInt(prompt("Tente adivinhar o número (1 a 10): "));
    contador++;

    if (tentativa !== numeroSecreto) {
        console.log("Número incorreto. Tente novamente!");
    }

} while (tentativa !== numeroSecreto);

console.log(`Parabéns! Você acertou em ${contador} tentativa(s).`);