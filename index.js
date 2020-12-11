alert("Digite um numerador e um denominador a seguir...");

let numerador= prompt("Digite o numerador");

let denominador= prompt("Digite o denominador");

let resultado= Number(numerador) / Number(denominador);

if(denominador==0)
alert(`${numerador} não é possivel dividir por ${denominador}`);

else if(denominador>0)
alert(`${numerador} dividido por ${denominador} é= ${resultado}`);