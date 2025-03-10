document.getElementById("submit").addEventListener("click",function() {
    let num = parseInt(document.getElementById("number").value);
    let outputDiv = document.getElementById("patternOutput");
    
    if (num%2==0) {
        outputDiv.innerHTML = `${num} is Even`;
    }else{
        outputDiv.innerHTML = `${num} is Odd`;
    }
});

