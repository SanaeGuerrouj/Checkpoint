import Person from "./Person";
import React, { useState } from "react";

function PersonElem() {
  const infoPersonne = {
    fullName: "Sara ",
    bio: "Passionnée par le design UI/UX et le développement web",
    imgSrc: "/image.jpg",
    profession: "UX/UI Designer",
  };

  const [showsprofile, setShows] = useState(true);

  let profileContent;
  if (showsprofile ===true) {
    profileContent = (
      <Person
        fullName={infoPersonne.fullName}
        bio={infoPersonne.bio}
        imgSrc={infoPersonne.imgSrc}
        profession={infoPersonne.profession}
      />
    );
  } else {
    profileContent = null; // N affiche Rien
  }

  return (
    <div className="App">
      {profileContent}

      <button
        onClick={function () {
          setShows(!showsprofile);
        }}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Switch
      </button>
    </div>
  );
}

export default PersonElem;




// import Person from "./Person";
// import React, { useState } from 'react';


// function PersonElem() {
//   const infoPersonne = {
//     fullName: "Sara ",
//     bio: "Passionnée par le design UI/UX et le développement web",
//     imgSrc: "/image.jpg",
//     profession: "UX/UI Designer",
//   };
  
 
//   const [showsprofile, setShows] = React.useState(true);



//   return (
//     <div className="App">

//           {/* If show true   C shows &&*/}
//         {showsprofile && (  
//          <Person
//         fullName={infoPersonne.fullName}
//         bio={infoPersonne.bio}
//         imgSrc={infoPersonne.imgSrc}
//         profession={infoPersonne.profession}
//       /> 

//         )}


 
//         <button
//         onClick={() => setShows(!showsprofile)} 
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         {/* {shows ? "Cacher le profil" : "Afficher le profil"} */} Switch
//       </button>


 

//     </div>
//   );
// } 

// export default PersonElem;
