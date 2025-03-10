// Pattern 1
function solidSquare() {
    let pattern = "";
    for (let i = 0; i < 5; i++) {
        pattern += "* ".repeat(5) + "\n";
    }
    return pattern;
}

// Pattern 2
function leftTriangle() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        pattern += "* ".repeat(i) + "<br>";
    }
    return pattern;
}

// Pattern 3
function rightTriangle() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        pattern += "&nbsp;".repeat((5 - i) * 2) + "* ".repeat(i) + "<br>";
    }
    return pattern;
}

// Pattern 4
function invertedTriangle() {
    let pattern = "";
    for (let i = 5; i >= 1; i--) {
        pattern += "* ".repeat(i) + "<br>";
    }
    return pattern;
}

// Pattern 5
function pyramid() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        pattern += " ".repeat(5 - i) + "* ".repeat(i) + "\n";
    }
    return pattern;
}

// Pattern 6
function invertedPyramid() {
    let pattern = "";
    for (let i = 5; i >= 1; i--) {
        pattern += " ".repeat(5 - i) + "* ".repeat(i) + "\n";
    }
    return pattern;
}

// Pattern 7
function diamond() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        pattern += " ".repeat(5 - i) + "* ".repeat(i) + "\n";
    }
    for (let i = 5 - 1; i >= 1; i--) {
        pattern += " ".repeat(5 - i) + "* ".repeat(i) + "\n";
    }
    return pattern;
}

// Pattern 8
function damru() {
    let pattern = "";
    for (let i = 5; i >= 1; i--) {
        pattern += " ".repeat(5 - i) + "* ".repeat(i) + "\n";
    }
    for (let i = 1; i <= 5; i++) {
        pattern += " ".repeat(5 - i) + "* ".repeat(i) + "\n";
    }
    return pattern;
}

// Pattern 9
function pascalTriangle() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        pattern += "* ".repeat(i) + "\n";
    }
    for (let i = 5 - 1; i >= 1; i--) {
        pattern += "* ".repeat(i) + "\n";
    }
    return pattern;
}

// Pattern10
function hollowPyramid() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        pattern += " ".repeat(5 - i) + "*".repeat(i) + "\n";
    }
    for (let i = 4; i >= 1; i--) {
        pattern += " ".repeat(5 - i) + "*".repeat(i) + "\n";
    }
    return pattern;
}

// Store function references, NOT their execution
const patterns = [solidSquare, leftTriangle, rightTriangle, invertedTriangle, pyramid, invertedPyramid, diamond, damru, pascalTriangle, hollowPyramid];

// Function to generate and display patterns
document.getElementById("generateBtn").addEventListener("click", function () {
    let num = parseInt(document.getElementById("numberInput").value);
    let outputDiv = document.getElementById("patternOutput");

    if (num < 1 || num > 10 || isNaN(num)) {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter a number between 1 and 10.</p>";
        return;
    }

    outputDiv.innerHTML = "";
    for (let i = 0; i < num; i++) {
        outputDiv.innerHTML += `<h3>Pattern ${i + 1}</h3><pre>${patterns[i](num)}</pre>`;
    }
});
