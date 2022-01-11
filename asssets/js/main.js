const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return
    }

    if (!altura) {
        setResultado('Altura invalida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc);
    const msg =  `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 
        'Sobrepeso', 'Obesidade grau I','Obesidade grau II', 'Obesidade mórbida'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}
    

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
   
    return imc.toFixed(2);
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }

    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;

    resultado.appendChild(p);
}

setResultado()