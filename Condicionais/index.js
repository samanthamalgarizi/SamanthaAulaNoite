/*function imprimirOlaMundo (){
    console.log ("Olá, Mundo!")
}

imprimirOlaMundo()*/

/*function calculaArea(altura, largura){
    const area = altura * largura
    console.log(area)
}
calculaArea(2,3)
calculaArea(8,8)*/

/*const nome = "Samantha"

function imprimeNome(){
    const meuSobrenome = "Malgarizi"
    console.log(nome)
    console.log(meuSobrenome)
}
imprimeNome()

const filme = "Piratas do Caribe"

function imprimeFilme (){
    const quantFilmes = 5
    console.log (filme)
    console.log (quantFilmes)
}
imprimeFilme()

console.log (nome)
console.log (meuSobrenome)*/

/*function calculo(numero1, numero2){
soma = numero1 + numero2
return soma
}
const calculoSoma = calculo(2,3) 
const calculoSoma2 = calculo (8,2)
console.log(calculoSoma, calculoSoma2)*/

/*const numeros = [0, 1, 2, 3, 4]

function arrayNumeros (array){
    const ultimoNumero = array[4]
    const primeiroNumero = array[0]
    const novoArray = [ultimoNumero / 3, primeiroNumero / 2]
    return novoArray
}
console.log(arrayNumeros(numeros)
)*/



/*
const numeros = [10, 20, 30, 40, 50]


function lista(listaDeNumeros){
const primeiroNumero = listaDeNumeros[0]
const ultimoNumero = listaDeNumeros [4]
const resultado = [primeiroNumero / 2, ultimoNumero / 2]
return resultado
}

console.log(lista(numeros))
*/

/*const idade = [12, 14, 16, 18, 20, 22, 24]

function listaDeIdades(numeros){
    const segundoNumero = numeros[1]
    const penultimoNumero = numeros [6]
    const novaIdade = [segundoNumero / 2 ,]
}*/

//OLA! COMO SE CHAMA?

/*const armario = {
    gavetaDeMeias: "meia azul",
    gavetaDeCamisetas: "camiseta vermelha"
   
}
/*console.log(armario.gavetaDeMeias)*/

/*ALTERANDO VALORES*/


/*armario.gavetaDeMeias = "meia amarela"
armario.gavetaDeCamisetas = "camiseta preta"

console.log(armario)*/
//..............................................................
/*const filme = {
    diretor: "David Fincher",
    nomeDoFilme: "Clube da Luta",
    ano: 1999,
    elenco: ["Bradd Pitt", "Edward Norton", "David Fincher"]
}

console.log(filme.diretor)
console.log(filme.nomeDoFilme)
console.log(filme["ano"])
console.log(filme["elenco"])*/

//.........................................................................

/*const pessoa = {
nome: "Samantha",
idade: 23,
estiloDeMusica: "rock"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.estiloDeMusica}.`)
*/


//ASSIM QUE SE ACESSA UM ARRAY DENTRO DE UM OBJETO


/*const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
   }
   
   console.log(curso.linguagens[0])*/

   // Array de objetos [{ }]

   /*const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2}, 
    {nome: "Mina", modulo: 3}
   ]
   
   console.log(professores[1].nome)*/

   /*const curso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]
   }
   //Notação de ponto:
    curso.numeroEstudantes = 5
   //Notação de colchetes:
    curso['numeroDEEstudante'] = 50

   console.log(curso.numeroEstudantes)
*/

/*const filme = {
    diretor: "David Fincher",
    nomeDoFilme: "Clube da Luta",
    ano: 1999,
    elenco: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"]
    
}*/

/*filme.personagens = ["Narrador", "Tyler Durden", "Marla Singer"]
console.log(filme.elenco[0], filme.personagens [1])
console.log(filme.elenco[1], filme.personagens[0])
console.log(filme.elenco[2], filme.personagens [2])

filme.elenco = ["Xuxa", "Edward Norton", "Helena Bonham Carter"]

console.log(filme.elenco)
console.log(filme)
*/


/*const pessoa  =  {
    nome: "Samantha",
   idade : 23,
   estiloDeMusica : "rock"
    }

  function copiaObjeto(objeto){
   
    const novoObjeto = {
        ... objeto,
        comidasFavoritas : ["carreteiro", "lentilha", "massa com galinha"],
        amigo : {nomeAmigo: "Thaís", idadeAmigo: 23}
    }
    console.log (`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasFavoritas[0]}, ${novoObjeto.comidasFavoritas[1]} e ${novoObjeto.comidasFavoritas[2]}.
    Seu melhor amigo se chama ${novoObjeto.amigo.nomeAmigo} e tem ${novoObjeto.amigo.idadeAmigo} anos.`)
            
    
}
   
copiaObjeto(pessoa)
 */

/*function calculaAreaQuadrado(altura, largura){
    const area = altura * altura
    console.log(area)
}
function calculaAreaRetangulo(altura1, largura1){
    const area1 = altura1 * largura1
    console.log (area1)
}
function calculaAreaTriangulo(altura2, largura2){
    const area2 = (altura2 * largura2 ) / 2
    console.log(area2)
}
calculaAreaQuadrado(2,2)
calculaAreaRetangulo(3,5)
calculaAreaTriangulo(5,4)
*/

/*const anoDeNascimento = 1999
const anoAtual = 2023
const idade = anoAtual - anoDeNascimento
console.log(idade)
*/
/*const numero1 = 28
const numero2 = 12
const soma = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2
const modulo = numero1 % numero2
console.log(soma, subtracao, multiplicacao, divisao, modulo)
*/

/*let numero1 = 36
let numero2 = 18
console.log(numero1 === numero2)
console.log(numero1 !== numero2)
console.log(numero1 > numero2)
console.log(numero1 >= numero2)
console.log(numero1 < numero2)
console.log(numero1 <= numero2)
*/
/*
let temIdadeParaDirigir = true
let temCarteiraDeMotorista = true
let temCarroProprio = false

console.log (temIdadeParaDirigir && temCarteiraDeMotorista)
console.log(temCarroProprio || temCarteiraDeMotorista)
console.log (! temIdadeParaDirigir, ! temCarteiraDeMotorista)
*/
/*
let nomes = ["    ÁrTemis", "HalYna", "OdIn  "]
console.log (nomes[0].replaceAll("a", "#"))
console.log (nomes[1].replaceAll("a", "#"))
console.log (nomes[2].replaceAll("a", "#"))
*/

/*const nome = "Samantha"
const idade = 23
const cidade = "São Leopoldo"
const mensagem = " Olá, meu nome é " + nome + " , tenho " + idade + " anos e moro em " + cidade
console.log(mensagem)
*/

/*const aluno = {
    nome: "Samantha",
    idade: 23,
    curso: "Talentos TI"
}
console.log(aluno)

aluno.notas = [10, 8, 7],
aluno.mediaNotas = 
*/

/*let numero1 = 10
let numero2 = 20
if (numero1 = numero2) {
    console.log("Os números são iguais")
}
else{
    console.log("Os números são diferentes")
}
*/

let concluiuOEnsinoMedio = prompt("Você concluiu o ensino médio?")
let idade = Number(prompt("Qual sua idade?")) 
let cursandoFaculdade = prompt("VOcê está cursando a faculdade?")

function verifica(concluiuOEnsinoMedio, idade , cursandoFaculdade  ){
    if (concluiuOEnsinoMedio === "sim" && idade >= 18 && cursandoFaculdade === "não"){
        console.log("Você pode cursar faculdade!")
    }
    else {
        console.log("Você não pode cursar a faculdade!!")
    }
}

verifica(concluiuOEnsinoMedio, idade , cursandoFaculdade )
