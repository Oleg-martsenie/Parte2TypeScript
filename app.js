var first = document.getElementById('numero1');
var second = document.getElementById('numero2');
var button = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function () {
    resultado.innerHTML = calcular(first.value, second.value);
});
