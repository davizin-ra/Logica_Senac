programa {
  funcao inicio()
  {
    real valor

    escreva("Digite o valor da compra: ")
    leia(valor)

    se (valor > 200)
    {
      valor = valor - (valor * 0.15)
    }
    senao
    {
      valor = valor - (valor * 0.05)
    }

    escreva("Valor final: R$ ", valor)
  }
}
