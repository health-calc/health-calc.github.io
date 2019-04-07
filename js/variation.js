function count() {
    variation();
    error();
}

function variation() {
    if (document.getElementsByClassName('variation__output-variationCoeff').length != 0) {
        document.getElementsByClassName('variation__output-variationCoeff')[0].remove();
    }

    let average = Number(document.getElementById('variation__form-input-average').value);
    let variation = Number(document.getElementById('variation__form-input-variation').value);
    let form = document.getElementById('variation__form');

    let variationCoeff = (variation/average)*100;

    let output = document.createElement('div');

    output.classList.add('variation__output-variationCoeff');
    output.classList.add('variation__output');
    output.innerHTML=`Коэффициент вариации: ${variationCoeff}%`;
    form.appendChild(output);
}

function error() {
    if (document.getElementsByClassName('variation__output-error').length != 0) {
        document.getElementsByClassName('variation__output-error')[0].remove();
    }

    let variation = Number(document.getElementById('variation__form-input-variation').value);
    let count = Number(document.getElementById('variation__form-input-count').value);
    let form = document.getElementById('variation__form');

    let error = variation/Math.pow(count, 1/2);

    let output = document.createElement('div');

    output.classList.add('variation__output-error');
    output.classList.add('variation__output');
    output.innerHTML=`Ошибка среднего арифметического: ${error}`;
    form.appendChild(output);
}