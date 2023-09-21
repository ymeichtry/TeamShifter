document.addEventListener("DOMContentLoaded", function () {
// JavaScript-Funktion zum Speichern der Spielerdaten
function savePlayerData() {
    const playerData = [];
    const playerListItems = document.querySelectorAll(".player-list input");

    playerListItems.forEach(function (item) {
        if (item.value.trim() !== '') { // Überprüfe, ob das Feld nicht leer ist
            playerData.push(item.value);
        }
    });

    console.log("Spielerdaten vor dem Speichern:", playerData); // Hier hinzugefügt

    // Speichere die Spielerdaten im Local Storage
    localStorage.setItem('playerData', JSON.stringify(playerData));

    console.log("Spielerdaten nach dem Speichern:", JSON.parse(localStorage.getItem('playerData'))); // Hier hinzugefügt
}

    // Event-Listener für den "Next ->" Link
    document.getElementById("nextButton").addEventListener("click", function () {
        savePlayerData();
        window.location.href = "../ShiftOverview/shiftoverview.html";
    });

    // JavaScript-Funktion, um ein weiteres Input-Feld hinzuzufügen
    document.getElementById("addPlayerInput").addEventListener("click", function () {
        console.log("plus input"); // Log-Meldung

        const playerList = document.getElementById("playerList");

        // Erstellen Sie ein neues Listenelement und ein Input-Feld
        const listItem = document.createElement("li");
        const input = document.createElement("input");

        // Setzen Sie die Eigenschaften des Input-Felds
        input.type = "text";
        input.placeholder = "Player " + (playerList.childElementCount + 1);

        // Fügen Sie das Input-Feld dem Listenelement hinzu und das Listenelement der Spielerliste
        listItem.appendChild(input);
        playerList.appendChild(listItem);
    });

    // JavaScript-Funktion, um ein Input-Feld zu entfernen
    document.getElementById("deletePlayerInput").addEventListener("click", function () {
        console.log("minus input"); // Log-Meldung

        const playerList = document.getElementById("playerList");
        const lastItem = playerList.lastElementChild;

        // Überprüfen Sie, ob es noch mindestens ein Input-Feld gibt, bevor Sie eins entfernen
        if (playerList.childElementCount > 1) {
            playerList.removeChild(lastItem);
        }
    });
});
