import Team from "./Team";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-start
    justify-start
    flex-col
    w-full
    ${(props) => `col-start-${1 + props.level}`}
    ${(props) => `row-start-${1 + ((props.level + 1) * props.roundOrder)}`}
    ${(props) => `row-span-${props.level * 2}`}
    self-center
`;

function Match({team1, team2, level, roundOrder}) {
  return (
    <Container className="match" level={level} roundOrder={roundOrder}>
      <Team name={team1}></Team>
      <Team name={team2}></Team>
    </Container>
  );
}

export default Match;
