
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';


function encode(offset, mensagem) {
  let mensagemCriptografada = '';
  const offsetNumber = parseInt(offset);
  const alfabetoMaiusculo = alfabeto.toUpperCase();

  for (let i = 0; i < mensagem.length; i++) {
    const msg = mensagem[i];
    if(/[a-zA-Z]/.test(msg)){
        const numeroPosicaoOriginal = msg === msg.toUpperCase() ? alfabetoMaiusculo.indexOf(msg) : alfabeto.indexOf(msg);
        const novaPosicaoLetra = (numeroPosicaoOriginal + offsetNumber + alfabeto.length) % alfabeto.length;
        mensagemCriptografada += msg === msg.toUpperCase() ? alfabetoMaiusculo[novaPosicaoLetra] : alfabeto[novaPosicaoLetra];
    }else{
        mensagemCriptografada += msg;
    }
  }
  return mensagemCriptografada;
}

function decode (offset,mensagem) {
  let mensagemDescriptografada = '';
  const offsetNumber = parseInt(offset);
  const alfabetoMaiusculo = alfabeto.toUpperCase();

  for (let i = 0; i < mensagem.length; i++) {
    const msg = mensagem[i];
    if (/[a-zA-Z]/.test(msg)){
      const decodificação = msg === msg.toUpperCase() ? alfabetoMaiusculo.indexOf(msg) : alfabeto.indexOf(msg);
      const posiçãoOriginalLetra = (decodificação - (offsetNumber % alfabeto.length) + alfabeto.length) % alfabeto.length;
      mensagemDescriptografada += msg === msg.toUpperCase() ? alfabetoMaiusculo[posiçãoOriginalLetra] : alfabeto[posiçãoOriginalLetra];
    }else{
        mensagemDescriptografada += msg;
    }
  }
  return mensagemDescriptografada;
}
    

const cipher = {
  encode,
  decode
}

export default cipher; 