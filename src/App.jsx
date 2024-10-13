import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "/src/components/Header";

// routes
import Index from "/src/routes/Index";
import About from "/src/routes/nav_links/About";
import Contact from "/src/routes/nav_links/Contact";
import Commissions from "./routes/art_categories/Commission";
import Design from "/src/routes/art_categories/Design";
import DigitalArt from "/src/routes/art_categories/DigitalArt";
import Photography from "/src/routes/art_categories/Photography";
import Error from "/src/routes/Error";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Index />}></Route>

            {/* NAV LINKS */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            {/* ART CATEGORIES */}
            <Route path="/commissions" element={<Commissions />}></Route>
            <Route path="/design" element={<Design />}></Route>
            <Route path="/digital-art" element={<DigitalArt />}></Route>
            <Route path="/photography" element={<Photography />}></Route>

            {/* OTHER */}
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
