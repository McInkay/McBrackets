import Team from "./Team";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-start
    justify-start
    flex-col
    w-full
    ${({level, roundorder, total}) => `col-start-${roundorder < total / 2 ? 1 + level : 9 - level}`}
    ${({level, roundorder, total}) => `row-start-${roundorder < total / 2 ? 1 + ((level > 0 ? level * 2 : 1) * roundorder) : 1 + ((level > 0 ? level * 2 : 1) * (roundorder - (total / 2)))}`}
    ${({level}) => `row-span-${level < 3 ? level * 2 : "8"}`}
    self-center
`;

function Match({team1, team2, level, roundorder, total}) {
  return (
    <Container className="match" level={level} roundorder={roundorder} total={total}>
      <Team name={team1}></Team>  
      <Team name={team2}></Team>
    </Container>
  );
}

export default Match;
