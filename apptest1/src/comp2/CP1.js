 
const info1 =[{id:1 , image:"/i2.png"  ,titre:"INY VINTAGE CHAIR"  , bg:"white"},
             {id:2 , image:"/i1.png"  ,titre:"LARGE TERRACOTA VASE"   ,bg:"bg-gray-200" },

];



function CP1() {

    const infom = info1.map (ligne =>
            
     
     <div className={`flex w-1/2  p-4 rounded h-[353px] ${ligne.bg}`}>
      <img src={ligne.image} className="h-full w-1/2 "></img>
         <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold mb-8">{ligne.titre}</h1>
         <button className="font-bold border border-black p-4">VIEW DETAILS</button>
         </div>

         </div>

    

);

  return (

    <div className="px-10 ">
        
    <div className="CP1  flex  	 gap-10	w-full ">

    {infom}

    </div>
        </div>

     
  );
}

export default CP1;

