// Duvidas: porque ele nao envia de primeira e pq o id eh gerado sozinho

document.getElementById("myForm").addEventListener("submit", envio);

function envio() {

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/usuarios', true);

    xhr.setRequestHeader("Content-Type", "application/json"); 

    var data = JSON.stringify({"nome":nome,"sobrenome":sobrenome});

    xhr.send(data);

}