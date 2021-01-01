import Match from "./Match";
import tw from "tailwind-styled-components";

const RoundNames = ["final", "semi-final", "quarter-final", "round of 16"];
const Direction = {Left: "LEFT", Right: "RIGHT"};

const RoundContainer = tw.div`
    flex
    items-start
    justify-start
    ${props => props.level === 1 ? "w-1/3" : "w-full"}
    flex-row
`;

const OtherContainer = tw.div`
  flex
  items-start
  justify-start
  flex-col
`;

const MatchContainer = tw.div`
  ${props => props.level === 0 ? "w-1/3" : "w-full"}
`;

function RoundPart({level, node, dir}) {
  const left = () => node.leftMatch && <RoundPart level={level + 1} node={node.leftMatch} dir={Direction.Left}></RoundPart>;
  const right = () => node.rightMatch && <RoundPart level={level + 1} node={node.rightMatch} dir={Direction.Right}></RoundPart>;
  const match = () => (<MatchContainer level={level} className={"roundpart " + RoundNames[level]}>
    {RoundNames[level]}: <Match team1={node.leftTeam} team2={node.rightTeam}></Match>
  </MatchContainer>);

  return (
    <>
      {level === 0 ? 
        <RoundContainer level={level}>{left()}{match()}{right()}</RoundContainer> : 
        <RoundContainer level={level}>{dir === Direction.Right && match()}<OtherContainer>{left()}{right()}</OtherContainer>{dir === Direction.Left && match()}</RoundContainer>
      }
    </>
  );
}

export default RoundPart;
