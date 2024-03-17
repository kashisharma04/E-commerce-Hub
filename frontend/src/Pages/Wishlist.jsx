// import React from 'react'

// export default function Wishlist() {
//   function wishlist(){
//     let wish = "abc"
//     alert(wish)
//   }
//   return (
//     <>
//         <h1 >My WishList!</h1>
//         <button onClick={wishlist}>wish!</button>
//         <div className="wishlist-div">
//         </div>
//     </>
//   )
// }


import { useState } from "react";
import React from "react";

export default function Wishlist({wishlistItems, setWishlistItems}) {
  const [wishlist, setWishlist] = useState([]);

  const removeFromWishlist = (index) => {
    const updatedWishlist = [...wishlistItems];
    updatedWishlist.splice(index, 1);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.map((product) => (
        <div key={product.id}>
          <h2>{product.proName}</h2>
          <img src={product.proImg} alt="img" className="img" />
          <p>{product.info}</p>
          <p>Price : {product.proPrice}</p>
        </div>
      ))}
    </div>
  );
  
}

