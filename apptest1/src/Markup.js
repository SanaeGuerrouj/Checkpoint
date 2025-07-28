import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
  import Contact from "./Pages/Contact";
import Mainpage from "./Pages/Mainpage";

function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="contact" element={<Contact />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Markup;
