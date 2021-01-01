import Match from "./Match";

function Bracket() {
  return (
    <div className="bracket">
      <Match team1={"Pikachu"} team2={"Charizard"}></Match>
      <Match team1={"Greninja"} team2={"Lucario"}></Match>
      <Match team1={"Meltan"} team2={"Bulbasaur"}></Match>
      <Match team1={"Toxtricity"} team2={"Cosmoem"}></Match>
      <Match team1={"Charizard"} team2={"Greninja"}></Match>
      <Match team1={"Meltan"} team2={""}></Match>
      <Match team1={"Charizard"} team2={"Meltan"}></Match>
    </div>
  );
}

export default Bracket;
