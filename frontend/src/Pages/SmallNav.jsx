import React from 'react';
import { Link } from 'react-router-dom';
import "./SmallNav.css";
import { HiOutlineMenu } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const SmallNav = () => {
//   let pic = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5R2uUHL2-kGEHdRW6VFNMWq_WAdiG4XKo3w&usqp=CAU" alt="logo" height="30" width="50" className='img1' />
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><HiOutlineMenu />All</Link>
        </li>
        <li>
          <Link to="/pro">Sale</Link>
        </li>
        <li>
          <Link to="/pro">Mobiles</Link>
        </li>
        <li>
          <Link to="/pro">Electronics</Link>
        </li>
        <li>
          <Link to="/pro">Today's Deals</Link>
        </li>
        <li>
          <Link to="/contact">Customer Service</Link>
        </li>
        <li>
          <Link to="/pro">New Releases</Link>
        </li>
        <li>
          <Link to="/pro">Prime Videos</Link>
        </li>
        <li>
          <Link to="/pro">Gift Ideas</Link>
        </li>
        
        {/* <li>
          <Link to="/"><IoSearch /></Link>
        </li> */}

      </ul>

    </nav>
  );
};

export default SmallNav;
