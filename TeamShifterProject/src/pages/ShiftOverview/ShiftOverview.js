import React, { useState, useEffect } from "react";
import "./ShiftOverview.css";
import Header from "../../components/Header/Header";

const ShiftOverview = () => {
  const [playerData, setPlayerData] = useState([]);
  const [playersPerShift, setPlayersPerShift] = useState(3);
  const [currentShiftIndex, setCurrentShiftIndex] = useState(0);
  const [shifts, setShifts] = useState([]);

  // Load player data from localStorage when the component mounts
  useEffect(() => {
    const savedPlayerData = JSON.parse(localStorage.getItem("playerData")) || [];
    setPlayerData(savedPlayerData);

    const savedPlayersPerShift = parseInt(localStorage.getItem("playersPerShift"), 10) || 3;
    setPlayersPerShift(savedPlayersPerShift);
  }, []);

  const generateShift = () => {
    if (playerData.length === 0) return;

    const currentShiftData = [];
    const updatedPlayerData = [...playerData];

    for (let i = 0; i < playersPerShift; i++) {
      if (updatedPlayerData.length > 0) {
        currentShiftData.push(updatedPlayerData[0]);
        updatedPlayerData.push(updatedPlayerData.shift());
      }
    }

    const newShift = {
      title: `${currentShiftIndex + 1}. Shift`,
      players: currentShiftData,
    };

    setShifts((prevShifts) => [newShift, ...prevShifts]);
    setPlayerData(updatedPlayerData);
    setCurrentShiftIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="content">
          <h2>Shift Overview</h2>
          <div className="shifts">
            {shifts.map((shift, index) => (
              <div key={index} className="Shift">
                <h3>{shift.title}</h3>
                {shift.players.map((player, idx) => (
                  <p key={idx}>
                    {idx + 1}. {player || ""}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button onClick={generateShift} id="nextShiftButton">
          Next Shift
        </button>
      </main>
      <footer>
        <a href="/EnterPlayers" id="backButton">
          ← Back
        </a>
      </footer>
    </div>
  );
};

export default ShiftOverview;
