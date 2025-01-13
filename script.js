/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.
*/

function somaNumeros() {
    let num = parseFloat(prompt("Digite o primeiro número:"))
    let num2 = parseFloat(prompt("Digite o segundo número:"))
    let soma = num + num2
    console.log(soma)
}

/*
2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".
*/

function verificarParOuImpar() {
    let num = parseFloat(prompt("Digite um numero e direi se é par o impar"))
    if (num % 2 == 0) {
        console.log("O número é par")
        } else {
            console.log("O número é impar")
            }
}

/*
3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.
*/

function contagemDeNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
        }
}

/*
4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.
*/

function tabuadaDeUmNumero() {
    let num = parseFloat(prompt("Digite um numero e direi a tabuada"))
    for (let i = 1; i <= 10; i++) {
        console.log(num*i)
        }
}

/*
5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.
*/

function maiorNumeroLista() {
    var lista = [3, 7, 2, 9, 5]
    var maior = Math.max(...lista)
    console.log(maior)
}

/*
6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.
*/

function inverterPalavra() {
    let palavra = prompt("Digite uma palavra")
    let palavraInversa = [...palavra].reverse().join('')
    console.log(palavraInversa)
}

/*
7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.
*/

function somaElementosArray() {
    let array = [1, 2, 3, 4, 5]
    let soma = array.reduce((total, quantidade ) => total + quantidade)
    console.log(soma)
}

/*
8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".
*/

function verificarPrimo() {
    let num = parseInt(prompt("Digite um número"))
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("Não é primo")
            return
            }
        }
            console.log("É primo")
}

/*
9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.
*/

function calcularFatorial() {
    let num = parseInt(prompt("Digite um número"))
    let fat = 1
    for (let i = 1; i <= num; i++) {
        fat *= i
    }
    console.log(fat)
}

/*
10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.
*/

function verificarPalindromo() {
    let palavra = prompt("Digite uma palavra")
    let palavraInversa = [...palavra].reverse().join('')
    if (palavra == palavraInversa) {
        console.log("É um palíndromo")
    } else {
        console.log("Não é um palíndromo")
    }
}
/*
11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.
*/
function contarNaoConsoantes() {
    let frase = prompt("Digite uma frase")
    let vogais = 0
    for (let i = 0; i < frase.length; i++) {
        if ('aáàâãeéèêiíïoóôõöuú'.includes(frase[i].toLowerCase())) {
            vogais += 1
            }
        }
        console.log(vogais)
}
/*
12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.
*/
function numeroRandola() {
    let num = Math.floor(Math.random()*100)
    console.log(num)
}
/*
13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.
*/
function substituirNegativos() {
    let array = [4, -3, 2, -1, 0]
}
/*
14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.

⣿⣿⣿⣿⣿⣿⣿⣿⡿⡫⣁⡴⣈⡼⣟⣭⣷⣿⡿⠿⡽⡟⠍⡙⢕⣢⣿⡟⣱⣿⣿⣿⣿⣿⠟⠋⡕⢼⣣⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⢿⣩⣾⣿⡿⣿⣿⢿⣿⣿⣿⣿⡿⠛⣙⢄⣽⣿⣿⣿⡃⢹⣿⣿⣾⢫⢿⢇⣿⡟⣼⣿⡇⠯⠈⠰⣶⣾⣶⡄⢻⣿⣿⢎⣮⡹⠗⣠⣵⣶⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⡫⣪⡾⣫⣾⣯⠾⠛⣋⣥⣶⡿⠟⣩⢔⣼⣾⣿⣿⠏⣼⣿⣿⢟⣿⡟⣡⢊⣼⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⡿⣫⣷⣿⣿⣿⣫⢏⡼⣫⣾⣿⣿⣿⣃⢔⠟⣱⣿⣿⡿⣛⣿⣿⣿⣿⣿⣿⣏⡾⣼⡿⣸⣿⣿⠃⣴⠠⢹⣸⡿⣿⣇⡱⡊⣿⣎⣎⢷⡘⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⢞⣾⡟⠾⠿⢋⢥⣺⣯⣷⡿⢋⣴⣯⣾⡿⢟⢛⣻⠏⣼⣿⣿⠏⣾⣿⠟⣵⣿⣿⣿⣿⡿⠿⠟⠛⣛⣉⣥⣴⣶⡿⢟⣿⣿⣿⣿⡟⠑⣡⠯⣺⣿⣿⣿⣿⡿⢋⣴⣾⠿⠟⣫⣾⣿⣿⡟⣼⣿⣿⣿⡙⣽⡟⣵⣿⣿⣥⣦⡏⡇⠈⡏⣷⡹⣿⣦⠑⡜⣿⣯⢫⢭⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⣠⠟⣩⣴⡾⣥⣼⠿⣫⣥⢈⣶⠶⢛⢍⡒⣡⡶⣼⠏⣰⣿⣿⢋⠶⢿⢥⣾⣮⣭⣿⢤⣤⡶⡾⣻⣿⠟⣨⣿⡿⢋⣴⣿⡿⣛⡟⡁⣴⡞⣡⣾⣿⢟⣭⣿⡿⠱⠟⡡⡊⣠⣾⣿⡿⣫⣟⣼⣿⢫⢯⣿⢸⣿⣾⣿⣿⣿⣿⢼⣷⣿⠀⣷⢿⢸⣜⢿⣷⡘⣞⢿⣷⡵⡣⠘⢿⣿⣿⣿⣿⣿⣿⣿⠿⢟⡛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡇⡉⣼⣿⡿⣼⡟⢡⣾⡿⢃⢈⡴⠚⠑⣋⣾⢟⠊⡄⢠⣿⡿⢃⡴⡵⣳⣿⢟⣵⡿⣵⡿⠿⠹⣼⣿⠏⣼⡿⢋⣴⣿⡿⣫⣪⢞⣡⠟⣢⣾⣿⠟⣵⡿⠛⣩⠞⣡⠪⢞⣾⣿⠟⢡⢞⠉⢊⣿⠇⡜⣸⡇⢠⣿⣿⣿⢿⣿⡟⣾⢹⣿⢈⣿⢸⠰⢻⡄⣻⣿⣎⢈⠻⣿⣞⢆⢸⣿⡿⢿⣻⣭⣷⣾⣿⣿⣿⣿⣶⣬⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⣦⣿⣿⢱⡟⣴⣿⠟⢑⣫⣷⠖⣡⣾⡿⡵⢁⡞⢻⣾⡟⢁⣞⣞⡽⣟⣵⡿⣫⠿⢋⡴⢰⣱⣿⠇⣼⠏⣠⣾⣿⢯⣾⢞⢵⣫⣷⢾⡯⠫⢠⡞⣡⢮⠞⣱⠞⣡⣢⣿⡿⠑⡠⣵⢇⣆⣾⡏⣼⠃⣿⠀⣽⡏⣿⡏⣼⣿⢳⡏⢨⡏⢘⣿⡔⢈⣸⣿⠱⡹⣿⢸⣰⡌⢛⣣⣬⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣬⡻⢿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣮⠀⠩⢁⣴⣿⢟⣵⣾⡟⠩⠊⢒⢽⣾⣧⣻⡌⣾⢉⣬⠞⠏⠩⢚⣡⣾⠿⡃⡎⣿⠏⡼⢃⣼⣿⡟⢕⠕⣡⣴⢿⡫⠟⣙⣤⣶⠟⢌⡵⢋⡜⣡⡾⣵⣿⠟⢀⣤⡾⣱⡟⢌⡞⣰⡇⣠⡟⡠⣿⡇⣿⡇⣾⣿⡾⢀⣾⡟⣸⣿⣧⢸⣧⣿⢹⠁⣟⣬⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣙⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢿⣢⣤⣿⢟⡵⠟⣁⣨⢁⣾⡌⣿⠂⢻⣿⡧⣁⠵⣋⡴⢊⡔⠈⠼⡿⣫⣾⠀⣹⣿⣿⢡⡾⣿⣋⣤⣧⠿⠫⢓⡩⣴⣾⡿⣫⠉⢠⣞⡷⢪⣤⣟⣽⣿⠏⣴⣿⢏⣾⡿⠘⡞⢱⡿⣠⣿⠇⡆⣿⡇⣿⢇⣿⣿⠁⣾⣿⢳⣿⠿⢇⣦⠻⣉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣙⢿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⠏⠕⣩⣴⣿⡿⣣⡿⡳⣣⢹⠀⣃⠅⡨⠠⠞⢱⡞⣼⠛⣆⣧⣝⢛⡻⠤⢯⣟⣃⣲⣯⣿⠿⢛⢡⣶⣾⠛⣴⡿⣫⣾⠃⣰⣯⡟⣱⣯⣏⣼⣿⢃⣾⣿⢣⣿⢏⠄⡼⢡⣿⠇⣼⡿⢠⡏⣿⡇⣿⠈⣿⠇⣾⣿⢧⣿⠃⢀⣾⡟⡰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡱⠇⣼⣿⣿⢟⡼⠋⣠⠞⠋⠀⠈⣤⣤⢷⢸⡟⣨⡇⠁⣇⢸⣿⣿⣷⣮⢁⠔⡭⠋⠉⡠⣊⡞⣳⣿⣿⣫⣼⢟⣾⣿⠁⡴⣳⢏⣾⣿⣟⡾⢻⣯⣿⣿⡡⢭⢏⡟⢰⢁⡟⡘⢰⣿⡅⣐⡚⣿⡇⣿⢂⡟⣼⣿⢏⣸⠇⣨⣼⡟⡌⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⢻⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠗⠝⡫⠞⣩⡔⣂⣮⢠⣶⡇⡐⡰⣶⠊⢸⠇⣿⡧⡗⣼⢾⣬⣭⡝⡡⡣⠚⠔⠀⢘⣼⣿⢳⣿⣿⣷⣿⣵⣿⣿⠃⣼⣵⢯⣿⣿⡟⣜⢡⡟⢹⣿⢱⣿⣿⣾⠃⢢⡟⣠⢇⣿⣿⡇⡯⠇⣽⡇⣿⢸⡽⣻⢟⠘⠈⣰⣿⡟⢸⢷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢹⣿⡏⢹⣿⡟⠁⠈⣿⡿⠁⣿⣿⠁⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢹
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣥⣀⣥⣴⣾⣳⣾⢟⣵⢯⠞⡠⢳⢷⡭⢰⡏⡇⡏⡇⡅⢻⣿⡿⢋⠈⡀⣰⡷⠀⣠⣈⡹⢛⡿⠿⣿⣿⣿⣿⣿⡿⠰⣳⢫⣿⣿⣿⠹⣁⡾⢡⢸⢣⣿⣿⣿⠿⠐⢋⠚⡈⣬⣭⣴⣶⣞⡇⣿⡇⣿⣸⣱⠟⣎⡇⣸⣿⡟⣼⡟⡾⢸⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠈⡿⢀⡾⠋⣠⠆⠀⣿⠁⠈⠉⠁⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣫⣴⠿⠕⣡⢮⡾⡘⣦⣿⡸⡇⠀⡅⢡⢥⢐⡋⢦⣶⡿⢯⣽⢧⢡⣿⣺⣟⣶⣾⣥⣜⣢⠫⣉⠿⣿⣾⢏⣿⣿⣿⣿⢰⠻⢣⣿⢈⡬⠝⣀⣲⣤⣴⣟⢞⣽⣿⣿⣿⡿⣿⡿⢸⡗⣿⠉⢣⡇⣿⢠⣿⣿⡹⠟⣼⢷⢸⣿⣿⣿⣿⣿⣿⣿⡿⠀⣶⠀⠀⡼⠁⣀⣠⡄⠠⠇⢠⣾⡟⢀⣾⡿⠋⣹⣿⣿⣿⣿⣿⣿⣿⡟⢸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣋⣡⣘⣣⣴⡾⣽⣳⢏⡼⠁⠙⣿⡇⢿⠀⠻⡾⣸⣿⣿⡐⠢⠩⠀⠐⠀⠭⢒⣚⠯⢭⣛⡿⣿⣿⣷⣶⢤⡹⡟⣼⣿⣿⣿⣿⣮⣴⡿⠿⣄⣶⣾⣿⣿⡿⢟⣫⠭⠿⠒⠢⠤⠔⠀⠀⠘⣧⣿⠌⣿⠃⡟⣼⣿⣿⣇⠆⡿⣼⢸⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣧⣼⣿⣿⣦⣴⣤⣿⣿⣦⣼⡟⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⡿⣽⠃⢡⣾⠁⢞⣧⢹⡇⢸⡇⢧⢷⡉⣿⣿⣿⡃⠜⣿⣿⡇⢻⣷⡂⢸⣤⣈⠙⠂⣿⣿⣿⣧⢠⢸⣿⣿⣿⣿⣿⣿⡟⠁⣹⣿⣿⣿⣿⡿⠐⢋⠁⣤⣖⣘⣻⠇⣼⣿⣿⠃⣹⡏⠸⢃⡏⠀⣻⣿⣿⣟⡀⣇⡏⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⢿⠛⢻⡿⠟⠛⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠗⢋⣴⣿⡏⠀⣾⡿⠀⠇⣾⡉⣘⣿⣧⡸⣿⣿⣧⡡⢻⣿⣿⣦⣘⠿⢽⣛⣽⣷⡀⠸⣿⣿⣿⣃⡀⣿⣿⣿⣿⣿⣿⡟⣧⣹⣿⣿⣿⣿⠃⢰⣿⣷⣝⡻⢛⣋⣴⣿⣿⢏⣇⢻⡌⠈⡸⢽⠐⣿⣿⡟⣼⣱⡿⣠⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⢠⣶⠀⣴⣿⠀⣠⣶⣶⠂⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⠀⢰⣿⠃⡜⠀⢻⡇⢸⣿⣿⣷⣽⣿⣿⣿⣣⡻⢿⣿⣿⣿⣿⣿⣿⡿⢠⣐⢉⢉⡿⢉⣴⣿⣿⣿⣿⣿⣿⣿⣾⣿⡿⠻⢿⡏⢠⣌⢿⣿⣿⣿⣿⣿⣿⡿⣫⣜⣿⢳⢠⢹⡇⣸⣷⣾⢛⡇⢿⡟⣱⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⣿⣿⣿⡏⢠⠿⠛⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢠⡜⣣⣾⢁⣃⢹⣿⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣾⣿⣥⣴⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⠡⠛⢿⣾⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠈⡇⢾⣷⣿⣿⡿⢸⣿⡞⡀⣾⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠉⢁⣀⣠⣽⣿⣿⣀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣵⣾⣿⢇⢈⡜⣅⠹⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢏⣸⣧⢻⣿⣿⣿⡇⣿⡟⡀⡆⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢊⣬⣾⣿⣷⣤⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣾⣿⣿⣾⣿⣿⡿⠸⠟⠠⢠⢣⢿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⢹⡟⠈⢹⣿⠃⣸⠏⢸⡏⠈⣿⡿⠁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⡆⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣴⠀⡏⣸⡇⠎⢿⡛⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⡟⢁⠀⠸⠃⣰⡟⢀⡿⠀⡀⠘⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣽
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣸⣿⠀⠀⣿⣿⢰⣾⡇⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢠⣾⡀⠀⣴⡿⠁⣾⠁⣼⣷⠀⢠⣿⠛⢙⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⣿⡏⠠⣸⣿⣷⣿⣿⢃⣨⣿⣿⣿⣿⣿⣿⣿⣷⣶⣿⣿⣷⣾⣿⣷⣼⣿⣶⣿⣿⣷⣾⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⡿⣡⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⣾⣿⢁⣵⣿⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣱⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣬⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣴⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⡙⢿⣿⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣽⡻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢂⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣯⣝⡻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠋⢁⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢱⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⣾⠃⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣛⣿⣿⣿⣿⣿⣷⣶⣬⡁⣨⠿⣛⣛⣛⣻⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠐⠌⣿⣆⠹⣿⣿⣿⣿⣿⣏⣙⣻⠿⠿⢿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣟⣋⣤⣾⣿⣿⣿⡿⢣⣾⣿⢏⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡴⣩⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⡳⢹⣿⣷⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢦⡀⠀⠤⣤⣤⣤⣤⣤⣤⣄⠤⠖⡀⢴⣶⣿⣿⣿⣿⣿⣿⣿⡿⢋⣴⣿⡿⠋⣀⠀⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣨⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢰⣌⠊⣿⣿⣿⣆⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣙⠛⠛⠒⠒⠒⠒⠒⡖⢒⣩⣼⣿⣿⣿⣿⣿⣿⣿⡿⢋⣴⣿⣿⣿⠍⣐⡇⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣷⣿⣿⣿⣿⣷⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢋⣴⣿⣿⣿⣿⡏⢀⡳⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣖⢀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣱⣿⣿⣿⣿⣿⣿⡯⢅⡾⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠃⠘⣿⡷⣝⢿⣿⣿⣿⣿⡧⠢⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⣰⣿⣿⣿⣿⣿⣿⣭⣾⣿⡇⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠀⠀⠀⠀⣿⣿⣮⡳⡍⠿⣿⣿⣿⣌⠺⢔⣌⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⢂⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⡌⠲⣜⢿⣿⣿⣿⡄⢠⣹⣷⣆⣉⠛⠿⠿⠿⠿⢿⠿⡿⠿⠿⠟⠋⣀⠤⡢⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣷⡐⢔⢌⢿⣿⣿⣿⣄⠐⢿⣿⣿⣿⣿⣷⣶⣶⣦⣦⣴⣤⣦⡔⠲⢌⡱⣴⣿⣿⣿⠟⢋⣩⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷⢠⠓⢮⣻⣿⣿⣿⣎⢈⠽⣛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠣⠕⢲⣿⣿⣿⣿⢏⣰⣾⠿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣇⢙⢴⢙⣿⣿⣿⣿⣷⡱⣦⣪⠬⣽⣛⡿⡟⣻⣿⣿⣣⣌⣴⣿⣿⣿⡿⢁⡴⢚⣋⠸⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢝⢆⢻⣿⣿⣿⣿⣧⢩⣫⠭⢟⣻⢒⣼⣿⣿⣯⢅⣾⣿⣿⡿⢋⡀⢦⣼⠯⣭⣶⣾⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠿⠟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠘⠿⢿⣿⣿⣿⣄⣺⢭⣻⡆⢾⣿⣿⣿⡄⣿⣿⣿⡟⠁⠀⢴⡟⣮⡿⠼⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
*/
