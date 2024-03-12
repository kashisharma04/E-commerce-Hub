import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { CgMenu, CgClose } from "react-icons/cg";
// import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  let pic = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5R2uUHL2-kGEHdRW6VFNMWq_WAdiG4XKo3w&usqp=CAU" alt="logo" height="30" width="50" className='img1' />
  return (
    <nav>
      <ul>
        <li >
          <Link to="/">{pic}</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/pro">Cart</Link>
        </li>
        <li>
          <Link to="/wishlist"><FiShoppingCart /></Link>
        </li>
        <li>
          <Link className='search'> <input type="text" placeholder="Search.." /><IoSearch /></Link>
        </li>
        {/* <li>
          <Link to="/"><IoSearch /></Link>
        </li> */}

      </ul>

    </nav>
  );
};

export default Navbar;
