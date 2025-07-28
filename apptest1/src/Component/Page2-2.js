
 const cardsData1 = [
  {  title: "LINEN BEACH TOWEL", image: "im1.png" },
  {  title: "Square Clear Glass Box", image: "im2.png" },
  {  title: "LINEN BEACH TOWEL", image: "im1.png" },
  {  title: "4-pack Small Ceramic Plates", image: "im3.png" },
    {  title: "Large Clear Glass Box", image: "im2.png" },
  { title: "Round Jute Placemat", image: "im5.png" },
  { title: "Metal Wire Basket", image: "im6.png" },
  {  title: "Round Jute Placemat", image: "im2.png" },

];



function CP2() {
  const Data1 =cardsData1.map(x=>


     <div className="flex flex-col w-64  p-4 rounded h-[550px] items-center justify center ">
      <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src={x.image} ></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">{x.title}</h1>
         <h1>Etoile</h1>
        <h1 className="font-bold">30$</h1>


          </div>

         </div>

  )

 
  return (
 
    <div className="  flex flex-wrap  gap-2	 gap-2	w-full justify-center	">
    {Data1}
    </div>

   );
}

export default CP2;





