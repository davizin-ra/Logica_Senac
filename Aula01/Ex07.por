programa
{
  funcao inicio()
  {
    inteiro numero, pares = 0, impares = 0

    para (inteiro i = 1; i <= 10; i++)
    {
      escreva("Digite um numero: ")
      leia(numero)

      se (numero % 2 == 0)
      {
        pares = pares + 1
      }
      senao
      {
        impares = impares + 1
      }
    }

    escreva("Quantidade de pares: ", pares, "\n")
    escreva("Quantidade de impares: ", impares)
  }
}