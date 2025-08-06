import PlayerCard from "./Players";

function PlayersList() {
  const players = [
  {
    id: 1,
    name: "Yasmin Mrabet",
    team: "Morocco Women's National Team",
    nationality: "Moroccan",
    jerseyNumber: 5,
    age: 25,
    image: "g"
  },
  {
    id: 2,
    name: "Fatima Tagnaout",
    team: "Morocco Women's National Team",
    nationality: "Moroccan",
    jerseyNumber: 10,
    age: 24,
    image: ""
  },
  {
    id: 3,
    name: "Rosella Ayane",
    team: "Morocco Women's National Team",
    nationality: "Moroccan",
    jerseyNumber: 11,
    age: 28,
    image: ""
  }
];

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
       {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />

       ))}
   
    </div>
  );
}

export default PlayersList;
