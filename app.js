alert('Boas vindas ao jogo do número secreto!')
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)
let chute  
let tentativas = 1

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // ex tentativas = tentativas + 1
        tentativas++ 
    }
} 

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você descobriu o número secreto   ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`) 

//if (tentativas > 1) {
  //  alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
//} else { 
 //   alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
// }
