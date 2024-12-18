import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import backgroundTransparent from './assets/Raiden.jpg';

function App() {
  return (
    <BrowserRouter>
      <div>
        <img src={backgroundTransparent} alt="" style={{
          position: "fixed", zIndex: -9999, width:"100vw",height:"100vh", bottom: -60, right: 0, backgroundAttachment: "fixed", WebkitMaskImage: "linear-gradient(180deg, #000, transparent)", maskImage: "linear-gradient(180deg, #000, transparent)"
        }}></img>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <footer className="footer">
          <p className="text-sm">&copy; {new Date().getFullYear()} Made by Rufus Victor</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
