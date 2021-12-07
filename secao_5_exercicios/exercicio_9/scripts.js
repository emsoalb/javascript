//math.pow - fazer potenciação

let base = 1;

while (base != 0) {
    base = prompt("Qual a base da potenciação?");
    let expoente = prompt("Qual o expoente?");
    console.log("O valor de " + base + " elevado a " + expoente + " é igual a " + Math.pow(base, expoente));
}