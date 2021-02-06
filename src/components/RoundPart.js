import Match from "./Match";
import tw from "tailwind-styled-components";
import { useState } from "react";

const RoundNames = ["round-of-32", "round-of-16", "quarter-final", "semi-final", "final", "winner"];

const Container = tw.div`
  grid
  grid-cols-1
  sm:grid-cols-6
  xl:grid-cols-11
`;

const Round = tw.div`
  sm:contents
  ${({level, activeround}) => level !== activeround && 'hidden'}
`;

const RoundSwitcher = tw.div`
  sm:hidden
  grid
  grid-flow-col
  grid-cols-10
`;

const RoundName = tw.div`
  col-span-8
  col-start-2
  py-2
  m-auto
`;

const BackButton = tw.button`
  ${({activeround}) => activeround === 0 && 'hidden'}
  col-start-1
`;

const ForwardButton = tw.button`
  ${({activeround, totalrounds}) => activeround === totalrounds - 1 && 'hidden'}
  col-start-10
`;

function RoundPart({bracket, setTeam}) {
  const [activeRound, setRound] = useState(0);
  const previousRound = () => setRound(activeRound > 0 ? activeRound - 1 : activeRound);
  const nextRound = () => setRound(activeRound < bracket.length - 1 ? activeRound + 1 : activeRound);
  return (
    <Container>
      {bracket.map((round, level) => (
        <Round className={RoundNames[level]} key={RoundNames[level]} activeround={activeRound} level={level}>
          <RoundSwitcher>
            <BackButton onClick={previousRound} activeround={activeRound}>&lt;</BackButton>
            <RoundName>{RoundNames[level].replace(/-/g, " ")}</RoundName>
            <ForwardButton onClick={nextRound} activeround={activeRound} totalrounds={bracket.length}>&gt;</ForwardButton>
          </RoundSwitcher>
          {round.map((match, roundorder) => (
            <Match key={roundorder} team1={match[0]} team2={match[1]} level={level} roundorder={roundorder} total={round.length} setTeam={(team) => setTeam(level, roundorder, team)} />
          ))}
        </Round>
      ))}
    </Container>
  );
}

export default RoundPart;
