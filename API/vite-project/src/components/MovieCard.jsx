// import React from 'react'
// import '../Css/MovieCard.css'
// function MovieCard({props}) {
//    function Like(){
//     alert("Likeeeeeee")
//    }


//   return (
//     <div  className='movie-card'>
    
//     {/* Poster */}

//     <div className='movie-poster'>

//       <img src={props.url} alt={props.title}/>
      
//       <div className='movie-overlay'>
//         <button className='like-btn' onClick={Like}>
//            ♥
//         </button>
//       </div>

//     </div>

//     {/* Coontenu */}

//      <div className="movie-info">
//             <h3>{props.title}</h3>
//             <p>{props.release_date}</p>
//         </div>


//     </div>
//   )
// }

// export default MovieCard

















import React, { useContext } from 'react';
import '../Css/MovieCard.css';
import { LikeContext } from '../App';

function MovieCard({ props }) {
  const { title, url, release_date, id } = props;
  const { likedMovies, AddLikeMovie, RemoveLikeMovie } = useContext(LikeContext);

  // vérifier si le film est déjà liké
  const isLiked = likedMovies.some(m => m.id === id);

  function handleLike() {
    if (isLiked) {
      RemoveLikeMovie(id); // retirer des favoris
    } else {
      AddLikeMovie(props); // ajouter aux favoris
    }
  }

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={url} alt={title}/>
        <div className='movie-overlay'>
          <button className='like-btn' onClick={handleLike}>
            {isLiked ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;



