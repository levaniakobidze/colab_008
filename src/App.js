import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Stories from "./pages/Stories/Stories";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing/Pricing";
import Features from "./pages/Features/Features";
import Stories from "./pages/Stories/Stories";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
