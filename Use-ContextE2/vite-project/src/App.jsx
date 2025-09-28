import { createContext, useContext, useState } from "react"
import ChildA from "./ChildA";

 const ThemeContext=createContext();
 
function App() {

    const [theme,setTheme]=useState("light")

 
  return (

    <>
    
      <ThemeContext.Provider value={{theme,setTheme}}>
           <div style={{backgroundColor :theme==='light'?"beige" : "black"}}>
              <ChildA/>
           </div>
     
    </ThemeContext.Provider>


   
     </>
  )
}

export default App
export {ThemeContext}
