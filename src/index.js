import cipher from './cipher.js';

const btCriptografar = document.getElementById('criptografar');
btCriptografar.addEventListener('click', function(){
    const mensagemOriginal = document.getElementById('original');
    const offSet = document.getElementById('offset');
    const mensagemCriptografada = cipher.encode(offSet.value,mensagemOriginal.value);
    document.getElementById('cifrada').innerHTML = mensagemCriptografada; 
})
