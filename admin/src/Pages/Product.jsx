import { useState } from "react";
// import "./App.css";

function Product() {
  // const [id, setId] = useState("");
  const [proName, setProname] = useState("");
  const [proImg, setProimg] = useState("");
  const [proInfo, setProinfo] = useState("");
  const [proPrice, setProprice] = useState("");
  const [path, setPath] = useState("");

  const handleSubmit = async () => {
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("imgurl", imgurl);
    // formData.append("path", path);
    // console.log(formData);
    // console.log(title);
    const res = await fetch("http://localhost:8080/pro", {
      method: "POST",
      body: JSON.stringify({
        // id: id,
        proName: proName,
        proImg: proImg,
        proInfo: proInfo,
        proPrice: proPrice,
        path: path,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.json());
  };
  const handleChange = (e) => {
    if (e.target.id == "proName") {
      setProname(e.target.value);
    } else if (e.target.id == "proImg") {
      setProimg(e.target.value);
    } else if (e.target.id == "path") {
      setPath(e.target.value);
    } else if (e.target.id == "proInfo") {
      setProinfo(e.target.value);
    } else if (e.target.id == "proPrice") {
      setProprice(e.target.value);
    }
  };
  return (
    <>
      <div className="pro">
        <lable htmlFor="proName">Enter name : </lable>
        <input type="text" id="proName" onChange={handleChange} /> <br />
        <lable htmlFor="proImg">img-url</lable>
        <input type="text" id="proImg" onChange={handleChange} /> <br />
        <lable htmlFor="path">path</lable>
        <input type="text" id="path" onChange={handleChange} /> <br />
        <lable htmlFor="proInfo">info</lable>
        <input type="text" id="proInfo" onChange={handleChange} /> <br />
        <lable htmlFor="proPrice">price</lable>
        <input type="text" id="proPrice" onChange={handleChange} /> <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Product;
