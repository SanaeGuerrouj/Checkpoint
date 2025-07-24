
 
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
  <li className="flex gap-12 justify-center pt-8 text-2xl border-b border-black pb-6">
          <ul>HOME</ul>
          <ul>STORE</ul>
          <ul>ACCESSORIES</ul>
          <ul>BRAND</ul>
          <ul>PAGES</ul>
          <ul>ABOUT US</ul>
          <ul>NEWS</ul>
          <ul>CONTACT US </ul>

        </li>
</nav>

<div className="mt-6">
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

</div>









        </div>
     </div>
  );
}

export default Header;
