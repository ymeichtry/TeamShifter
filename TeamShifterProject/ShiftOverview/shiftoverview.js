function loadPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    return playerData || [];
}

document.addEventListener("DOMContentLoaded", function () {
    const shiftsContainer = document.getElementById("shiftsContainer");
    let playerData = loadPlayerData(); 
    let playersPerShift = parseInt(localStorage.getItem('playersPerShift')) || 3; 
    let currentShiftIndex = 0; 

    function generateShifts() {
        const shiftDiv = document.createElement("div");
        shiftsContainer.prepend(shiftDiv);

        shiftDiv.classList.add("Shift");

        const title = document.createElement("h3");
        title.textContent = `${currentShiftIndex + 1}. Shift`;
        shiftDiv.appendChild(title);

        const currentShiftData = [];

        for (let j = 0; j < playersPerShift; j++) {
            const player = document.createElement("p");
            currentShiftData.push(playerData[0]);
            player.textContent = `${j + 1}. ${currentShiftData[j] || ''}`;
            shiftDiv.appendChild(player);
            playerData.push(playerData.shift()); 
        }

        currentShiftIndex++;
    }

    generateShifts();

    document.getElementById("nextShiftButton").addEventListener("click", function () {
        generateShifts(); 
    });
});
