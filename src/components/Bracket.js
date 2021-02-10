import domtoimage from "dom-to-image";
import { useEffect, useState } from "react";

import styled from "styled-components";
import tw from "tailwind-styled-components";
import RoundPart from "./RoundPart";

const space = "\u00a0";

const setTeamFunc = (bracket, setBracket) => (round, match, team) => {
  const newBracket = JSON.parse(JSON.stringify(bracket));
  if (round < bracket.length - 3) {
    // Normal round
    newBracket[round + 1][Math.floor(match / 2)][match % 2] = team;
  } else if (round === bracket.length - 3) {
    // Clicking on a semi-finalist
    newBracket[round + 1][match % 2][0] = team;
  } else if (round === bracket.length - 2) {
    // Clicking on a finalist
    newBracket[round + 1][0][0] = team;
  } else {
    // We have clicked on the winner
    return;
  }
  setBracket(newBracket);
}

const setupBracket = (setBracket) => {
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

const Bracket = tw.div`
  sm:px-5
`;

const NameInput = tw.input`
  border-2 border-blue-500 font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out mr-6
  col-start-2
`;

const Button = tw.button`
  border-2 border-blue-500 font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6
`;

const Submit = tw(Button)`
  col-start-3
`;

const Download = tw(Button)`
  border-2 border-blue-500 font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6
  col-start-4
  hidden
  sm:block
`;

const ExportArea = styled(tw.form`
  p-4
  grid
`)`
  grid-template-columns: 1fr auto auto auto;
`;

function BracketView() {
  const [bracket, setBracket] = useState([]);
  const setTeam = setTeamFunc(bracket, setBracket);
  const [name, setName] = useState("");
  useEffect(() => setupBracket(setBracket), []);

  const exportBracket = (e) => {
    e.preventDefault()
    let csv = name;
    bracket.slice(1).forEach((round) => {
      round.forEach((match) => {
        match.forEach((team) => {
          csv += `,${team}`;
        })
      });
    });
    downloadCSV(csv);
    submit(csv);
  }

  const submit = (csv) => {
    const formData = new FormData();
    formData.append('csv', csv);
    formData.append('form-name', 'csv-submit');
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then((e) => console.log(e)).catch((error) => alert(error))
  }

  const downloadCSV = (csv) => {
    const element = document.createElement("a");
    const file = new Blob([csv], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${name}-predictions.csv`;
    document.body.appendChild(element);
    element.click();
  }
  
  const downloadImage = (e) => {
    e.preventDefault()
    const element = document.getElementById('bracket-for-image');
    domtoimage.toPng(element)
    .then(function (dataUrl) {
        var a = document.createElement("a");
        a.href = dataUrl;
        a.download = "Image.png";
        a.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  return (
    <Bracket> 
      <RoundPart bracket={bracket} setTeam={setTeam}></RoundPart>
      <ExportArea name="submit" method="POST" data-netlify="true" id="submitForm">
          <NameInput onChange={(event) => setName(event.target.value)} value={name} placeholder="Name" name="name"/>
          <Submit onClick={exportBracket} type="submit">Submit Predictions</Submit>
          <Download onClick={downloadImage} type="submit">Download as Image</Download>
      </ExportArea>
    </Bracket>
  );
}

export default BracketView;
