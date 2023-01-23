import cipher from './cipher.js';

const btCriptografar = document.getElementById('criptografar');
btCriptografar.addEventListener('click', function () {
  const mensagemOriginal = document.getElementById('original');
  const offSet = document.getElementById('offset');
  if (offSet.value !== '') {
    const mensagemCriptografada = cipher.encode(parseInt(offSet.value), mensagemOriginal.value.toString());
    document.getElementById('cifrada').innerHTML = mensagemCriptografada;
  } else {
    alert("Por favor, insira um número de deslocamento");
  }
})

const btDescriptografar = document.getElementById('descriptografar');
btDescriptografar.addEventListener('click', function () {
  const mensagemOriginal = document.getElementById('original');
  const offSet = document.getElementById('offset');
  if (offSet.value !== '') {
    const mensagemDescriptografada = cipher.decode(parseInt(offSet.value), mensagemOriginal.value.toString());
    document.getElementById('cifrada').innerHTML = mensagemDescriptografada
  }else {
    alert("Por favor, insira um número de deslocamento");
  }
})