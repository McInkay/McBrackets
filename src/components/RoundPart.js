import Match from "./Match";
import tw from "tailwind-styled-components";

const Container = tw.div`
  grid
  grid-cols-10
  gap-x-2
`;

function RoundPart({bracket}) {
  return (
    <Container>
      {bracket.map((round, level) => (
        <>
          {round.map((match, roundorder) => (
            <Match key={match[0] + match[1]} team1={match[0]} team2={match[1]} level={level} roundorder={roundorder} total={round.length} />
          ))}
        </>
      ))}
    </Container>
  );
}

export default RoundPart;
