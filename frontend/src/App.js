import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import SmallNav from "./Pages/SmallNav";

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
      {/* <Route element={<Products />} path="/pro" /> */}
      <Route element={<Wishlist />} path="/wishlist" />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


