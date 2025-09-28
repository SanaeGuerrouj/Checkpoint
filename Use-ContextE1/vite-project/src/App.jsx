import { createContext, useState } from "react"
import ChildA from "./components/ChildA" 
 

// Stape1:Create the context  createContext()
 const UserContext =createContext()
 //Stape2:Wrap all the child insde the provider
 //  <UserContext.Provider>
//    
 // <UserContext.Provider/>

//  Step3: Pass the vlue
//expot every context u create
//consomer
 
function App() {
  const [user,setUser]=useState({name:"Alin"});
  return (
    <>
    <UserContext.Provider value={user}>
         <ChildA/>
    </UserContext.Provider>
     </>
  )
}

export default App
export {UserContext}
