import {  Link } from "react-router-dom";

 
function Header() {
  return (
    <div className="App">
        <div className=" px-16 mt-10 ">
          <div className="border-b border-black pb-6 flex justify-between">

            <h1 className="text-3xl font-bold	">MOODY STUDIO</h1>
        <div className="flex gap-8	 ">
          <img src="/search.png" className="w-8 h-8"></img>
          <img src="contact.png" className="w-8 h-8"></img>
          <img src="shopping-bag.png" className="w-8 h-8"></img>
          <img src="heart.png" className="w-8 h-8"></img>

        </div>
          </div>

<nav >
  <ul className="flex gap-12 justify-center pt-8 text-2xl border-b border-black pb-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">STORE</Link></li>
          <li><Link to="/">ACCESSORIES</Link></li>
          <li><Link to="/">BRAND</Link></li>
          <li><Link to="/">PAGES</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/">NEWS</Link></li>
          <li><Link to="/contact">CONTACT US</Link> </li>

        </ul>
</nav>

{/* <div className="mt-6">
  <div className="px-64	">
    <img src="/Vector1.png"  className="h-10 w-12 "></img>
  </div>

  <div className="flex justify-center gap-20 border-b border-black pb-6">
<h1>FREE SHIPPING</h1>

  <div>
  <h1>100% MONEY BACK</h1>   
  </div>
  

  <div>
    <h1>SUPPORT 24/7</h1>  
  </div>

  </div>

</div> */}









        </div>
     </div>
  );
}

export default Header;
