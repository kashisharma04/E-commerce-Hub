import React, { useState } from "react";
import { Link } from 'react-router-dom';
import amz1 from './amz1.jpg'
import amz2 from './amz2.jpg'
import amz3 from './amz3.jpg'
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
      {/* <div className="container"> */}
        <div
          id="carouselExampleIndicators"
          className="carousel-slide"
          data-bs-ride="carousel"
        >
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={amz1} className="d-block w-100" alt="e-com" />
            </div>
            <div className="carousel-item">
              <img src={amz2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={amz3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            style={{"margin-top": "-50px"}}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            style={{"margin-top": "-50px"}}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      {/* </div> */}

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
