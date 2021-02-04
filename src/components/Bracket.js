import { useState } from "react";
import RoundPart from "./RoundPart";

const space = "\u00a0";

function BracketView() {
  const [bracket, setBracket] = useState([]);
  const setTeam = (round, match, team) => {
    const newBracket = JSON.parse(JSON.stringify(bracket));
    newBracket[round + 1][Math.floor(match / 2)][match % 2] = team;
    setBracket(newBracket);
  }
  if (bracket.length === 0) {
    console.log("Setting up initial bracket");
    const startingRound = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [27, 28], [29, 30], [31, 32]];
    const newBracket = [startingRound];
    let numberInRound = startingRound.length;
    while(numberInRound >= 1) {
      numberInRound = numberInRound / 2;
      let round;
      if (numberInRound > 1) {
        round = new Array(numberInRound).fill([space, space]);
      } else if (numberInRound === 1) {
        round = [[space], [space]];
      } else {
        round = [[space]];
      }
      newBracket.push(round);
    }
    setBracket(newBracket);
  }

  return (
    <div className="bracket">
      <RoundPart bracket={bracket} setTeam={setTeam}></RoundPart>
    </div>
  );
}

export default BracketView;
