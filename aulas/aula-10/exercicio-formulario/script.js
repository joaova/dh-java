// Duvidas: porque ele nao envia de primeira e pq o id eh gerado sozinho

document.getElementById("myForm").addEventListener("submit", validacao);

function validacao() {
    let senha = document.getElementById("senha").value;
    let senhaConf = document.getElementById("senha-conf").value;

    if senha
}

function envio() {

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let senha = document.getElementById("senha").value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/usuarios', true);

    xhr.setRequestHeader("Content-Type", "application/json"); 

    var data = JSON.stringify({"nome":nome,"sobrenome":sobrenome, "senha": senha});

    xhr.send(data);

}