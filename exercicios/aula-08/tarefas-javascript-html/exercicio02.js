// Crie um arrow function que recebe um numero e vereficca se eh primo

primo = num => {

    // Deixei esse primeiro para a funcao funcionar, assim excluo o unico numero primo par e sei que todos os demais numeros pares
    // nao serao primos
    if (num == 2) {
        console.log("Primo.")
        return;
    }

    // Se o numero for maior que dois, devemos checar se ele eh dividido por algum outro numero de 2 ate ele mesmo (excluindo a si)
    if (num > 2) {
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log("Composto.");
                return;
            }
        } 

        // caso nao tenha retornado, significa que nao e divisivel por nenhum outro numero, sendo entao um numero primo
        console.log("Primo.");

    } else {
        console.log("Nao primo.") // caso nos escolhamos um numero menor que 2, ele nao sera primo, mesmo nao sendo composto
    }
}

primo(6);