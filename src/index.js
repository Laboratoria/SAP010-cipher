import cipher from './cipher.js';
function codificar(){
  const textoInput = document.querySelector("#textoInput").value;
  const deslocamento = parseInt(document.querySelector("#deslocamento").value);
  const textoCodificado = cipher.encode(deslocamento, textoInput);
  document.querySelector("#textoOutput").value = textoCodificado;
}

function decodificar(){
  const textoInput = document.querySelector("#textoInput").value;
  const deslocamento = parseInt(document.querySelector("#deslocamento").value);
  const textoDecodificado = cipher.decode( deslocamento, textoInput);
  document.querySelector("#textoOutput").value = textoDecodificado; 
}

document.querySelector("#codificarBtn").addEventListener("click", codificar);
document.querySelector("#decodificarBtn").addEventListener("click", decodificar);

//console.log(cipher);
