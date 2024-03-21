import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import Wishlist from "../wishlist/Wishlist";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const incrementQuantity = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      const index = updatedProducts.findIndex(
        (product) => product.id === productId
      );
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
  const addToWishlist =  async (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setWishlist([...wishlist, productToAdd]);
    const res = await fetch("http://localhost:8080/product", {
      method: "POST",
      body: JSON.stringify({
       wishlist
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/pro");
      const jsonData = await response.json();
      setProducts(jsonData.msg.map((product) => ({ ...product, quantity: 0 })));
    };
    fetchData();
  }, []);

  return (
    <div className={styles.parentContainer}>
      {products.map((product) => (
        <div className={styles.productCard}>
          <img src={product.proImg} alt="img" className={styles.productImage} />
          <div className={styles.details}>
            <p className={styles.proName} >{product.proName}</p>
            <p> &#8377;{product.proPrice}</p>
            </div>
            <p>{product.proInfo}</p>
            <button className={styles.wishBtn} onClick={() => addToWishlist(product.id)}>
              Add to Wishlist
            </button>
            <button
              className={styles.btn2}
              onClick={() => incrementQuantity(product.id)}
            >
              +
            </button>
            <span>{product.quantity}</span>
            <button
              onClick={() => decrementQuantity(product.id)}
              className={styles.btn2}
              disabled={product.quantity === 0}
            >
              -
            </button>
        </div>
      ))}
    </div>
  );
}
