 
 
function Singlprod() {
  return (
    <div>
    <div className="flex  ">
        <div className="flex gap-20 pl-15 pt-6">  
        <img 
        src="/sg2.png"
         alt="duvet cover"
        className="w-86 h-110 mb-4 "
      />
        <img 
        src="/sg1.png"
         alt="duvet cover"
        className="w-86 h-110 mb-4 "
      />



        </div>
 <div className="max-w-md mx-auto p-4">
      {/*  Nom Produit*/}
      <h2 className="text-2xl font-semibold mb-2">Checked Duvet Cover Set</h2>

      {/*  Prix*/}
      <p className="text-xl font-bold mb-1">39.99 $</p>

      {/*  Description couleur*/}
      <p className="text-gray-600 mb-4">Light khaki green/white checks</p>

      {/*  Small img produit*/}
      <img 
        src="/scover.png"
         alt="duvet cover"
        className="w-20 h-24 mb-4 border border-black"
      />

      {/* متوفر أو لا */}
      <div className="flex items-center text-gray-500 mb-4">
        <img
          src="map.png"
          alt="location"
          className="w-4 h-4 mr-2"
        />
        <span>Not available in stores</span>
      </div>

      {/* Dropdown Pr Choix size*/}
      <select className="w-full border px-4 py-2 mb-4">
        {/*  placeholder  */}
        <option>Select Size</option>

        {/*  Small */}
        <option>Small</option>

        {/*   Medium */}
        <option>Medium</option>

        {/*  Large */}
        <option>Large</option>
      </select>

      {/* Boutton add to panier*/}
      <button className="w-full bg-black text-white py-3 uppercase font-medium">
        Add to shopping bag
      </button>

    </div>

  

       </div>

          <div className="h-100 mb-20">
        <img 
        src="/sg2.png"
         alt="duvet cover"
         className="pl-15 h-full w-207 "
          />
        {/* ho */}
     </div>

          </div>

  );
}

export default Singlprod;
