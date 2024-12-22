import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="content">
          <p>Welcome to the HomePage of TeamShifter</p>
          <div>
            <a href="/EnterPlayers" className="create-game">
              Create a new Game
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
