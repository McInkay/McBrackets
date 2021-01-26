import Match from "./Match";
import tw from "tailwind-styled-components";

const RoundNames = ["final", "semi-final", "quarter-final", "round-of-16"];

const Container = tw.div`
  grid
  grid-cols-5
`;

function RoundPart({bracket}) {
  return (
    <Container>
      {bracket.map((round, level) => (
        <>
          {round.map((match, roundOrder) => (
            <Match team1={match[0]} team2={match[1]} level={level} roundOrder={roundOrder} />
          ))}
        </>
      ))}
    </Container>
  );
}

export default RoundPart;
