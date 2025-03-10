document.getElementById('submit').addEventListener("click", function () {
    let num = parseInt(document.getElementById('number').value);
    let outputDiv = document.getElementById('output');

    if (num < 0) {
        outputDiv.innerHTML = "Factorial is not defined for negative numbers";
        return;
    }

    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }

    outputDiv.innerHTML = `Factorial of ${num} is: ${fact}`;
});
