import React, { useState, useEffect } from "react";
import "./EnterPlayers.css";
import Header from "../../components/Header/Header";

const EnterPlayers = () => {
  const [playerData, setPlayerData] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [playersPerShift, setPlayersPerShift] = useState(3);

  // Load player data from localStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("playerData")) || [];
    if (storedData.length > 0) {
      setPlayerData(storedData);
    }
    const storedShift = localStorage.getItem("playersPerShift");
    if (storedShift) {
      setPlayersPerShift(parseInt(storedShift, 10));
    }
  }, []);

  const handlePlayerChange = (index, value) => {
    const updatedData = [...playerData];
    updatedData[index] = value;
    setPlayerData(updatedData);
  };

  const addPlayer = () => {
    setPlayerData([...playerData, ""]);
  };

  const removePlayer = () => {
    if (playerData.length > 1) {
      setPlayerData(playerData.slice(0, -1));
    }
  };

  const handleNext = () => {
    const filteredData = playerData.filter((player) => player.trim() !== "");
    localStorage.setItem("playerData", JSON.stringify(filteredData));
    localStorage.setItem("playersPerShift", playersPerShift);
    window.location.href = "/ShiftOverview";
  };

  const handleShiftChange = (value) => {
    setPlayersPerShift(value);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="content">
          <p>Names of the players here:</p>
          <ul className="player-list">
            {playerData.map((player, index) => (
              <li key={index}>
                <input
                  type="text"
                  placeholder={`Player ${index + 1}`}
                  value={player}
                  onChange={(e) => handlePlayerChange(index, e.target.value)}
                />
              </li>
            ))}
          </ul>
          <div className="add-del-player-btn">
            <button onClick={removePlayer}>-1</button>
            <button onClick={addPlayer}>+1</button>
          </div>

          <div className="players-per-shift">
            <label>Players per Shift:</label>
            <button
              className={`players-per-shift-button ${
                playersPerShift === 3 ? "selected" : ""
              }`}
              onClick={() => handleShiftChange(3)}
            >
              3
            </button>
            <button
              className={`players-per-shift-button ${
                playersPerShift === 4 ? "selected" : ""
              }`}
              onClick={() => handleShiftChange(4)}
            >
              4
            </button>
          </div>
        </div>
      </main>
      <footer>
        <a href="/" id="backButton">
          ← Back
        </a>
        <button id="nextButton" onClick={handleNext}>
          Next →
        </button>
      </footer>
    </div>
  );
};

export default EnterPlayers;
