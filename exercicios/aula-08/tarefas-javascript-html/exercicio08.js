let alunos = [
    {
        nome: "Joãozinho",
        serie: "sétima"
    },
    {
        nome: "Maria",
        serie: "oitava"
    },
    {
        nome: "Otávio",
        serie: "sétima"
    },
    {
        nome: "Fernanda",
        serie: "oitava"
    },
    {
        nome: "Gabriel",
        serie: "sétima"
    }
];

for (let i = 0; i < alunos.length; i++) {

    if (alunos[i].serie == "oitava") {
        alunos[i].disciplinaDaQuarta = "Física";
    } else {
        alunos[i].disciplinaDaQuarta = "História";
    }
}

console.log(alunos);