document.getElementById('btn').addEventListener('click', function () {
    let txt = document.getElementById('txt').value.trim(); 
    let outputDiv = document.getElementById('output');

    if (txt === "") {
        outputDiv.innerHTML = "Please enter a valid text!";
        return;
    }

    let capitalizedString = txt.charAt(0).toUpperCase() + txt.slice(1);
    outputDiv.innerHTML = capitalizedString;
});
