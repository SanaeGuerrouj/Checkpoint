 
function PlayerCard(props ) {
    console.log("props",props)
  return (
    // Container  card,
    <div className="w-86 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">

              {/* Image de la joueuse */}

      
      {/* Section content f card  */}
      <div className="p-6">
              <img
        src={props.image}
        alt={props.player?.name}
        className=" w-86 h-86 object-cover"
      />

        
         {/* Name Name player,  */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.name}</h2>
        
        {/* Team Team player */}
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Team: </span>{props.team}
        </p>
        
        {/* Nationality de player */}
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Nationality: </span>{props.nationality}
        </p>
        
        {/* Jersey Number de player */}
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Jersey Number: </span>{props.jerseyNumber}
        </p>
        
        {/* Age  player */}
        <p className="text-gray-600">
          <span className="font-semibold">Age: </span>{props.player?.age}
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
