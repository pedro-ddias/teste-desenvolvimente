
function soma() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('resultado1').value = resultado;
}

function limpa() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('resultado1').value = "";
}