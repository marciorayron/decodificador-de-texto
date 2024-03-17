function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(textoCriptografado) {
    return textoCriptografado.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function tocarSomDone() {
    let audio = document.getElementById('audio-feito');
    if (audio.readyState === 4) {
        audio.currentTime = 0;
        audio.volume = 0.5;
        audio.play();
    }
    else {
        console.log('Não foi possível reproduzir o áudio.');
    }
}

function tocarSomError() {
    let audio = document.getElementById('audio-error');
    if (audio.readyState === 4) {
        audio.currentTime = 0;
        audio.volume = 0.5;
        audio.play();
    }
    else {
        console.log('Não foi possível reproduzir o áudio.');
    }
}

function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
}

function exibirAviso() {
    let cxExibirTxt = document.getElementById('cx-exibir-txt');
    cxExibirTxt.classList.add('shaking');
    setTimeout(function () {
        cxExibirTxt.classList.remove('shaking');
    }, 1000);
}

function validarEExibirAviso(texto) {
    if (!texto) {
        exibirAviso();
        return false;
    }
    if (!validarTexto(texto)) {
        let paragrafo = document.querySelector('.paragrafo p');
        paragrafo.classList.add('vermelho');
        setTimeout(function () {
            paragrafo.classList.remove('vermelho');
        }, 1000);
        return false;
    }
    return true;
}

function agrupaFuncoes() {
    tocarSomDone();
    exibirBotoes();
    naoExibirImgGaroto();
}

let cxExibirTxt = document.getElementById('cx-exibir-txt');

function definirTamanhoTexto(elemento) {
    elemento.style.fontSize = '1.5rem';
}

document.getElementById('btn-copiar').addEventListener('click', function () {
    let textoCopiado = document.getElementById('cx-exibir-txt').textContent;
    navigator.clipboard.writeText(textoCopiado);

    cxExibirTxt.textContent = 'Copiado!';
    definirTamanhoTexto(cxExibirTxt);

    document.getElementById('texto').value = textoCopiado;
    tocarSomDone();
});

document.getElementById('btn-recarregar').addEventListener('click', function() {
    tocarSomDone();
    window.location.reload();
   
});

function exibirBotoes() {
    let btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.style.display = 'inline-block';
    let btnRegarregar = document.getElementById('btn-recarregar');
    btnRegarregar.style.display = 'inline-block';
}

function naoExibirImgGaroto() {
    let imgGaroto = document.getElementById('img-garoto');
    imgGaroto.style.display = 'none';
}

document.getElementById('btn-crip').addEventListener('click', function () {
    let texto = document.getElementById('texto').value.trim();
    if (!validarEExibirAviso(texto)) {
        tocarSomError();
        return;
    }
    let textoCriptografado = criptografarTexto(texto);
    document.getElementById('cx-exibir-txt').textContent = textoCriptografado;
    definirTamanhoTexto(cxExibirTxt);
    agrupaFuncoes();

});

document.getElementById('btn-desc').addEventListener('click', function () {
    let textoCriptografado = document.getElementById('texto').value.trim();
    if (!validarEExibirAviso(textoCriptografado)) {
        tocarSomError();
        return;
    }
    let textoOriginal = descriptografarTexto(textoCriptografado);
    document.getElementById('cx-exibir-txt').textContent = textoOriginal;
    definirTamanhoTexto(cxExibirTxt);
    agrupaFuncoes();

});