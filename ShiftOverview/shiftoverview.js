// JavaScript-Funktion zum Laden der Spielerdaten aus dem Local Storage
function loadPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    return playerData || []; // Return the stored data or an empty array
}

document.addEventListener("DOMContentLoaded", function () {
    const shiftsContainer = document.getElementById("shiftsContainer");
    let playerData = loadPlayerData(); // Load player data
    const playersPerShift = 3; // Set the number of players per shift here
    let currentShiftIndex = 0; // Track the current shift index

    // Function to generate shifts
    function generateShifts() {
        shiftsContainer.innerHTML = ''; // Clear the content of the container

        const currentShiftData = [];

        for (let j = 0; j < playersPerShift; j++) {
            const player = document.createElement("p");
            currentShiftData.push(playerData[currentShiftIndex]);
            player.textContent = `${j + 1}. ${currentShiftData[j] || ''}`;
            shiftsContainer.appendChild(player);
            currentShiftIndex = (currentShiftIndex + 1) % playerData.length; // Circular rotation
        }
    }

    // Call the function to generate shifts initially
    generateShifts();

    // Event listener for the "Next Shift" button
    document.getElementById("nextShiftButton").addEventListener("click", function () {
        generateShifts(); // Regenerate shifts
    });
});
