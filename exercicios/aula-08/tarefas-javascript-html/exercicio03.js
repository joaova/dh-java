function contagem() {
    for (i = 10; i > 0; i--) {
        console.log(i);
    }
}

function regressiva(callback) {
    callback();
    console.log("Feliz ano novo!");
}

regressiva(contagem);