import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Card from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      {/* <Card/> */}
      <BrowserRouter>
        <Header />
        <Filter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;