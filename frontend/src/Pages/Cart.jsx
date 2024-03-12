import React, { useEffect, useState } from "react";
import "./Cart.css";
export default function Cart() {
  const [quan, setQuan] = useState(0);
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState();

  const inc = () => {
    setQuan(quan + 1);
  };
  const dec = () => {
    if (quan >= 1) {
      setQuan(quan - 1);
    }
  };
  const handleItem = (item) => {
    setWishlist([...wishlist, item])
  }
  useEffect(()=>{
    const response = async () => {
      const res = await fetch('http://localhost:8080/pro');
      const jsonData = await res.json();
      setData(jsonData.msg);
    };
    response()
  },[])
  
  return (
    <div className="cards">
      {data.map((product,index) => (
        <>
          <div className="cards" key={index}>
            <div className="product-card">
              <h2>{product.proName}</h2>
              <img src={product.proImg} alt="img" className="img" />
              <p>{product.info}</p>
              <p>Price : {product.proPrice}</p>  
              <br /><br />
              <button className="btn2" onClick={inc}>+</button>
              <span>{quan}</span>
              <button onClick={dec} className="btn2">-</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
