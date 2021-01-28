import Team from "./Team";
import tw from "tailwind-styled-components";

const Container = tw.div`
    grid
    grid-cols-1
    content-around
    w-full
    ${({level, roundorder, total}) => `sm:col-start-${1 + level}`}
    ${({level, roundorder, total}) => `sm:row-start-${level === 4 ? 1 + roundorder * 16 : 1 + (Math.pow(2, level + 1) * roundorder)}`}
    ${({level}) => `sm:row-span-${level < 4 ? Math.pow(2, level + 1) : level === 4 ? "16" : "32"}`}
    ${({level, roundorder, total}) => `lg:col-start-${roundorder < total / 2 ? 1 + level : 11 - level}`}
    ${({level, roundorder, total}) => `lg:row-start-${roundorder < total / 2 ? 1 + (Math.pow(2, level + 1) * roundorder) : 1 + (Math.pow(2, level + 1) * (roundorder - (total / 2)))}`}
    ${({level}) => `lg:row-span-${level < 4 ? Math.pow(2, level + 1) : "16"}`}
`;

function Match({team1, team2, level, roundorder, total}) {
  return (
    <Container className="match" level={level} roundorder={roundorder} total={total}>
      <Team name={team1}></Team>  
      {team2 && <Team name={team2}></Team>}
    </Container>
  );
}

export default Match;
