import React, { useState } from "react";

function Players() {
  const [xPlayerName, setXPlayerName] = useState("click to enter name");
  const [oPlayerName, setOPlayerName] = useState("click to enter name");
  return(
    <div className='players'>
      <div className="player-1" key="X">
        <button className='change-player-name' onClick={() => setXPlayerName(prompt("Please enter your name, Player X"))}>Player X - {xPlayerName}</button>
      </div>
      <div className='player-2' key="O">
        <button className='change-player-name' onClick={() => setOPlayerName(prompt("Please enter your name, Player O"))}>Player O - {oPlayerName}</button>
      </div>
    </div>
  );
}

export default Players;
