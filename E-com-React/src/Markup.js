import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
  import Contact from "./Pages/Contact";
import Mainpage from "./Pages/Mainpage";
import Store from "./Pages/Store";
import Singlprodpg from "./Pages/Singlprod";

function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store/>}/>
          <Route path="story" element={<Singlprodpg />} />

         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Markup;
