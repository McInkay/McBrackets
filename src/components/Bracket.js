import RoundPart from "./RoundPart";

class Bracket {

  constructor(winner, final) {
    this.winner = winner;
    this.final = final;
  }
  
};

class Node {
  constructor(leftTeam, rightTeam, leftMatch, rightMatch) {
    this.leftTeam = leftTeam;
    this.rightTeam = rightTeam;
    this.leftMatch = leftMatch;
    this.rightMatch = rightMatch;
  }
}

function BracketView() {
  const bracket = new Bracket(
    "Meltan", 
    new Node("Meltan", "Charizard", 
      new Node("Meltan", "Greninja",
        new Node("Bulbasaur", "Meltan",
          new Node("Bulbasaur", "Snivy"),
          new Node("Meltan", "Torkoal")
        ),
        new Node("Greninja", "Bunnelby",
          new Node("Greninja", ""),
          new Node("", "Bunnelby")
        )
      ), 
      new Node("Charizard", "Pikachu",
        new Node("Charizard", "Ivysaur",
          new Node("Charizard", ""),
          new Node("", "Ivysaur")
        ),
        new Node("Volcarona", "Pikachu",
          new Node("Volcarona", ""),
          new Node("", "Pikachu")
        )
      )
    )
  );

  return (
    <div className="bracket">
      <RoundPart level={0} node={bracket.final}></RoundPart>
    </div>
  );
}

export default BracketView;
