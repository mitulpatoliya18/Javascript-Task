document.getElementById('btn').addEventListener('click', function () {
    let txt = document.getElementById('txt').value.trim();
    let outputDiv = document.getElementById('output');

    if (txt === "") {
        outputDiv.innerHTML = "Please enter a valid text!";
        return;
    }

    let result = checkPalindrome(txt);
    outputDiv.innerHTML = result;
});
function checkPalindrome(string) {
    // Convert to lowercase and remove spaces/special characters
    let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let len = cleanString.length;

    for (let i = 0; i < len / 2; i++) {
        if (cleanString[i] !== cleanString[len - 1 - i]) {
            return `"${string}" is NOT a palindrome`;
        }
    }
    return `"${string}" is a Palindrome`;
}