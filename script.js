var numeroCerto = parseInt(Math.random() * 1001);
var tentativa = 0;
var limite = 3;

while(chute != numeroCerto && tentativa < limiteTentativas){
    var chute = prompt('Digite um número entre 0 e 1000');
    tentativas++;

    if (chute == numeroCerto){
    alert('Acertou Miseravi!');
    } else if (chute > numeroCerto){
        alert('Errou... Tá frio!')
    }
    else if (chute < numeroCerto){
        alert('Errou...Tá quente')
    }
}

if (chute != numeroCerto) {
  alert('Suas tentativas acabaram. Passe para o proximo, um dia você irá saber');
}