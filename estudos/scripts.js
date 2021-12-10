function imprimirNoConsole() {
    console.log("Olá mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

const numeroAleatorio = function () {
    return Math.random();
}

numeroAleatorio();
numeroAleatorio();

console.log("este tá na var " + numeroAleatorio());

function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}
console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

podeDirigir(19,true);
podeDirigir(25,true);
podeDirigir(44,0);
podeDirigir(19,1);
podeDirigir(17,false);

let y = 10;

function imprimir(){
    let y = 150;
    console.log(y);
}
imprimir();
console.log(y);

let x = 10;
if (x > 5) {
    let x = 20;
    x++;
    console.log(x);
}

console.log(x);