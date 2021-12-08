let numero = prompt("Qual o numero?");
let divisoes = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        divisoes++;
    }
}

if (divisoes == 2) {
    console.log("O numero é primo");
} else {
    console.log("O numero NÃO é primo!");
}