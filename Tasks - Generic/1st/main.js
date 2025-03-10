document.getElementById("submit").addEventListener("click", function () {
    let num = parseInt(document.getElementById("number").value);
    let outputDiv = document.getElementById("patternOutput");
    
    if (num < 2) {
        outputDiv.innerHTML = `${num} is not a prime number`;
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) { // Only check up to sqrt(num)
        if (num % i === 0) {
            isPrime = false;
            break; // Stop checking after finding the first divisor
        }
    }

    outputDiv.innerHTML = isPrime 
        ? `${num} is a prime number` 
        : `${num} is not a prime number`;
});
