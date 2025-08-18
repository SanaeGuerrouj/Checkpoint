import { useEffect, useState } from "react"

 

 
export default function Test() {
        const [Movies,setMovies]=useState([]);

         const [titre,setTitre]=useState("");
            function  handleSearch(event) {
            setTitre(event.target.value)

       }


 

        useEffect(
        ()=>{        
         fetch("https://api.themoviedb.org/3/movie/popular?api_key=c82ab0405fb981cfd52454edfc40eb87")
         .then(res => res.json()) 
         // .then(Data =>console.log(Data))
         
        .then(Data=>setMovies(Data.results))

        },

        []
        )

      
        //Console log movies si(usse effect) existe API temps pr recp

        useEffect(
         ()=>{
            if(Movies.length!==0){
         console.log(Movies)
}
         },
         [Movies]
        )

      // console.log(Movies)
// Filtrer b state  3ndi  titre
const filteredMovies = Movies.filter((movie) =>
     movie.title.toLowerCase().startsWith(titre.toLowerCase())
 
 );


  

   return (
     <>
      
            {/* Titre*/}
       <h1 className="text-3xl font-bold my-6 text-center text-gray-800">
        Popular Movies
      </h1>

      {/* Search*/}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search movies..."
           value={titre} onChange={handleSearch}
          // value={titre} onChange={(event) => setTitre(event.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
 


  {/* Part2:Cards */}


   
      <div className="bg-gray-100 min-h-screen p-6 flex flex-wrap gap-10 justify-center" >
 
           {filteredMovies.map(
        Movie=> (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-64 hover:shadow-xl transition">
            {/* Image Poster Card */}
            <img
            src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
            alt={Movie.title}
            className="w-full h-96 object-cover"
          />
            {/* Contenu Crd */}
            <div className="p-4">
            <h1 className="font-bold text-lg mb-1">{Movie.title} </h1> 
 
            <p className="text-gray-500 text-sm italic mb-2">
              Original title: {Movie.original_title}
            </p>
            <p className="text-sm">Language: {Movie.original_language}</p>
            <p className="text-sm">Release date: {Movie.release_date}</p>
            <p className="text-sm">Popularity: {Movie.popularity}</p>
            <p className="text-sm">
              Vote: {Movie.vote_average} ({Movie.vote_count} votes)
            </p>
            <p className="text-gray-700 text-xs mt-2 line-clamp-4">
              {Movie.overview}
            </p>
         </div>
  
         </div>
  
        )
 
)

           } 
      </div>
      </>
 

  

         

    )
}





 
