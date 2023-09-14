document.addEventListener("DOMContentLoaded", function () {
    // Function to save player data
    function savePlayerData() {
        const playerData = [];
        const playerListItems = document.querySelectorAll(".player-list input");

        playerListItems.forEach(function (item) {
            if (item.value.trim() !== '') { // Check if the field is not empty
                playerData.push(item.value);
            }
        });

        // Save player data in Local Storage
        localStorage.setItem('playerData', JSON.stringify(playerData));
    }

    // Event listener for the "Next ->" link
    document.getElementById("nextButton").addEventListener("click", function () {
        savePlayerData();
        window.location.href = "../ShiftOverview/shiftoverview.html";
    });

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
