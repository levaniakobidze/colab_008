import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Stories from "./pages/Stories/Stories";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
