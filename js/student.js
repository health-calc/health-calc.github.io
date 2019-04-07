function count() {
    if (document.getElementsByClassName('student__output-studentCoeff').length != 0) {
        document.getElementsByClassName('student__output-studentCoeff')[0].remove();
    }
    if (document.getElementsByClassName('student__output-fisherCoeff').length != 0) {
        document.getElementsByClassName('student__output-fisherCoeff')[0].remove();
    }

    let average1 = Number(document.getElementById('student__form-input-average1').value);
    let dispersion1 = Number(document.getElementById('student__form-input-dispersion1').value);
    let error1 = Number(document.getElementById('student__form-input-error1').value);

    let average2 = Number(document.getElementById('student__form-input-average2').value);
    let dispersion2 = Number(document.getElementById('student__form-input-dispersion2').value);
    let error2 = Number(document.getElementById('student__form-input-error2').value);

    let form = document.getElementById('student__form');

    let student = (average1 - average2)/(Math.pow(Math.pow(error1, 2) + Math.pow(error2, 2)), 1/2);

    let fisher;

    if (dispersion1 > dispersion2) {
        fisher = dispersion1/dispersion2;
    } else {
        fisher = dispersion2/dispersion1;
    }

    let outputStudent = document.createElement('div');

    outputStudent.classList.add('student__output-studentCoeff');
    outputStudent.classList.add('student__output');
    outputStudent.innerHTML=`Критерий Стьюдента: ${student}`;
    form.appendChild(outputStudent);

    let outputFisher = document.createElement('div');

    outputFisher.classList.add('student__output-fisherCoeff');
    outputFisher.classList.add('student__output');
    outputFisher.innerHTML=`Критерий Фишера: ${fisher}`;
    form.appendChild(outputFisher);
}