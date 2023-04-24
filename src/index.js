/* Codigo alfab.(0 a 25) /codigo ASCII maiuscula (65 até 90)/ codigo ASCII minúsculas(97 até 122)/ deslocar/ giro/ codigo alfb.*/

function cifrar() { /*cifrar chave numerica fornecida pelo usuario*/ 

    let mensagem = document.getElementById("mensagem").value; /* cria uma variavel e atribui o valor fornecido no campo de input*/
    let chave = parseInt(document.getElementById("chave").value); /* parseInt- transforma o valor recebido do input (string) em um num. inteiro*/
    let resultado = ""; /*será usada para armazenar msg cifrada*/
  
    for (let i = 0; i < mensagem.length; i++) { /*(i) inicialização/ loop em todo comprimento da msg até que seja igual a que foi feita*/
      let caractere = mensagem.charCodeAt(i); /*atribui o valor numérico correspondente ao caractere atual da mensagem*/
  
      if (caractere >= 65 && caractere <= 90) { /* maiuscula - se positivo o codigo é executado*/
      
        caractere = ((caractere - 65 + chave) % 26) + 65; /* subtrai 65 do vl numerico + chave / modulo26 e add 65 nov. para retornar  o vl numerico a letra maiuscula cifrada*/
      } else if (caractere >= 97 && caractere <= 122) {
      
        caractere = ((caractere - 97 + chave) % 26) + 97; /*para letras minusculas*/
      }
  
      resultado += String.fromCharCode(caractere);
    }
  
    document.getElementById("resultado").value = resultado;
    return resultado;
  } 
  
  
  
  function decifrar() {
    
  let mensagem = document.getElementById("mensagem").value;
  let chave = parseInt(document.getElementById("chave").value);
  let resultado = "";
  
     for (let i = 0; i < mensagem.length; i++) {
     let caractere = mensagem.charCodeAt(i);
  
     if (caractere >= 65 && caractere <= 90) {
     // letra maiuscula
     caractere = ((caractere - 65 - chave + 26) % 26) + 65;
     } else if (caractere >= 97 && caractere <= 122) {
     // letra minuscula
     caractere = ((caractere - 97 - chave + 26) % 26) + 97;
      }
  
    resultado += String.fromCharCode(caractere);
      }
  
  document.getElementById("resultado").value = resultado;
  return resultado;
  }