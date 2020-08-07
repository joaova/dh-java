var httpRequest;

function fazerRequisicao(url, destino) {

    document.getElementById(destino).innerHTML = "<center><img src='loader.gif'></center>";

    httpRequest = new XMLHttpRequest();

    if(window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                alert("Deu ruim");
                return false;
            }
        }
    }

    httpRequest.onreadystatechange = situacaoRequisicao;

    httpRequest.open("GET", url);
    httpRequest.send();
}

function situacaoRequisicao() {

    if(httpRequest.readyState == 4) {
        if(httpRequest.status == 200) {
            document.getElementById('div_conteudo').innerHTML = httpRequest.responseText;
        }
    }
}