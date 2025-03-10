document.getElementById('submit').addEventListener("click", function () {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let outputDiv = document.getElementById('patternOutput');

    // Function to calculate GCD using Euclidean algorithm
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Function to calculate LCM
    function lcm(a, b) {
        return Math.abs(a * b) / gcd(a, b);
    }

    let result = lcm(num1, num2);
    outputDiv.innerHTML = `LCM of ${num1} and ${num2} is: ${result}`;
});
