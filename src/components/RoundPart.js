import Match from "./Match";
import tw from "tailwind-styled-components";

const Container = tw.div`
  grid
  grid-cols-5
  h-50v
`;

function RoundPart({bracket}) {
  return (
    <Container>
      {bracket.map((round, level) => (
        <>
          {round.map((match, roundorder) => (
            <Match team1={match[0]} team2={match[1]} level={level} roundorder={roundorder} total={round.length} />
          ))}
        </>
      ))}
    </Container>
  );
}

export default RoundPart;
