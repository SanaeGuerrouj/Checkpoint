 import MovieCard from '../components/MovieCard' 
import { useState } from "react";
import '../Css/Home.css'


function Home() {
    const movies =[
        {id:1 ,title:"First Movie" ,release_date:"2014"},
        {id:2 ,title:"Second Movie" ,release_date:"2017"},
        {id:3 ,title:"Third Movie" ,release_date:"2000"},
        {id:4 ,title:"Firssttt Movie" ,release_date:"2017"},


    ];

    const handleSearch =()=>{}

    const [search,setsearch]=useState("");
 

  return (
    <div className='home'>
        {/* Search */}

        <form onSubmit={handleSearch} className="search-form">

        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={search}
          onChange={(e) => setsearch(e.target.value)  }
          />

        <button type="submit" className="search-button">
          Search
        </button>

      </form>


      {/* Cards */}
        <div className='movies-grid'>
           {
           movies.map((movie)=>(
           movie.title.toLowerCase().startsWith(search) && <MovieCard props={movie} key={movie.id}/>
           ))
           
           }
         
        </div>

    </div>

  )
}

export default Home


















// Use State 

// import React from 'react'
// import MovieCard from '../components/MovieCard' 
// import { useState } from "react";


// function Home() {
//     const movies =[
//         {id:1 ,title:"First Movie" ,release_date:"2014"},
//         {id:2 ,title:"Second Movie" ,release_date:"2017"},
//         {id:3 ,title:"Third Movie" ,release_date:"2000"},
//         {id:4 ,title:"Firssttt Movie" ,release_date:"2017"},


//     ];

//     const handleSearch =()=>{}

//     const [search,setsearch]=useState("");

//   return (
//     <div className='home'>
//         {/* Search */}

//         <form onSubmit={handleSearch} className="search-form">

//         <input
//           type="text"
//           placeholder="Search for movies..."
//           className="search-input"
//           value={search}
//           onChange={(e) => setsearch(e.target.value)  }
//           />

//         <button type="submit" className="search-button">
//           Search
//         </button>

//       </form>


//       {/* Cards */}
//         <div className='movies-grid'>
//            {
//            movies.map((movie)=>(
//            movie.title.toLowerCase().startsWith(search) && <MovieCard props={movie} key={movie.id}/>
//            ))
           
//            }
         
//         </div>

//     </div>

//   )
// }

// export default Home