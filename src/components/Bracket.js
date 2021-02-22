import domtoimage from "dom-to-image";
import { useEffect, useState } from "react";
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';

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
  const startingRound = [
      ["Greninja","Dartrix"],
      ["Blaziken","Frogadier"],
      ["Pikachu","Quilladin"],
      ["Typhlosion","Drizzile"],
      ["Mudkip","Brionne"],
      ["Sceptile","Servine"],
      ["Infernape","Combusken"],
      ["Rowlet","Pignite"],
      ["Swampert","Torracat"],
      ["Piplup","Froakie"],
      ["Incineroar","Prinplup"],
      ["Cyndaquil","Grotle"],
      ["Decidueye","Chesnaught"],
      ["Cinderace","Marshtomp"],
      ["Totodile","Croconaw"],
      ["Empoleon","Popplio"],
      ["Torterra","Rillaboom"],
      ["Primarina","Monferno"],
      ["Serperior","Chespin"],
      ["Treecko","Quilava"],
      ["Oshawott","Fennekin"],
      ["Inteleon","Thwackey"],
      ["Scorbunny","Grookey"],
      ["Torchic","Delphox"],
      ["Grovyle","Braixen"],
      ["Feraligatr","Tepig"],
      ["Turtwig","Emboar"],
      ["Chikorita","Dewott"],
      ["Sobble","Bayleef"],
      ["Snivy","Samurott"],
      ["Raboot","Chimchar"],
      ["Litten","Meganium"]
  ];
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
  md:px-5
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
  md:block
`;

const ExportArea = styled(tw.form`
  p-4
  grid
`)`
  grid-template-columns: 1fr auto auto auto;
`;

export const bracketMachine = Machine({
  id: 'bracket',
  initial: 'unsubmitted',
  states: {
    unsubmitted: {
      on: { 
        SUBMIT: {
          target: 'submitted',
          actions: ['save']
        }
      }
    },
    submitted: {}
  },
},
{
  actions: {
    save: (_, __, data) => {
      const jsonState = JSON.stringify(data.state);

      try {
        localStorage.setItem('submit-state', jsonState);
      } catch (e) {}
    },
  }
});

const persistedState = JSON.parse(localStorage.getItem('submit-state')) || bracketMachine.initialState;

function BracketView() {
  const [state, send] = useMachine(bracketMachine, {state: persistedState});
  const [bracket, setBracket] = useState(
    JSON.parse(localStorage.getItem('bracket')) || []
  );
  const changeBracket = (bracket) => {
    if (state.matches('unsubmitted')) {
      localStorage.setItem('bracket', JSON.stringify(bracket));
      setBracket(bracket);
    }
  }

  const setTeam = setTeamFunc(bracket, changeBracket);
  const [name, setName] = useState("");
  useEffect(() => bracket.length === 0 && setupBracket(setBracket), [bracket]);

  const submitBracket = (e) => {
    e.preventDefault()
    let csv = name;
    bracket.slice(1).forEach((round) => {
      round.forEach((match) => {
        match.forEach((team) => {
          csv += `,${team}`;
        })
      });
    });
    email(csv);
  }

  const email = (csv) => {
    const formData = new FormData();
    formData.append('csv', csv);
    formData.append('form-name', 'csv-submit');
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then((e) => {
      if (e.status === 200 || e.status === 204) {
        send('SUBMIT');
      }
    }).catch((error) => alert(error))
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
          {state.matches('submitted') || <NameInput onChange={(event) => setName(event.target.value)} value={name} placeholder="Name" name="name" />}
          {state.matches('submitted') || <Submit onClick={submitBracket} type="submit">Submit Predictions</Submit>}
          <Download onClick={downloadImage} type="submit">Download as Image</Download>
      </ExportArea>
    </Bracket>
  );
}

export default BracketView;
