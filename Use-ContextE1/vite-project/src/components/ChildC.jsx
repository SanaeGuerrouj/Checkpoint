 import { useContext } from "react"
import { UserContext } from "../App"
function ChildC() {
  const user =useContext(UserContext)
  return (

    <div>
     data: {user.name}
    </div>
   )
}

export default ChildC