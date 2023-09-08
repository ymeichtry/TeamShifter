document.addEventListener("DOMContentLoaded", function () {
    // Holen Sie sich die übergebene Anzahl der Spieler pro Schicht von Enter Players
    const playersPerShift = parseInt(sessionStorage.getItem("playersPerShift"));

    // Holen Sie sich die übergebene Spielerliste von Enter Players
    const players = JSON.parse(sessionStorage.getItem("playerList"));

    // Holen Sie sich den Container für die Schichten
    const shiftsContainer = document.getElementById("shiftsContainer");

    // Überprüfen Sie, ob sowohl playersPerShift als auch players vorhanden sind
    if (playersPerShift && players) {
        // Berechnen Sie die Anzahl der Schichten basierend auf der Spieleranzahl
        const totalShifts = Math.ceil(players.length / playersPerShift);

        // Schleife durch die Schichten
        for (let shift = 0; shift < totalShifts; shift++) {
            // Erstellen Sie ein neues Div für jede Schicht
            const shiftDiv = document.createElement("div");
            shiftDiv.classList.add("shift");

            // Erstellen Sie eine Überschrift für die Schicht
            const shiftHeading = document.createElement("h3");
            shiftHeading.textContent = `Shift ${shift + 1}`;
            shiftDiv.appendChild(shiftHeading);

            // Erstellen Sie eine Liste für die Spieler in dieser Schicht
            const playerList = document.createElement("ul");

            // Schleife durch die Spieler in dieser Schicht
            for (let i = shift * playersPerShift; i < (shift + 1) * playersPerShift && i < players.length; i++) {
                const playerItem = document.createElement("li");
                playerItem.textContent = players[i];
                playerList.appendChild(playerItem);
            }

            shiftDiv.appendChild(playerList);
            shiftsContainer.appendChild(shiftDiv);
        }
    }
});
