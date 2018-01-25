/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [10, 'Felipe', null, { a: 1 }, function () { }];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisP(arrayV, num) {
    return arrayV[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresD = ['JS Ninja', false, 10, function () { }, null];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisP(valoresD, 0));
console.log(doisP(valoresD, 1));
console.log(doisP(valoresD, 2));
console.log(doisP(valoresD, 3));
console.log(doisP(valoresD, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
    var livros = {
        'Revolução dos Bichos': {
            quantidadePaginas: 112,
            autor: 'George Orwell',
            editora: 'Grupo Companhia Das Letras'
        },
        'Capitães da Areia': {
            quantidadePaginas: 288,
            autor: 'Jorge Amado',
            editora: 'Companhia de Bolso'
        },
        'Cavalo de Guerra': {
            quantidadePaginas: 184,
            autor: 'Michael Morpurgo',
            editora: 'Heinemann'
        }
    }

    return !nome ? livros : livros[nome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = 'Revolução dos Bichos';
console.log('O livro ' + nome + ' tem ' + book(nome).quantidadePaginas + ' páginas !');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(' O autor do livro ' + nome + ' é ' + book(nome).autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(' O livro ' + nome + ' foi publicado pela editora ' + book(nome).editora);
