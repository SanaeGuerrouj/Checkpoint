
import CP2Props from "../Component/props";
import {  Link } from "react-router-dom";


function Store() {
             const infostore =[
            {title:"Velvet Covvered" ,image:"store1.png"},
            {title:"CANDLE IN GLASS HOLDER" ,image:"store2.png"},
            {title:"METAL PHOTO FRAME" ,image:"store3.png"},
            {title:"Round floor mat" ,image:"store4.png"},
            {title:"Class light holder" ,image:"store5.png"},
            {title:"Flannel Duvet Cover Set" ,image:"store6.png"},
            {title:"Fitted Cotton Sheet" ,image:"store7.png"},
            {title:"Small Candle in a Small Jar" ,image:"store8.png"},
            {title:"Checked Duvet Cover Set" ,image:"store9.png"},
            {title:"Washed Linen Pillowcase" ,image:"store10.png"},
            {title:"Ribbed Wool-blend Throw" ,image:"store11.png"},
            {title:"Mini Porcelain Dish" ,image:"store12.png"},


        ];
  return (



// Modif
<div className="flex gap-20 py-20"> 
    {/* Filtre */}
        <div className="w-64  pl-16 space-y-6 bg-white text-sm">
      {/* New Arrivals */}
      <div>
        <h2 className="font-semibold mb-2">New Arrivals</h2>
        <p className="text-gray-600 cursor-pointer hover:underline">New Arrivals</p>
      </div>

      {/* Shop By Room */}
      <div>
        <h2 className="font-semibold mb-2">Shop By Room</h2>
        <ul className="space-y-1">
          <li className="text-red-600 font-medium cursor-pointer">Bedroom</li>
          <ul className="pl-4 text-gray-600">
            {/* linkkkkkkkkk pg */}
            <li className="hover:underline cursor-pointer"> <Link to="/story"> Duvet Cover Sets</Link></li> 
            <li className="hover:underline cursor-pointer">Sheets</li>
            <li className="hover:underline cursor-pointer">Bedspreads & Blankets</li>
            <li className="hover:underline cursor-pointer">Blankets</li>
            <li className="hover:underline cursor-pointer">Curtains</li>
            <li className="hover:underline cursor-pointer">Pillowcases</li>
            <li className="hover:underline cursor-pointer">Rugs</li>
          </ul>
          <li className="hover:underline cursor-pointer">Living Room</li>
          <li className="hover:underline cursor-pointer">Child Room</li>
          <li className="hover:underline cursor-pointer">Bathroom</li>
          <li className="hover:underline cursor-pointer">Outdoor</li>
        </ul>
      </div>

      {/* Shop By Concept */}
      <div>
        <h2 className="font-semibold mb-2">Shop By Concept</h2>
        <ul className="text-gray-600 space-y-1">
          <li className="hover:underline cursor-pointer">Conscious</li>
          <li className="hover:underline cursor-pointer">Premium Quality</li>
          <li className="hover:underline cursor-pointer">Classic Collection</li>
        </ul>
      </div>

      {/* Gender */}
      <div>
        <h2 className="font-semibold mb-2">Gender</h2>
        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" />
          <span>Man</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" />
          <span>Woman</span>
        </label>
      </div>

      {/* Color */}
      <div>
        <h2 className="font-semibold mb-2">Color</h2>
        <div className="flex flex-wrap gap-2">
          {["bg-white", "bg-black", "bg-yellow-300", "bg-orange-300", "bg-red-400", "bg-pink-300", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-emerald-600"].map((color, idx) => (
            <div key={idx} className={`w-6 h-6 rounded-sm border ${color} cursor-pointer`}></div>
          ))}
        </div>
      </div>
    </div>




    {/* Cards Props */}
  <div className="  flex flex-wrap  gap-2	 gap-2	w-full justify-center 	">
     {infostore.map (y=>(    <CP2Props title={y.title} image={y.image} >
      <h1>Boutton</h1>
       </CP2Props >
))} 
</div>

</div>



   
)}

export default Store;
