function firstPattern() {
    let pattern = "";
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function secondPattern() {
    let pattern = "";
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            pattern += i + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function thirdpattern() {
    let pattern = "";
    let num = 1;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += num + " ";
            num++;
        }
        pattern += "\n";
    }
    return pattern;
}

function fourthPattern() {
    let pattern = "";
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        pattern += "\n";
    }
    return pattern;
}

function fifthPattern() {
    
    let pattern="";
    for (let i = 1; i <= 5; i++) {
        
        for (let space = 1; space <= 5 - i; space++) {
            pattern += " ";
        }
       
        for (let j = 1; j <= (2 * i - 1); j++) {
            pattern += j;
        }
        pattern += "\n"; // Move to the next line
    }

    return pattern;
}

function sixthPattern() {
    let pattern="";
    for (let i = 1; i <= 3; i++) {
        
        for (let space = 1; space <= 3 - i; space++) {
            pattern += " ";
        }
        
        for (let j = 1; j <= (2 * i - 1); j++) {
            pattern += j;
        }
        pattern += "\n"; // Move to the next line
    }

    return pattern;
}

function seventhPattern(){
    let pattern="";
    for (let i = 1; i <= 5; i++) {
        
        for (let space = 1; space <= 5 - i; space++) {
            pattern += " ";
        }
       
        for (let j = 1; j <= (2 * i - 1); j++) {
            pattern += j;
        }

        pattern += "\n"; // Move to the next line"
    }
    for (let i = 4; i >= 1; i--) {
        
        for (let space = 1; space <= 5 - i; space++) {
            pattern += " ";
        }
       
        for (let j = 1; j <= (2 * i - 1); j++) {
            pattern += j;
        }
        
        pattern += "\n"; // Move to the next line
    }

    return pattern;
}

// Store function references, NOT their execution
const patterns = [firstPattern, secondPattern, thirdpattern, fourthPattern, fifthPattern,sixthPattern,seventhPattern];

// Function to generate and display patterns
document.getElementById("generateBtn").addEventListener("click", function () {
    let num = parseInt(document.getElementById("numberInput").value);
    let outputDiv = document.getElementById("patternOutput");

    if (num < 1 || num > 7 || isNaN(num)) {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter a number between 1 and 07.</p>";
        return;
    }

    outputDiv.innerHTML = "";
    for (let i = 0; i < num; i++) {
        outputDiv.innerHTML += `<h3>Pattern ${i + 1}</h3><pre>${patterns[i](num)}</pre>`;
    }
});
