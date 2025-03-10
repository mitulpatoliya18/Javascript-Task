
function solidSquare() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < i; j++) {
            pattern += String.fromCharCode(65 + j) + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function leftTriangle() {
    let pattern = "";
    for (let i = 0; i < 5; i++) {
        pattern += (String.fromCharCode(65 + i) + " ").repeat(i + 1) + "\n";
    }
    return pattern;
}

function rightTriangle() {
    let pattern = "";
    let charCode = 65; // Start with 'A'
    let count = 1;

    for (let i = 1; count <= 5 * (5 + 1) / 2; i++) {
        for (let j = 0; j < i && count <= 5 * (5 + 1) / 2; j++) {
            pattern += String.fromCharCode(charCode++) + " ";
            count++;
        }
        pattern += "\n";
    }
    return pattern;
}

function invertedTriangle() {
    let pattern = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            pattern += String.fromCharCode(65 + j) + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function pyramid() {
    let pattern = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 5 - 1; j >= i; j--) {
            pattern += String.fromCharCode(65 + j) + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function invertedPyramid() {
    let pattern = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 5 - 1 - i; j >= 0; j--) {
            pattern += String.fromCharCode(65 + j) + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

// 7. Diamond
function diamond() {
    let pattern = "";
    for (let i = 0; i < 5; i++) {
        // Print leading spaces
        pattern += " ".repeat(5 - i - 1);

        // Print alphabets
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += String.fromCharCode(65 + j) + "";
        }

        pattern += "\n";
    }
    return pattern;
}


// 8. Damru Shape
function damru() {
    let pattern = "";
    let charCode = 65; // ASCII value of 'A'

    for (let i = 0; i < 5; i++) {
        // Print leading spaces
        pattern += " ".repeat((5 - i - 1) * 2);

        // Print increasing alphabets
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += String.fromCharCode(charCode) + " ";
            charCode++; // Move to next alphabet
        }

        pattern += "\n";
    }
    return pattern;
}


// Store function references, NOT their execution
const patterns = [solidSquare, leftTriangle, rightTriangle, invertedTriangle, pyramid, invertedPyramid, diamond, damru];

// Function to generate and display patterns
document.getElementById("generateBtn").addEventListener("click", function () {
    let num = parseInt(document.getElementById("numberInput").value);
    let outputDiv = document.getElementById("patternOutput");

    if (num < 1 || num > 8 || isNaN(num)) {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter a number between 1 and 08.</p>";
        return;
    }

    outputDiv.innerHTML = "";
    for (let i = 0; i < num; i++) {
        outputDiv.innerHTML += `<h3>Pattern ${i + 1}</h3><pre>${patterns[i](num)}</pre>`;
    }
});
