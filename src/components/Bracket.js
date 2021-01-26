import RoundPart from "./RoundPart";

function BracketView() {
  const bracket = [
    [["Meltan", "Bulbasaur"],["Greninja", "Torkoal"],["Charizard", "Pikachu"],["Tepig", "Snivy"]],
    [["Meltan", "Greninja"],["Charizard", "Snivy"]],
    [["Meltan", "Charizard"]],
  ];

  return (
    <div className="bracket">
      <RoundPart bracket={bracket}></RoundPart>
    </div>
  );
}

export default BracketView;
