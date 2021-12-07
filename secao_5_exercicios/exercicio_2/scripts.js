//verificacao de idade para entrar na balada

let idade = prompt("Qual sua idade?");

if (idade >= 18) {
    console.log("Entrada autorizada. Voce tem " + idade + " anos");
} else {
    console.log("Você tem " + idade + " anos, não poderá entrar!");
}