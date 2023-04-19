import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <h1>Hello World colab_008 </h1>
    </div>
  );
}

export default App;
