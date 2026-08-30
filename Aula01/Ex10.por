programa
{
    funcao inicio()
    {
      real numero1, numero2, resultado
      caracter operacao

      escreva("Digite o primeiro numero: ")
      leia(numero1)

      escreva("Digite o segundo numero: ")
      leia(numero2)

      escreva("Digite a operacao \n+, -, * ou / :\n")
      leia(operacao)

      se (operacao == '+')
      {
        resultado = numero1 + numero2
        escreva("Resultado: ", resultado)
      }
      senao se (operacao == '-')
      {
        resultado = numero1 - numero2
        escreva("Resultado: ", resultado)
      }
      senao se (operacao == '*')
      {
        resultado = numero1 * numero2
        escreva("Resultado: ", resultado)
      }
      senao se (operacao == '/')
      {
          resultado = numero1 / numero2
          escreva("Resultado: ", resultado)
      }
      senao
      {
        escreva("Operacao invalida!")
      }
    }
}