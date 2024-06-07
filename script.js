function checkOddEven() {
    const number = parseInt(document.getElementById('oddEvenInput').value);
    const result = (number % 2 === 0) ? 'Par' : 'Ímpar';
    document.getElementById('oddEvenResult').textContent = `O número ${number} é ${result}.`;
}

function checkPrime() {
    const number = parseInt(document.getElementById('primeInput').value);
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    document.getElementById('primeResult').textContent = `O número ${number} ${isPrime ? 'é' : 'não é'} primo.`;
}

function calculateGCD() {
    const num1 = parseInt(document.getElementById('gcdInput1').value);
    const num2 = parseInt(document.getElementById('gcdInput2').value);

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const result = gcd(num1, num2);
    document.getElementById('gcdResult').textContent = `O MDC de ${num1} e ${num2} é ${result}.`;
}

function calculateLCM() {
    const num1 = parseInt(document.getElementById('lcmInput1').value);
    const num2 = parseInt(document.getElementById('lcmInput2').value);

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const lcm = Math.abs(num1 * num2) / gcd(num1, num2);
    document.getElementById('lcmResult').textContent = `O MMC de ${num1} e ${num2} é ${lcm}.`;
}

function rollDie(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('diceResult').textContent = `O resultado do dado de ${sides} lados é ${result}.`;
}
