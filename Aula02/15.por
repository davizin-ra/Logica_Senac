programa {
  funcao inicio()
  {
    inteiro i, aprovados
    real media

    aprovados = 0

    para (i = 1; i <= 5; i++)
    {
      escreva("Digite a média: ")
      leia(media)

      se (media >= 6)
      {
        aprovados = aprovados + 1
      }
    }

    escreva("Alunos aprovados: ", aprovados)
  }
}
