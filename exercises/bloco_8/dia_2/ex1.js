const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//Ex 1: Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
function authorBornIn1947() {
  let item = books.find((book) => book.author.birthYear === 1947);
  return item.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

// Ex 2: Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((book) => {
    nameBook.length > book.name.length
      ? (nameBook = book.name)
      : (nameBook = nameBook);
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

// Ex 3: Encontre o primeiro livro cujo nome possui 26 caracteres.

let expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((book) => book.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

// Ex 4: Ordene os livros por data de lançamento em ordem decrescente.

expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
  return books;
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

//Ex 5: Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (book) =>
      book.author.birthYear - 1900 > 0 && book.author.birthYear - 1900 < 100
  );
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// Ex 6:  Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some(
    (book) => book.releaseYear - 1980 > 0 && book.releaseYear - 1980 < 10
  );
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

//Ex 7: Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

expectedResult = false;

function authorUnique() {
  return books.every(
    (book) => book.author.birthYear === books[0].author.birthYear
  );
}

assert.strictEqual(authorUnique(), expectedResult);
