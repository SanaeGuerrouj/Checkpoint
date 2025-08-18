import { CiSearch } from "react-icons/ci";

export default function Main() {
  return (
    <div className="header flex items-center justify-between px-8 py-4 bg-gradient-to-r from-orange-100 to-orange-200 shadow-sm">
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 text-gray-700 font-semibold">
          <li><a href="#" className="hover:text-orange-600 transition">Popular</a></li>
          <li><a href="#" className="hover:text-orange-600 transition">Theatre</a></li>
          <li><a href="#" className="hover:text-orange-600 transition">Kids</a></li>
          <li><a href="#" className="hover:text-orange-600 transition">Drama</a></li>
          <li><a href="#" className="hover:text-orange-600 transition">Comedie</a></li>
        </ul>
      </nav>

      {/* Search */}
      <form>
        <div className="flex items-center border border-orange-300 rounded  overflow-hidden bg-white shadow-sm">
          <input 
            type="text" 
            placeholder="Enter Movie Name" 
            className="px-4 py-2 outline-none text-gray-600 w-56 focus:w-64 transition-all duration-300"
          />
          <button className="bg-orange-300 text-white px-4 py-4 hover:bg-orange-600 transition">
            <CiSearch size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
