function calcular() {
    let operacao = document.getElementById('operacao').value;

    let num1 = document.getElementById('num1').value;

    let num2 = document.getElementById('num2').value;

    if (num1 == "" || num1 == null) {
        alert("insira um numero valido");
        return false;
    }

    if (num2 == "" || num2 == null) {
        alert("insira um numero valido");
        return false;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let resultado = null;

    switch(operacao) {
        case "1": 
            resultado = num1 - num2;
            break;
        case '2':
            resultado = num1 + num2;
            break;
        case '3':
            resultado = num1 * num2;
            break;
        case '4':
            resultado = num1 / num2;
            break;
    }

    document.getElementById('resultado').value = resultado;
}