// Create an empty array to store player names.
let playerList = [];

// Assuming you have a button with the ID "saveButton" in your HTML.
document.getElementById("savePlayerButton").addEventListener("click", function () {
    // Iterate through the input fields for players from 1 to 10.
    for (let i = 1; i <= 10; i++) {
        let playerName = document.querySelector(`#player${i}`).value;
        playerList.push(playerName);
    }

    console.log("These are the players:")
    // Log the playerList array to the console.
    console.log(playerList);
});
