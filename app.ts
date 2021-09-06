let first = document.getElementById('numero1') as HTMLInputElement; 
let second = document.getElementById('numero2') as HTMLInputElement;
let button = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function calcular(n1, n2) {
    return  n1 + n2;
}

button.addEventListener('click', function () {
    resultado.innerHTML = calcular(first.value, second.value)
});