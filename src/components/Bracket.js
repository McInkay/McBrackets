import RoundPart from "./RoundPart";

function BracketView() {
  const bracket = [
    [["Meltan", "Charmander"],["Squirtle", "Bulbasaur"],["Greninja", "Blastoise"],["Torkoal", "Ivysaur"],["Charmeleon", "Charizard"],["Pikachu", "Pichu"],["Tauros", "Tepig"],["Snivy", "Serperior"]],
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
