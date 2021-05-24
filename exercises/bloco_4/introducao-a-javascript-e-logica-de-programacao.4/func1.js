function ehPalindromo (string) {
  let soma = 0
  for (let index=0; index<string.length; index+=1) {
    if (string[index] === string[string.length-index-1] ) {soma +=1}

  }
if (soma == string.length) {return 'é palindromo'}
else {return 'não é palindromo'}
}

