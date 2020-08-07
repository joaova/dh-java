const contagem = new Promise((resolve, reject) => {
    for (i = 10; i > 0; i--) {
        console.log(i);
    }

    resolve("Feliz ano novo!");
});

const asyncFunction = async () => {
    try {
        const res = await contagem;
        console.log(res);
    }

    catch(err) {
        console.log(err);
    }
}

asyncFunction();