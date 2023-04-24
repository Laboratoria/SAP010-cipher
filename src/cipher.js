const cipher = {
  encode: function( deslocamento, texto) {
    if  ( typeof deslocamento !== 'number' || typeof texto !== 'string' ) {
      throw new TypeError('Os argumentos devem ser uma string e um número');
    } else {

      let codificado = "";
      for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter.match(/[A-Z]/i)) {
          const codigo = texto.charCodeAt(i);
          if (codigo >= 65 && codigo <= 90) {
            caracter = String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
          } 
        }
        codificado += caracter;
      }
      return codificado;
    }
  },

  decode: function(deslocamento, texto ) {
    if (typeof deslocamento !== 'number' || typeof texto !== 'string' ) {
      throw new TypeError('Os argumentos devem ser uma string e um número');
    } else{

      let decodificado = "";
      for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter.match(/[A-Z]/i)) {
          const codigo = texto.charCodeAt(i);
          if (codigo >= 65 && codigo <= 90) {
            let resultado = codigo - 65 - deslocamento;
            while (resultado < 0) {
              resultado += 26;
            }
            caracter = String.fromCharCode((resultado % 26) + 65)
          } 
        }
        decodificado += caracter;
      }
    
      return decodificado;
    }
  }

}

export default cipher;
