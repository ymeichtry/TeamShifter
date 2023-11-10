// JavaScript-Funktion zum Laden der Spielerdaten aus dem Local Storage
function loadPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    return playerData || [];
}

document.addEventListener("DOMContentLoaded", function () {
    const shiftsContainer = document.getElementById("shiftsContainer");
    let playerData = loadPlayerData(); // Load player data
    let playersPerShift = parseInt(localStorage.getItem('playersPerShift')) || 3; // Load the number of players per shift or set a default value
    let currentShiftIndex = 0; // Track the current shift index

    // Function to generate shifts
    function generateShifts() {
        const shiftDiv = document.createElement("div");
        shiftsContainer.prepend(shiftDiv);

        shiftDiv.classList.add("shift");

        const title = document.createElement("h3");
        title.textContent = `${currentShiftIndex + 1}. shift`;
        shiftDiv.appendChild(title);

        const currentShiftData = [];

        for (let j = 0; j < playersPerShift; j++) {
            const player = document.createElement("p");
            currentShiftData.push(playerData[0]);
            player.textContent = `${j + 1}. ${currentShiftData[j] || ''}`;
            shiftDiv.appendChild(player);
            playerData.push(playerData.shift()); // Verschieben des ersten Spielers ans Ende der Liste
        }

        currentShiftIndex++;
    }

    // Call the function to generate shifts initially
    generateShifts();

    // Event listener for the "Next Shift" button
    document.getElementById("nextShiftButton").addEventListener("click", function () {
        generateShifts(); // Regenerate shifts
    });
});
