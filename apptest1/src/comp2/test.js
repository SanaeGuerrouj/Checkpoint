 
// const info1 =[{id:1 , image:"/i2.png"  ,titre:"INY VINTAGE CHAIR"  },
//              {id:2 , image:"/i1.png"  ,titre:"LARGE TERRACOTA VASE"   },

// ];



// function CP1() {

  

//   return (
//     <div className="px-10 ">
        
//     <div className="CP1  flex  	 gap-10	w-full ">
     
//      <div className="flex w-1/2  p-4 rounded h-[353px]">
//       <img src="/i2.png" className="h-full w-1/2 "></img>
//          <div className="flex flex-col justify-center items-center ">
//         <h1 className="font-bold mb-8">INY VINTAGE CHAIR</h1>
//          <button className="font-bold border border-black p-4">VIEW DETAILS</button>
//          </div>

//          </div>

//      <div className="flex w-1/2 p-4 rounded h-[353px] bg-gray-200 ">
//         <img src="/i1.png" className="h-full w-1/2"></img>
//          <div className="flex flex-col justify-center items-center ">
//         <h1 className="font-bold mb-8">LARGE TERRACOTA VASE</h1>
//           <button className="font-bold border border-black p-4">VIEW DETAILS</button>
//          </div>
//     </div>

//     </div>
//     </div>
    
//   );
// }

// export default CP1;





// Code 22222222222







 const cardsData = [
  {  title: "LINEN BEACH TOWEL", image: "im1.png" },
  {  title: "Square Clear Glass Box", image: "im2.png" },
  {  title: "LINEN BEACH TOWEL", image: "im1.png" },
  {  title: "4-pack Small Ceramic Plates", image: "im1.png" },
//   {  title: "Titre5", image: "" },
//   { title: "Titre6", image: "" },
//   { title: "Titre7", image: "" },
//   {  title: "Titre8", image: "" },
];

function CP2() {
  return (
 <div className="px-10   ">

    <div className="  flex gap-2	 gap-1	w-full py-4	">

     <div className="flex flex-col w-1/2  p-4 rounded h-[550px]">
      <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im1.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">LINEN BEACH TOWEL</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>


          </div>

         </div>

     <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
           <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im2.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">Square Clear Glass Box</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>

          </div>
    </div>

         <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
         <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im1.png" ></img>

      </div>
         <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">LINEN BEACH TOWEL</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>

         </div>
    </div>
     <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
           <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im3.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">4-pack Small Ceramic Plates</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>

          </div>
    </div>


    </div>

    {/* Ligne2 */}

        <div className="  flex gap-2	 gap-1	w-full py-4	">
                 <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
           <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im2.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">Large Clear Glass Box</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>

          </div>
    </div>
     
         <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
           <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im5.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">Round Jute Placemat</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>

          </div>
    </div>

         <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
           <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im6.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">Metal Wire Basket</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>

          </div>
    </div>

         <div className="flex flex-col  w-1/2  p-4 rounded h-[550px]">
           <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src="/im5.png" ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">Round Jute Placemat</h1>
         <h1 >Etoile</h1>
        <h1 className="font-bold">30$</h1>

          </div>
    </div>




 


    </div>
    </div>
  );
}

export default CP2;
