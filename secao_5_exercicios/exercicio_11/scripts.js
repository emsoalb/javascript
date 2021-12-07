//cnh

let idade = prompt("Qual sua idade?");
let temCnh = prompt("Você tem CNH? s ou n");

if (idade < 18) {
    console.log("Você não pode dirigir pois é menor de idade");
}
else if(temCnh == "n") {
    console.log("Você não pode dirigir pois não tem CNH");
}
else {
    console.log("Você pode dirigir.");
}