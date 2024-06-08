function checkOddEven() {
    const input = document.getElementById('oddEvenInput').value;

    if (input.includes(',') || input.includes('.')) {
        alert("Por favor, digite um valor válido sem vírgula ou ponto decimal.");
        return;
    }

    const number = parseFloat(input);

    if (isNaN(number)) {
        alert("Por favor, digite um valor válido.");
        return;
    }

    const result = (number % 2 === 0) ? 'Par' : 'Ímpar';
    document.getElementById('oddEvenResult').textContent = `O número ${number} é ${result}.`;
}

function checkPrime() {
    const input = document.getElementById('primeInput').value;

    if (input.includes(',') || input.includes('.')) {
        alert("Por favor, digite um valor válido sem vírgula ou ponto decimal.");
        return;
    }

    const number = parseFloat(input);

    if (isNaN(number) || number <= 1) {
        alert("Por favor, digite um valor válido maior que 1.");
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById('primeResult').textContent = `O número ${number} ${isPrime ? 'é' : 'não é'} primo.`;
}

function calculateGCD() {
    const input1 = document.getElementById('gcdInput1').value;
    const input2 = document.getElementById('gcdInput2').value;

    if (input1.includes(',') || input1.includes('.') || input2.includes(',') || input2.includes('.')) {
        alert("Por favor, digite valores válidos sem vírgula ou ponto decimal.");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2) || num1 === 0 || num2 === 0) {
        alert("Por favor, digite valores válidos diferentes de zero.");
        return;
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const result = gcd(num1, num2);
    document.getElementById('gcdResult').textContent = `O MDC de ${num1} e ${num2} é ${result}.`;
}

function calculateLCM() {
    const input1 = document.getElementById('lcmInput1').value;
    const input2 = document.getElementById('lcmInput2').value;

    if (input1.includes(',') || input1.includes('.') || input2.includes(',') || input2.includes('.')) {
        alert("Por favor, digite valores válidos sem vírgula ou ponto decimal.");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2) || num1 === 0 || num2 === 0) {
        alert("Por favor, digite valores válidos diferentes de zero.");
        return;
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const lcm = Math.abs(num1 * num2) / gcd(num1, num2);
    document.getElementById('lcmResult').textContent = `O MMC de ${num1} e ${num2} é ${lcm}.`;
}

function rollDie(sides) {
    if (isNaN(sides) || sides <= 0) {
        alert("Por favor, digite um número válido maior que zero.");
        return;
    }

    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('diceResult').textContent = `O resultado do dado de ${sides} lados é ${result}.`;
}

function showLoadingMessage() {
    const loaderContainer = document.querySelector('.loader-container');
    const loadingMessage = document.querySelector('.loading-message');

    loaderContainer.style.display = 'flex'; 
    loadingMessage.style.opacity = '1'; 
}
function hideLoadingMessage() {
    const loaderContainer = document.querySelector('.loader-container');
    const loadingMessage = document.querySelector('.loading-message');

    loaderContainer.style.display = 'none'; 
    loadingMessage.style.opacity = '0'; 
}
showLoadingMessage(); 
setTimeout(() => {
    hideLoadingMessage(); 
}, 3000);
