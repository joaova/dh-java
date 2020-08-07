var situacao = 0;

function sayHello() {
    alert("Olá!");
}

function bgChange() {
    if(situacao == 0) {
        document.querySelector("body").style.backgroundColor = "blue";
        situacao++;
    } else {
        document.querySelector("body").style.backgroundColor = "white";
        situacao--;
    }
    

}

function deOlho() {
    console.log("estou de olho em vc");
}

function aoClicar() {
    console.log("Vc ta clicando na imagem");
    console.log(event.clientX, event.clientY);
}

// function bgChangeRed() {
//     this.style = "background-color: red";
// }

function erro() {
    alert("Nao foi possivel enviar");
}

document.getElementById("cumprimentar").onclick = sayHello;

document.getElementById("change-background").onclick = bgChange;

document.getElementById("olho").onmouseover = deOlho;

document.getElementById("clique").addEventListener("click", aoClicar);
document.getElementById("submit").onclick = erro;

// document.querySelector("body").addEventListener("click", bgChangeRed);

window.setTimeout(() => {
    alert("tempo esgotado!");
}, 10000);

window.setInterval(() => {
    alert("Hora do intervalo!");
}, 5000);