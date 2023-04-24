/* Codigo alfab.(0 a 25) /codigo ASCII maiuscula (65 até 90)/ codigo ASCII minúsculas(97 até 122)/ deslocar/ giro/ codigo alfb.*/

function parametros (offset,string) { /*verificação dos parametros*/
validacao(offset,string); 
let value = " ";
const letrasAlfabeto = 26;

for (let i = 0; i < string.length; i++) { /* for estutura a repetição/ (i) inicialização = 0/ i++ incrementa a variável*/
let c = string.charCodeAt(i); /* variavel c= charCodeAt*/
for (let contador = 0; contador < string.length; contador++) {
letra = string.charCodeAt(contador);

if (c >= 65 && c <= 90) { /*maiusculas*/ 
  let d = (((c - 65 + offset) % 26) + 65); /* se vdd, ASCII - 65= letra alfabeto o resultado usa o operador modulo(%) para que esteja dentro do alfabeto*/
  let e = String.fromCharCode(d); /* converte e armazena a string na variavel "e" */
  value += e;
}

else if (c >= 97 && c <= 122) { /* minúsculas*/
  let d = (((c - 97 + offset) % 26) + 97); /* se vdd, ASCII - 65= letra alfabeto o resultado usa o operador modulo(%) para que esteja dentro do alfabeto*/
  let e = String.fromCharCode(d); /* converte e armazena a string na variavel "e" */
  value += e;
}

else if (c == 32) { /*ASCII printable character code 32/ Identifica os espaços entre as palavras*/ 
if (letra >= "A".charCodeAt(0) && letra <= "Z".charCodeAt(0)) { /* busca letra maiusculas após os espaços*/
  let numNovaLetra = (((letra - "A".charCodeAt(0) + offset) % letrasAlfabeto) + "A".charCodeAt(0));
  let novaLetra = String.fromCharCode(numNovaLetra);
  value += novaLetra;
}

else if (letra >= "a".charCodeAt(0) && letra <= "z".charCodeAt(0)) { /* busca letra minusculas após os espaços*/
  let numNovaLetra = (((letra - "a".charCodeAt(0) + offset) % letrasAlfabeto) + "a".charCodeAt(0)); /*modulo*/
  let novaLetra = String.fromCharCode(numNovaLetra);
  value += novaLetra;
}

else if (letra == " ".charCodeAt(0)) { /*recebe uma string como entrada e retorna uma string modificada*/
  value += " ";
} }
return value;
}}}
