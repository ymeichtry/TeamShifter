// JavaScript function to load player data from Local Storage
function loadPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    return playerData || []; // Return the stored data or an empty array
}

document.addEventListener("DOMContentLoaded", function () {
    const shiftsContainer = document.getElementById("shiftsContainer");
    let playerData = loadPlayerData(); // Load player data
    const playersPerShift = 3; // Set the number of players per shift here
    let currentShiftIndex = 0; // Track the current shift index
    let shiftCount; // Define shiftCount here

    // Function to generate shifts
    function generateShifts() {
        shiftsContainer.innerHTML = ''; // Clear the content of the container

        shiftCount = Math.ceil(playerData.length / playersPerShift); // Calculate shiftCount here
        const currentShiftData = playerData.slice(currentShiftIndex * playersPerShift, (currentShiftIndex + 1) * playersPerShift);

        for (let j = 0; j < playersPerShift; j++) {
            const player = document.createElement("p");
            player.textContent = `${j + 1}. ${currentShiftData[j] || ''}`;
            shiftsContainer.appendChild(player);
        }
    }

    // Call the function to generate shifts initially
    generateShifts();

    // Event listener for the "Next Shift" button
    document.getElementById("nextShiftButton").addEventListener("click", function () {
        currentShiftIndex = (currentShiftIndex + 1) % shiftCount; // Increment the shift index and wrap around
        generateShifts(); // Regenerate shifts
    });
});
