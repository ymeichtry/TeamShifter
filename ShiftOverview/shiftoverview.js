// JavaScript function to load player data from Local Storage
function loadPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    return playerData || []; // Return the stored data or an empty array
}

document.addEventListener("DOMContentLoaded", function () {
    const shiftsContainer = document.getElementById("shiftsContainer");
    const playerData = loadPlayerData(); // Load player data
    const playersPerShift = 3; // Set the number of players per shift here

    // Function to generate shifts
    function generateShifts() {
        shiftsContainer.innerHTML = ''; // Clear the content of the container

        for (let i = 0; i < playerData.length; i += playersPerShift) {
            const shift = document.createElement("div");
            shift.classList.add("shift");

            for (let j = i; j < i + playersPerShift && j < playerData.length; j++) {
                const player = document.createElement("p");
                player.textContent = `${j + 1}. ${playerData[j]}`;
                shift.appendChild(player);
            }

            shiftsContainer.appendChild(shift);
        }
    }

    // Call the function to generate shifts
    generateShifts();
});
