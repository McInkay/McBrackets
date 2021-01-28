import Match from "./Match";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const RoundNames = ["round-of-32", "round-of-16", "quarter-final", "semi-final", "final", "winner"];

const Container = tw.div`
  grid
  grid-cols-1
  sm:grid-cols-6
  lg:grid-cols-11
  gap-x-2
  px-5
`;

const Round = styled.div`
  display: contents;
`;

function RoundPart({bracket}) {
  return (
    <Container>
      {bracket.map((round, level) => (
        <Round className={RoundNames[level]} key={RoundNames[level]}>
          {round.map((match, roundorder) => (
            <Match key={match[0] + match[1]} team1={match[0]} team2={match[1]} level={level} roundorder={roundorder} total={round.length} />
          ))}
        </Round>
      ))}
    </Container>
  );
}

export default RoundPart;
