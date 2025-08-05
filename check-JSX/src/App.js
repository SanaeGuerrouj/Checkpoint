 import Image from "./components/Image";
 import Name from "./components/Name";
 import Price from "./components/Price"
  import Description from "./components/Description"
 
 
 function App() {
  return (

     <div className="min-h-screen bg-gray-100 py-10 px-4 w-64 ">

      <Image/>
       <Name/>
       <Price/>
       <Description/>
    </div>
  );
}

export default App;
