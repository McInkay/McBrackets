import RoundPart from "./RoundPart";

function BracketView() {
  const bracket = [
    [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [27, 28], [29, 30], [31, 32]],
    [["Meltan", "Charmander"],["Squirtle", "Bulbasaur"],["Greninja", "Blastoise"],["Torkoal", "Ivysaur"],["Charmeleon", "Charizard"],["Pikachu", "Pichu"],["Tauros", "Tepig"],["Snivy", "Serperior"]],
    [["Meltan", "Bulbasaur"],["Greninja", "Torkoal"],["Charizard", "Pikachu"],["Tepig", "Snivy"]],
    [["Meltan", "Greninja"],["Charizard", "Snivy"]],
    [["Meltan"], ["Charizard"]],
    [["Meltan"]]
  ];

  return (
    <div className="bracket">
      <RoundPart bracket={bracket}></RoundPart>
    </div>
  );
}

export default BracketView;
