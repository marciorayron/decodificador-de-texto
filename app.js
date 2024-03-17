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