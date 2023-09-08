// JavaScript-Funktion zum Laden der Spielerdaten aus dem Local Storage
function loadPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('playerData'));
    return playerData || []; // Rückgabe der gespeicherten Daten oder eines leeren Arrays
}

document.addEventListener("DOMContentLoaded", function () {
    const shiftsContainer = document.getElementById("shiftsContainer");
    const playerData = loadPlayerData(); // Laden der Spielerdaten
    const playersPerShift = 3; // Hier die Anzahl der Spieler pro Schicht einstellen

    // Funktion zum Generieren der Schichten
    function generateShifts() {
        shiftsContainer.innerHTML = ''; // Löschen Sie den Inhalt des Containers

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

    // Rufen Sie die Funktion auf, um die Schichten zu generieren
    generateShifts();
});
