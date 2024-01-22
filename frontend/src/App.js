import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Cartcreate from "./Pages/Cartcreate";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Cartcreate />} path="/product" />
      <Route element={<Cart />} path="/pro" />
      <Route element={<Wishlist />} path="/wishlist" />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


