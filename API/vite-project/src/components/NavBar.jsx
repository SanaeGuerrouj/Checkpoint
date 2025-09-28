import { Link } from "react-router-dom"
import '../Css/NavBar.css'

 
function NavBar() {
  return (
    <nav className="navbar"> 

    <div>
        <Link to="/">Movie App</Link>

    </div>

    <div>
        <Link to="/">Home</Link>
        <Link to="/fav">Favorites</Link>

    </div>

    </nav>
   )
}

export default NavBar