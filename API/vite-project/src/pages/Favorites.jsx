import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { LikeContext } from "../App";

function Favorites() {
  const { likedMovies } = useContext(LikeContext);

  if (likedMovies.length === 0) {
    return <p>Aucun film liké pour l'instant 😅</p>;
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {likedMovies.map((movie) => (
        <MovieCard 
          key={movie.id} 
          props={{
            ...movie,
            isLiked: true // tous les films ici sont déjà likés
          }} 
        />
      ))}
    </div>
  );
}

export default Favorites;
