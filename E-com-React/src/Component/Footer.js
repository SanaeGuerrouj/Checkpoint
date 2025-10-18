import {  Link } from "react-router-dom";

 
function Footer() {
  return (
    <div className="flex flex-col">
<div className="flex gap-36 justify-center py-10 text-gray-300 "style={{ backgroundColor: "#323334" }}>


    <div className="">
        <h1 className="text-3xl text-white font-bold mb-6">URBAN OUTFITTERS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.</p>
        <h2 className="text-white font-bold mt-10">121 king street, Melbourne 3000</h2>
        <h2 className="text-white font-bold">+61 3 8376 6284</h2>
        <h2 className="text-white font-bold">contact@urbanoutfitters.com</h2>

    </div>


    <div>
        <h1 className="text-xl text-white font-bold mb-4">SHOPPING</h1>
        <h2>Your cart</h2>
        <h2>Your orders</h2>
        <h2>Compared items</h2>
        <h2>Wishlist items</h2>
        <h2>Shipping detail </h2>
    </div>

    <div>
        <h1 className="text-xl text-white font-bold mb-4">MORE LINK</h1>
        <h2>Blog</h2>
        <h2>Gift Center</h2>
        <h2>Buying Guides</h2>
        <h2>New Arrivals</h2>
        <h2>Clearance</h2>
    </div>


     <div>
        <h2 className="text-xl text-white font-bold mb-4 ">FROM THE BLOG</h2>
        <h2><sp className="text-xl">26</sp>May</h2>
        <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>
        <h2 className="border-b border-black pb-6">3 comments</h2>


        <h2 className="mt-6"><span className="text-xl">27</span>May</h2>
         <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>
         <h2>3 comments</h2>
     </div>



    </div>



     <div className="text-white bg-black flex justify-center py-4">Urban Outfitters © – All rights reserved </div>


    </div>

    
   );
}

export default Footer;
