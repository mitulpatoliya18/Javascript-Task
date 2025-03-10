let outputDiv = document.getElementById('output');


let users = [
    { id: 1, name: "john" },
    { id: 2, name: "kristine" },
    { id: 3, name: "norman" }
];


const updateUser = (id, newName) => {
    users = users.map(user => 
        user.id === id ? { ...user, name: newName } : user
    );
    displayUsers();
};


const displayUsers = () => {
    outputDiv.innerHTML = users.map(user => 
        `<p>ID: ${user.id} - Name: ${user.name}</p>`
    ).join("");
};


document.getElementById('updateBtn').addEventListener('click', function () {
    let userId = parseInt(document.getElementById('userId').value);
    let newName = document.getElementById('newName').value.trim();

    if (!userId || newName === "") {
        outputDiv.innerHTML = "Please enter a valid User ID and Name!";
        return;
    }

    updateUser(userId, newName);
});

displayUsers();
