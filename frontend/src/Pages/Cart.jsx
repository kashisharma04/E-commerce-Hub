import React, { useEffect, useState } from "react";
import "./Cart.css";
import Wishlist from './Wishlist'

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const incrementQuantity = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts]; // Create a copy of the state
      const index = updatedProducts.findIndex((product) => product.id === productId);
      if (index !== -1) {
        updatedProducts[index].quantity = updatedProducts[index].quantity + 1;
      }
      return updatedProducts;
    });
  };
  
  const decrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  const addToWishlist = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setWishlist([...wishlist, productToAdd]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/pro');
      const jsonData = await response.json();
      setProducts(jsonData.msg.map((product) => ({ ...product, quantity: 0 })));
    };
    fetchData();
  }, []);

  return (
    <div className="cards">
      {products.map((product) => (
        <div className="cards" key={product.id}>
          <div className="product-card">
            <h2>{product.proName}</h2>
            <img src={product.proImg} alt="img" className="img" />
            <p>{product.proInfo}</p>
            <p>Price : {product.proPrice}</p>
   
            <button onClick={() => addToWishlist(product.id)}>Add to Wishlist</button>
            <button className="btn2" onClick={() => incrementQuantity(product.id)}>
              +
            </button>
            <span>{product.quantity}</span>
            <button
              onClick={() => decrementQuantity(product.id)}
              className="btn2"
              disabled={product.quantity === 0}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
