import "./App.css";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Cart from "./product/Product";
import Wishlist from "./wishlist/Wishlist";
import SmallNav from "./components/SmallNav";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <SmallNav />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Cart />} path="/product" />
      <Route element={<Wishlist />} path="/wishlist" />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


