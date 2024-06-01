document.addEventListener("DOMContentLoaded", function () {
    function savePlayerData() {
        const playerData = [];
        const playerListItems = document.querySelectorAll(".player-list input");

        playerListItems.forEach(function (item) {
            if (item.value.trim() !== '') { 
                playerData.push(item.value);
            }
        });

        console.log("Spielerdaten vor dem Speichern:", playerData);

        localStorage.setItem('playerData', JSON.stringify(playerData));

        console.log("Spielerdaten nach dem Speichern:", JSON.parse(localStorage.getItem('playerData')));
    }

    document.getElementById("nextButton").addEventListener("click", function () {
        savePlayerData();
        window.location.href = "../ShiftOverview/shiftoverview.html";
    });

    document.getElementById("addPlayerInput").addEventListener("click", function () {
        console.log("plus input"); 

        const playerList = document.getElementById("playerList");

        const listItem = document.createElement("li");
        const input = document.createElement("input");

        input.type = "text";
        input.placeholder = "Player " + (playerList.childElementCount + 1);

        listItem.appendChild(input);
        playerList.appendChild(listItem);
    });

    document.getElementById("deletePlayerInput").addEventListener("click", function () {
        console.log("minus input"); 

        const playerList = document.getElementById("playerList");
        const lastItem = playerList.lastElementChild;

        if (playerList.childElementCount > 1) {
            playerList.removeChild(lastItem);
        }
    });

    function setPlayersPerShift(value) {
        const button3 = document.getElementById("playersPerShift3");
        const button4 = document.getElementById("playersPerShift4");

        if (value === 3) {
            button3.classList.add("selected");
            button4.classList.remove("selected");
        } else {
            button3.classList.remove("selected");
            button4.classList.add("selected");
        }

        localStorage.setItem('playersPerShift', value);
    }

    document.getElementById("playersPerShift3").addEventListener("click", function () {
        setPlayersPerShift(3);
    });

    document.getElementById("playersPerShift4").addEventListener("click", function () {
        setPlayersPerShift(4);
    });
});
