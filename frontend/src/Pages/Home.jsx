import React, { useState } from "react";
import { Link } from "react-router-dom";
import amz1 from "./amz1.jpg";
import amz2 from "./amz2.jpg";
import amz3 from "./amz3.jpg";
// import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  const response = async () => {
    const res = await fetch("http://localhost:8080/product");
    const jsonData = await res.json();
    setData(jsonData.msg);
  };
  // console.log(data);
  // response();
  // }, []);
  response();
  return (
    <>
      {/* <h1>Welcome to our Website</h1> */}
      {/* <ul><li><Link > <input type="text" placeholder="Search.." /></Link></li></ul> */}
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
            <img src={amz2} className="d-block w-100" alt="e-com" />
          </div>
          <div className="carousel-item">
            <img src={amz3} className="d-block w-100" alt="e-com" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          // style={{"margin-top": "-50px"}}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          // style={{"margin-top": "-50px"}}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* </div> */}

      <div className="main-body">
        {data.map((product) => (
          <div className="category" key={product.id}>
            <h2>{product.title}</h2>
            <img
              src={product.imgurl}
              alt="e-commerce"
              height="150"
              className="img"
            />
            {/* <p>{product.path}</p> */}
            <br />
            <Link to={product.path}>See more</Link>
          </div>
        ))}
        
 </div>


        <div className="box">
        <p></p>
          <div className="image-container-1">
        <div className="image-item">
        <Link to='/product'> <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/QC_PC_186x116_6._SY116_CB585042283_.jpg"
                alt="image"
              /> 
              <br />
              {/* <Link to='/cards'>see more</Link> */}
              </Link>   Starting ₹499
              <div className="image-item">
              <Link to='/product'>  <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/QC_PC_186x116_7._SY116_CB585040546_.jpg"
                  alt="image"
                />
               </Link> <br />
                {/* <Link to='/cards'>see more</Link> */}
                Starting ₹123
              </div>
            </div>
            <div className="image-item">
            <Link to='/product'><img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/1xDesktopQuadcardw_title-Card_3._SY116_CB572041871_.jpg"
                alt="image"
              />
             </Link> <br />
              {/* <Link to='/cards'>see more</Link> */}
              Starting ₹800
              <div className="image-item">
              <Link to='/product'><img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/QC_186x116_1._SY116_CB595777477_.jpg"
                  alt="image"
                />
                <br />
                </Link> Starting ₹600
              </div>
            </div>
          </div>

          <div className="image-container-1">
        <div className="image-item">
        <Link to='/product'> <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/QC_PC_186x116_6._SY116_CB585042283_.jpg"
                alt="image"
              /> 
              <br />
              {/* <Link to='/cards'>see more</Link> */}
              </Link>   Starting ₹499
              <div className="image-item">
              <Link to='/product'>  <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/QC_PC_186x116_7._SY116_CB585040546_.jpg"
                  alt="image"
                />
               </Link> <br />
                {/* <Link to='/cards'>see more</Link> */}
                Starting ₹123
              </div>
            </div>
            <div className="image-item">
            <Link to='/product'><img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/1xDesktopQuadcardw_title-Card_3._SY116_CB572041871_.jpg"
                alt="image"
              />
             </Link> <br />
              {/* <Link to='/cards'>see more</Link> */}
              Starting ₹800
              <div className="image-item">
              <Link to='/product'><img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/QC_186x116_1._SY116_CB595777477_.jpg"
                  alt="image"
                />
                <br />
                </Link> Starting ₹600
              </div>
            </div>
          </div>
        <div className="image-container-1">
        <div className="image-item">
        <Link to='/product'> <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/QC_PC_186x116_6._SY116_CB585042283_.jpg"
                alt="image"
              /> 
              <br />
              {/* <Link to='/cards'>see more</Link> */}
              </Link>   Starting ₹499
              <div className="image-item">
              <Link to='/product'>  <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/QC_PC_186x116_7._SY116_CB585040546_.jpg"
                  alt="image"
                />
               </Link> <br />
                {/* <Link to='/cards'>see more</Link> */}
                Starting ₹123
              </div>
            </div>
            <div className="image-item">
            <Link to='/product'><img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/1xDesktopQuadcardw_title-Card_3._SY116_CB572041871_.jpg"
                alt="image"
              />
             </Link> <br />
              {/* <Link to='/cards'>see more</Link> */}
              Starting ₹800
              <div className="image-item">
              <Link to='/product'><img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/QC_186x116_1._SY116_CB595777477_.jpg"
                  alt="image"
                />
                <br />
                </Link> Starting ₹600
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Home;
