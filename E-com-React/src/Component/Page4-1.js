
const infopg4=[
  {id:1 , image:"/1.png"  ,titre1:"Tray"  , titre2:"Fluted Beverage"  ,prix:"30$"},
  {id:2 , image:"/2.png"  ,titre1:"Twill"  , titre2:"Seat Cushion"  ,prix:"30$"},
  {id:3 , image:"/3.png"  ,titre1:"Fluted Beverage"  , titre2:"Glass"  ,prix:"30$"},
  {id:4 , image:"/44.png"  ,titre1:"Ceramic"  , titre2:"Egg Cup"  ,prix:"30$"},
  {id:5 , image:"/5.png"  ,titre1:"Small"  , titre2:"Bamboo Box"  ,prix:"30$"},
  {id:6 , image:"/6.png"  ,titre1:"Metal Cutlery"  , titre2:"Basket"  ,prix:"30$"},
  {id:7 , image:"/7.png"  ,titre1:"4-pack Ceramic"  , titre2:"Cups"  ,prix:"30$"},
  {id:8 , image:"/8.png"  ,titre1:"2-pack Linen"  , titre2:"Napkins"  ,prix:"30$"},
  {id:9 , image:"/9.png"  ,titre1:"Glazed Stoneware"  , titre2:"Plate"  ,prix:"30$"},
] 

function Cpage41() {
const infopg4m = infopg4.map (ligne =>

  
     <div className="flex flex-wrap gap-2 ">
 <img src={ligne.image} className="w-[198px] h-[308px] "></img>
 <div className="flex flex-col  justify-center gap-2 w-[150px] h-[250px]">
          <h1 className="font-bold mb-8">{ligne.titre1}</h1>
       <h1 className="font-bold mb-8">{ligne.titre2}</h1>
      <h1 className="font-bold mb-8">Etoile</h1>
      <h1 className="font-bold mb-8">{ligne.prix}</h1>
 </div>





          </div>

 
         );

  



  return (

  <div className="mt-20 flex gap-10 flex flex-wrap justify-center"  >
      

{infopg4m}
      
  </div> 
      
      

  );
}

export default Cpage41;
