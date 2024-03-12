import { useState } from "react";
// import "./App.css";

function Home() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [imgurl, setImgurl] = useState("");
  // const [info, setInfo] = useState("");
  // const [price, setPrice] = useState("");
  const [path, setPath] = useState("");

  const handleSubmit = async () => {
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("imgurl", imgurl);
    // formData.append("path", path);
    // console.log(formData);
    // console.log(title);
    const res = await fetch("http://localhost:8080/product", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        title: title,
        imgurl: imgurl,
        path: path,
        // info: info,
        // price: price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.json());
  };
  const handleChange = (e) => {
    if (e.target.id == "title") {
      setTitle(e.target.value);
    } else if (e.target.id == "id") {
      setId(e.target.value);
    } else if (e.target.id == "img") {
      setImgurl(e.target.value);
    } else if (e.target.id == "path") {
      setPath(e.target.value);
    // } else if (e.target.id == "info") {
    //   setInfo(e.target.value);
    // } else if (e.target.id == "price") {
    //   setPrice(e.target.value);
    }
  };
  return (
    <>
      <div className="product">
        <lable htmlFor="id">id : </lable>
        <input type="text" id="id" onChange={handleChange} /> <br />
        <lable htmlFor="title">Enter title : </lable>
        <input type="text" id="title" onChange={handleChange} /> <br />
        <lable htmlFor="img">img-url</lable>
        <input type="text" id="img" onChange={handleChange} /> <br />
        <lable htmlFor="path">path</lable>
        <input type="text" id="path" onChange={handleChange} /> <br />
        {/* <lable htmlFor="info">info</lable>
        <input type="text" id="info" onChange={handleChange} /> <br />
        <lable htmlFor="price">price</lable> */}
        {/* <input type="text" id="price" onChange={handleChange} /> <br /> */}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Home;
