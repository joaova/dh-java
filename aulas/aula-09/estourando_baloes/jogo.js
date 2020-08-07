function iniciaJogo() {

    let url = window.location.search;

    let nivel_jogo = url.replace("?", "");

    let tempo_segundos = 0;

    if(nivel_jogo == 1) {
        tempo_segundos = 120;
    }

    if(nivel_jogo == 2) {
        tempo_segundos = 60;
    }

    if(nivel_jogo == 3) {
        tempo_segundos = 30;
    }


    document.getElementById('cronometro').innerHTML = tempo_segundos;

    let quantidade_baloes = 20;

    document.getElementById('baloes_inteiros').innerHTML = quantidade_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

    cria_baloes(quantidade_baloes);

    contagem_tempo(tempo_segundos + 1);
}

function cria_baloes(quantidade_baloes) {

    for(let i = 1; i <= quantidade_baloes; i++) {

        let balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b' + i;
        balao.onclick = function() {
            estourar(this);
        }

        document.getElementById('cenario').appendChild(balao);
    }
}

var timerId = null;

function contagem_tempo(segundos) {

    segundos = segundos -1;

    if(segundos == -1) {
        clearTimeout(timerId);
        game_over();
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;

    timerId = setTimeout("contagem_tempo("+segundos+")", 1000);

}

function game_over() {
    remove_eventos_baloes();
    alert("Voce perdeu! O tempo acabou!");
}

function estourar(img) {

    let id_balao = img.id;

    document.getElementById(id_balao).setAttribute("onclick","");
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png'
    pontuacao();

}

function pontuacao() {
    let baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    let baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);

    baloes_inteiros--;
    baloes_estourados++;


    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros) {
    if(baloes_inteiros == 0) {
        alert('Parabens, voce conseguiu estourar todos os baloes!');
        parar_jogo();
    }
}

function parar_jogo() {
    clearTimeout(timerId);
}

function remove_eventos_baloes() {
    let i = 1;

    while(document.getElementById('b' + i)) {
        document.getElementById('b' + i).onclick = "";
        i++;
    }
}