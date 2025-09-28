
import './Css/App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const LikeContext = createContext();

function App() {
  const [likedMovies, setLikedMovies] = useState([]);

  function AddLikeMovie(movie) {
    const NewLikeList = [...likedMovies, movie];
    setLikedMovies(NewLikeList);
  }

  function RemoveLikeMovie(movieId) {
    setLikedMovies(prev => prev.filter(m => m.id !== movieId));
  }

  return (
    <LikeContext.Provider value={{ likedMovies, AddLikeMovie, RemoveLikeMovie }}>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/fav' element={<Favorites />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LikeContext.Provider>
  );
}

export default App;




// import './Css/App.css'
// // import MovieCard from './components/MovieCard'
// import Favorites from './pages/Favorites';
// import Home from './pages/Home'
// import {BrowserRouter,Routes, Route} from "react-router-dom";
// import NavBar from './components/NavBar';
// import React, { createContext, useState } from "react";

 
// export const LikeContext = createContext();

// function App() {
//   const [likedMovies, setLikedMovies] = useState([]);
  
//   function AddLikeMovie(movie) {
//     const NewLikeList = [...likedMovies, movie];
//     setLikedMovies(NewLikeList);
//   }


 
//   return (
    
//        <LikeContext.Provider value={{ likedMovies, AddLikeMovie }}>
//       <BrowserRouter> 
//       <main>
//         <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/fav' element={<Favorites/>} />
//       </Routes>
//       </main>      

//       </BrowserRouter>

//           </LikeContext.Provider>

    

//    )
// }
 

// export default App









//nn
 
// import './App.css'

// function App() {
 
//   return (
//     <>
//       <h1>Holaaaaaaaaaaa</h1>
//       <Text Contenu="C moi"/>
//       <Text Contenu="Cavaaa"/>

//     </>

//    )
// }
 
// function Text({Contenu}) {
//   return (
//     <h1>{Contenu}</h1>
//    )
// }

 
// export default App

















