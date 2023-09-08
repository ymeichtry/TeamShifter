// This function runs only when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function () {

    // JavaScript function to add another input field
    document.getElementById("addPlayerInput").addEventListener("click", function () {
        console.log("plus input"); // Log message

        const playerList = document.getElementById("playerList");

        // Create a new list item and an input field
        const listItem = document.createElement("li");
        const input = document.createElement("input");

        // Set properties of the input field
        input.type = "text";
        input.placeholder = "Player " + (playerList.childElementCount + 1);

        // Add the input field to the list item and the list item to the player list
        listItem.appendChild(input);
        playerList.appendChild(listItem);
    });

    // JavaScript function to remove an input field
    document.getElementById("deletePlayerInput").addEventListener("click", function () {
        console.log("minus input"); // Log message

        const playerList = document.getElementById("playerList");
        const lastItem = playerList.lastElementChild;

        // Check if there is at least one input field before removing one
        if (playerList.childElementCount > 1) {
            playerList.removeChild(lastItem);
        }
    });
});

// Funktion zum Weiterleiten an die nächste Seite
document.getElementById("nextButton").addEventListener("click", function () {
    // Holen Sie sich die eingegebenen Spieler und konvertieren Sie sie in ein Array
    const players = [];
    for (let i = 1; i <= 10; i++) {
        const playerName = document.querySelector(`#player${i}`).value;
        if (playerName.trim() !== '') {
            players.push(playerName);
        }
    }

    // Konvertieren Sie das Array in einen JSON-String
    const playersJSON = JSON.stringify(players);

    // Speichern Sie den JSON-String im versteckten Feld
    document.getElementById("playerList").value = playersJSON;

    // Navigieren Sie zur nächsten Seite
    window.location.href = "../ShiftOverview/shiftoverview.html";
});