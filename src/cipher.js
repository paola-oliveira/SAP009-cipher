
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';


function encode(offset, mensagem) {
  let mensagemCriptografada = '';
  const offsetNumber = parseInt(offset);

  
  for (let i = 0; i < mensagem.length; i++) {
    const numeroPosicaoOriginal = alfabeto.indexOf(mensagem[i]); // p = 15
    const novaPosicaoLetra = (numeroPosicaoOriginal + offsetNumber) % alfabeto.length; // s = 18
    mensagemCriptografada += alfabeto[novaPosicaoLetra];
  }


  return mensagemCriptografada;
}

const cipher = {
  encode
}

export default cipher; 