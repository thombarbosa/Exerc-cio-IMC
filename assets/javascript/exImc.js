function calcularIMC() {

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    if (!peso) {
        alert(`Peso inválido!`);
    }

    if (!altura) {
        alert(`Altura inválida!`);
    }

    if (peso && altura) {
        const imc = (peso / (altura ** 2)).toFixed(2);
        if (imc < 18.5) {
            setResultado(`<p>Seu IMC é: ${imc}  -  Abaixo do peso</p>`);
        } else if (imc >= 18.5 && imc <= 24.9) {
            setResultado(`<p class="bom">Seu IMC é: ${imc}  -  Peso normal</p>`);
        } else if (imc >= 25 && imc <= 29.9) {
            setResultado(`<p>Seu IMC é: ${imc}  -  Sobrepeso </p>`);
        } else if (imc >= 30 && imc <= 34.9) {
            setResultado(`<p>Seu IMC é: ${imc}  -  Obesidade grau 1</p>`);
        } else if (imc >= 35 && imc <= 39.9) {
            setResultado(`<p>Seu IMC é: ${imc}  -  Obesidade grau 2</p>`);
        } else if (imc >= 40) {
            setResultado(`<p>Seu IMC é: ${imc}  -  Obesidade grau 3</p>`);
        }
    } else {
        alert('Por favor, insira peso e altura válidos.')
    }
}

function setResultado(msg) {
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = msg;
}