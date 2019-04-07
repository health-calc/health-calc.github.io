function creatingInputs() {
    let countOfInputs = document.getElementById('average__form-input-count').value;
    let inputsContainer = document.getElementById('average__inputs');

    inputsContainer.innerHTML = '';

    for (let i=0; i<Number(countOfInputs); i++) {
        let input = document.createElement('input');

        input.classList.add('average__input');
        input.classList.add('average__input-count');

        inputsContainer.appendChild(input);
    }
}

function count() {
    average();
    dispersion(average());
}

function average() {
    if (document.getElementsByClassName('average__output-average').length != 0) {
        document.getElementsByClassName('average__output-average')[0].remove();
    }

    let inputs = document.getElementsByClassName('average__input-count');
    let form = document.getElementById('average__form');

    let valuesSum = 0;
    let countSum = 0;

    for (let input of inputs) {
        valuesSum += Number(input.value);
        countSum += 1;
    }

    let average = valuesSum/countSum;

    let output = document.createElement('div');

    output.classList.add('average__output-average');
    output.classList.add('average__output');
    output.innerHTML=`Среднее aрифметическое: ${average}`;
    form.appendChild(output);

    return average;
}

function dispersion(average) {
    if (document.getElementsByClassName('average__output-dispersion').length != 0) {
        document.getElementsByClassName('average__output-dispersion')[0].remove();
    }
    if (document.getElementsByClassName('average__output-variation').length != 0) {
        document.getElementsByClassName('average__output-variation')[0].remove();
    }

    let inputs = document.getElementsByClassName('average__input-count');
    let form = document.getElementById('average__form');
    
    let sqrtSum = 0;
    let countSum = 0;

    for (let input of inputs) {
        sqrtSum += Math.pow((Number(input.value)-average), 2);
        countSum += 1;
    }
    
    let dispersion;

    if (countSum <= 30) {
        dispersion = sqrtSum/(countSum-1)
    } else {
        dispersion = sqrtSum/countSum;
    }

    let outputDispersion = document.createElement('div');

    outputDispersion.classList.add('average__output-dispersion');
    outputDispersion.classList.add('average__output');
    outputDispersion.innerHTML=`Дисперсия: ${dispersion}`;
    form.appendChild(outputDispersion);

    let variation = Math.pow(dispersion, 1/2);

    let outputVariation = document.createElement('div');

    outputVariation.classList.add('average__output-variation');
    outputVariation.classList.add('average__output');
    outputVariation.innerHTML=`Среднеквадратическое отклонение: ${variation}`;
    form.appendChild(outputVariation);
}