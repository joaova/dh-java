let listaCompras = [
    {
        item: "banana",
        preço: 2
    },
    {
        item: "brócolis",
        preço: 3
    },
    {
        item: "pastaAmendoim",
        preço: 16
    },
    {
        item: "leiteSoja",
        preço: 6
    },
    {
        item: "kabotia",
        preço: 4
    },
    {
        item: "macarrão",
        preço: 1.79
    },
];

console.log(Object.values(listaCompras.map(listaCompras => listaCompras.preço)).reduce((item, valorAtual) => item + valorAtual));