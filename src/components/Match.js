import Team from "./Team";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
`;

function Match({team1, team2}) {
  return (
    <Container className="match">
      <Team name={team1}></Team>
      <Team name={team2}></Team>
    </Container>
  );
}

export default Match;
