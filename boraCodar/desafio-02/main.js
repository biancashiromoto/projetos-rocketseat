//Utilizei as respostas a este post como referência: https://stackoverflow.com/questions/12225843/toggle-image-src-attribute-using-

const botaoGirar = document.querySelector('.botao-girar');
let botaoX = document.querySelector('#botao-x');
let botao360 = document.querySelector('#botao-360');
let imagemSofa = document.querySelector('#imagem-sofa');
let inicioGiraSofa = false;

botaoGirar.addEventListener('click', () => {
    trocaBotao();
    giraSofa();a
})

function giraSofa() {
    if(inicioGiraSofa === true) {
        imagemSofa.src = 'assets/img/sofa-frente.png';
    } else {
        imagemSofa.src = 'assets/img/sofa-girando.gif';
    }
    inicioGiraSofa = !inicioGiraSofa;
}

function trocaBotao() {
    if(botao360.style.display !== 'none') {
        botao360.style.display = 'none';
        botaoX.style.display = 'inline';
    } else {
        botao360.style.display = 'inline';
        botaoX.style.display = 'none';
    }
}



