import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [data, setData] = useState([]);

  // useEffect(() => {
    const response = async () => {
      const res = await fetch('http://localhost:8080/product');
      const jsonData = await res.json();
      setData(jsonData.msg);
    };
    // console.log(data);
    // response();
  // }, []);
    response()
  return (
    <>
      <h1>Welcome to our Website</h1>
      <div className="main-body" >

        {
          data.map((product) => (
            <div className="category" key={product.id} >
              <h2>{product.title}</h2>
              <img src={product.imgurl} alt="e-commerce" height="150" className="img" />
              {/* <p>{product.path}</p> */}
              <br />
              <Link to={product.path}>See more</Link>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Home;
