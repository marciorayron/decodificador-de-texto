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

document.getElementById('btn-copiar').addEventListener('click', function () {
    let textoCopiado = document.getElementById('cx-exibir-txt').textContent;
    navigator.clipboard.writeText(textoCopiado);

    let cxExibirTxt = document.getElementById('cx-exibir-txt');
    cxExibirTxt.textContent = 'Copiado!';
    cxExibirTxt.style.fontSize = '1rem';

    document.getElementById('texto').value = textoCopiado;
});

function exibirBotaoCopiar() {
    let btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.style.display = 'inline-block';
}

document.getElementById('btn-crip').addEventListener('click', function () {
    let texto = document.getElementById('texto').value.trim();
    if (!validarEExibirAviso(texto)) {
        return;
    }
    let textoCriptografado = criptografarTexto(texto);
    document.getElementById('cx-exibir-txt').textContent = textoCriptografado;
    exibirBotaoCopiar();
});

document.getElementById('btn-desc').addEventListener('click', function () {
    let textoCriptografado = document.getElementById('texto').value.trim();
    if (!validarEExibirAviso(textoCriptografado)) {
        return;
    }
    let textoOriginal = descriptografarTexto(textoCriptografado);
    document.getElementById('cx-exibir-txt').textContent = textoOriginal;
    exibirBotaoCopiar();
});