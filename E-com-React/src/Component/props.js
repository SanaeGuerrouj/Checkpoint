 


function CP2Props(props) {
 


  
 
  return (
         <div className="flex flex-col w-72  p-4 rounded h-[550px] items-center justify center ">
      <div className="object-cover w-full h-3/4 bg-gray-200 flex justify-center items-center"> 
     <img src={props.image} alt=""></img>

      </div>
        <div className=" flex flex-col h-1/4   justify-center ">
         <h1 className="font-bold">{props.title}</h1>
         {/* <h1>Etoile</h1> */}
          <h1>{props.children}</h1>

        <h1 className="font-bold">30$</h1>


          </div>

         </div>

 

   );
}

export default CP2Props;





