const contagem = new Promise((resolve, reject) => {
    for (i = 10; i > 0; i--) {
        console.log(i);
    }

    resolve("Feliz ano novo!");
});

contagem.then((value) => {
    return console.log(value);
});