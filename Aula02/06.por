programa {
  funcao inicio() {
    const real desconto = 0.1

    real preco, resultado

    escreva("Digite o preço: ")
    leia(preco)

    resultado = preco - (preco * desconto)

    escreva("Preço com desconto: ", resultado)
  }
}
