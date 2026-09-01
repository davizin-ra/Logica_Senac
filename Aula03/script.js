/* -- 1

    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))

    alert("Soma: " + (num1 + num2))
    alert("Subtração: " + (num1 - num2))
    alert("Multiplicação: " + (num1 * num2))
    alert("Divisão: " + (num1 / num2))

*/

/* -- 2

    const pi = 3.14

    let raio = Number(prompt("Digite o raio do círculo"))
    alert("Área: " + (pi * (raio ** 2)).toFixed(1))
    alert("Perímetro: " + (pi * 2 * raio).toFixed(1))

*/


/* -- 3

    let area = Number(prompt("Digite a altura do triangulo"))
    let base = Number(prompt("Digite a base do triangulo"))

    alert("Área: " + (area + base))

*/

/* -- 4

    let n1 = Number(prompt("Digite a nota 1:"))
    let n2 = Number(prompt("Digite a nota 2:"))
    let n3 = Number(prompt("Digite a nota 3:"))

    media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10

    alert(`Média: ${media}`)

*/

/* -- 5

    let p = Number(prompt("Digite o valor do produto: "))
    let q = Number(prompt("Digite a quantidade: "))

    let vf = p * q

    if(q > 10){
        vf = vf * 0.90
    }

    alert(`Valor a pagar \n R$:${vf.toFixed(2)}`)

*/

/* -- 6

    let num = Number(prompt("Digite um número"))

    if (num % 2 == 0) {
        alert(`${num} é par`)
    } else {
        alert(`${num} é impar`)
    }

*/

/* -- 7

    let sal = Number(prompt("Digite seu salário:"))
    alert(`Salário líquido: \n R$: ${(sal * 1.05).toFixed(2)}`)

*/


/* -- 8

    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))

    let num3 = num1
    num1 = num2
    num2 = num3

    alert(`Número 1: ${num1} \n Número 2: ${num2}`)

*/

/* -- 9

    let val = Number(prompt("Digite o valor do depósito"))
    let jur = Number(prompt("Digite o juros mensal ex: 0.01"))

    alert(`Seu montante em 12 meses será de: \n R$: ${(val * ((1 + jur) ** 12)).toFixed(2)}`)

*/

/* -- 10

    let num = Number(prompt("Digite um número"))
    let resultado = ""

    for(let i = 1; i <= 10; i++){
        resultado += (`${num} X ${i} = ${num * i} \n`)
    }

    alert(resultado)

*/

/* -- 11

    let n1 = Number(prompt("Digite a nota 1:"))
    let n2 = Number(prompt("Digite a nota 2:"))
    let n3 = Number(prompt("Digite a nota 3:"))

    media = ((n1 + n2 + n3) / 3).toFixed(1)

    alert(`Média: ${media}`)

*/

/* -- 12

    let altura = Number(prompt("Digite a sua altura:"))
    let peso = Number(prompt("Digite o seu peso:"))
    let IMC = peso / (altura ** 2)

    alert("IMC: " + IMC)

*/


/* -- 13

    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))

    if (num1 % num2 == 0) {
        alert(`${num1} é multiplo de ${num2}`)
    } else {
        alert(`${num1} não é multiplo de ${num2}`)
    }

*/

/* -- 14

    let ano = Number(prompt("Quantos anos você tem?"))
    let mes = Number(prompt(`${ano} anos e quantos meses?`))
    let dia = Number(prompt(`${mes} meses e quantos dias?`))

    alert(`Você tem ${(ano * 365) + (mes * 31) + dia} dias de vida`)

*/

/* -- 15

    let sal = Number(prompt("Digite seu salário:"))
    alert(`Salário final: \n R$: ${(sal * 1.15).toFixed(2)}`)

*/

/* -- 16

    let num = Number(prompt("Digite um número"))
    if (num > 0){
        alert("Positivo")
    } else if (num == 0){
        alert("Zero")
    } else {
        alert("Negativo")
    }

*/

/* -- 17

    let idade = Number(prompt("Digite sua idade"))
    if (idade >= 60){
        alert("Idoso")
    } else if (idade >= 18){
        alert("Adulto")
    } else if (idade >= 12){
        alert("Adolescente")
    } else if (idade >= 0){
        alert("Criança")
    } else{
        alert("Não existe")
    }

*/

/* -- 18

    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))

    let maior = num1 > num2 ? num1 : num2

    alert(`${maior} é o maior número`)

*/

/* -- 19

    let n1 = Number(prompt("Digite a nota 1:"))
    let n2 = Number(prompt("Digite a nota 2:"))
    let n3 = Number(prompt("Digite a nota 3:"))

    media = ((n1 + n2 + n3) / 3).toFixed(1)

    if (media >= 7){
        alert("Aprovado")
    } else (
        alert("Reprovado")
    )

*/

/* -- 20

    let num = Number(prompt("Digite um número"))

    if (num % 2 == 0) {
        alert(`${num} é par`)
    } else {
        alert(`${num} é impar`)
    }

*/

/* -- 21

    let p1 = Number(prompt("Digite a idade da pessoa 1:"))
    let p2 = Number(prompt("Digite a idade da pessoa 2:"))
    let p3 = Number(prompt("Digite a idade da pessoa 3:"))
    let p4 = Number(prompt("Digite a idade da pessoa 4:"))
    let p5 = Number(prompt("Digite a idade da pessoa 5:"))

    let grupo = [p1, p2, p3, p4, p5]
    let contador = 0

    grupo.forEach(p => {
        if (p < 18){
            contador++
        }
    });

    alert(`${contador} são menores de idade \n${5 - contador} são maiores de idade`)

*/


/* -- 22

    let sal = Number(prompt("Digite seu salário:"))

    if (sal > 2000) {
        alert(`Você ganhou um bonus de R$:${(sal * 0.1).toFixed(2)}`)
    } else {
        alert(`Você ganhou um bonus de R$:${(sal * 0.05).toFixed(2)}`)
    }

*/

/* -- 23

    let mes = prompt("Digite o nome de um mês").toLowerCase()
    console.log(mes)

    if(mes == "fevereiro"){
        alert("29 dias")
    } else if ((mes == "janeiro") || (mes == "março") || (mes == "maio") || (mes == "julho") || (mes == "agosto") || (mes == "outubro") || (mes == "dezembro")){
        alert("31 dias")
    } else if (mes == "abril" || mes == "junho" || mes == "setembro" || mes == "novembro"){
        alert("30 dias")
    } else {
        alert("Mês inválido")
    }

*/

/* -- 24

    let n1 = Number(prompt("Digite o número 1:"))
    let n2 = Number(prompt("Digite o número 2:"))
    let n3 = Number(prompt("Digite o número 3:"))

    let numeros = [n1, n2, n3]

    alert(numeros.sort((a, b) => a - b))

*/

/* -- 25

    let ft = Number(prompt("Digite sua quantidade de faltas:"))


    if (ft <= 15){
        alert("Aprovado")
    } else (
        alert("Reprovado")
    )

*/

/* -- 26

    let p = Number(prompt("Digite o valor do produto: "))
    let q = Number(prompt("Digite a quantidade: "))

    let vf = p * q

    alert(`Valor a pagar \n R$:${vf.toFixed(2)}`)

*/

/* -- 27

    let idade = Number(prompt("Digite sua idade:"))
    let genero = prompt("Digite seu gênero (M - Masculino, F - Feminino)").toLowerCase()

    if((idade >= 65 && genero == "m") || (idade >= 60 && genero == "f")){
        alert("Pode se aposentar")
    } else{
        alert("Não pode aposentar")
    }

*/

/* -- 28

    var peso = Number(prompt("Digite seu peso:"))
    var altura = Number(prompt("Digite sua altura:"))

    var IMC = peso / (altura * altura)

    if (IMC < 20) {
        alert("Abaixo do peso")
    } else if (IMC >= 20 && IMC < 25) {
        alert("Normal")
    } else if (IMC >= 25 && IMC < 30) {
        alert("Sobrepeso")
    } else if (IMC >= 30 && IMC < 35) {
        alert("Obesidade grau I")
    } else if (IMC >= 40) {
        alert("Obesidade grau III")
    } else {
        alert("Obesidade grau II")
    }

*/

/* -- 29

    let nome = prompt("Digite o nome do aluno:")
    let media = Number(prompt("Digite a nota:"))

    if (media >= 7){
        alert(nome + ": Aprovado")
    } else (
        alert(nome + ": Reprovado")
    )

*/

/* -- 30

    let qt = prompt("Digite quantas maçãs você quer")
    let val = qt >= 12 ? qt * 0.40 : qt * 0.50

    alert(`Valor final: R$: ${val.toFixed(2)}`)

*/

