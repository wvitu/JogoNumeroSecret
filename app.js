alert('Boas vindas ao jogo do número secreto!')
let numeroSecreto = 5
console.log(numeroSecreto)
let chute  
let tentativas = 1

// enquanto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10')
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`)
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // Para atribuir mais 1 é só adicionar ++
        // ex tentativas = tentativas + 1
        tentativas++
    }
}