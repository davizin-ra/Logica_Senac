programa {
  funcao inicio()
  {
    real num1, num2, num3, maior

    escreva("Digite o primeiro número: ")
    leia(num1)

    escreva("Digite o segundo número: ")
    leia(num2)

    escreva("Digite o terceiro número: ")
    leia(num3)

    se (num1 > num2)
    {
      se (num1 > num3)
      {
        maior = num1
      }
      senao
      {
        maior = num3
      }
    }
    senao
    {
      se (num2 > num3)
      {
        maior = num2
      }
      senao
      {
        maior = num3
      }
    }

    escreva("O maior número é: ", maior)
  }
}
