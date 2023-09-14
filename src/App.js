import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Navbar from "./scenes/global/Navbar";

import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Questions from "./components/Questions";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/FAQ" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
