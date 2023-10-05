import React, { useState } from "react";
import "./register.css";
import { imageDB } from "../libs/Config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Register = () => {
  const [img, setImg] = useState("");
  const [displayErr, setdisplayErr] = useState(false);
  const [newFData, setnewFData] = useState({
    Fname: "",
    des: "",
    link: "",
  });

  const handleClick = () => {
    if (img != "") {
      const imgRef = ref(
        imageDB,
        `charitywebsiteimgs/${v4()}${newFData.Fname}`
      );
      uploadBytes(imgRef, img);
      setdisplayErr(false);
      setnewFData({
        Fname: "",
        des: "",
        link: "",
      });
    } else {
      setdisplayErr(true);
    }
  };
  const inputValue = (change) => {
    const { name, value } = change.target;
    setnewFData({ ...newFData, [name]: value });
  };

  return (
    <div className="divRegisterMain">
      <div className="formRegister">
        <label htmlFor="name">Name of Foundation :</label>
        <input
          type="text"
          value={newFData.Fname}
          name="Fname"
          onChange={inputValue}
        />
        <label htmlFor="des">Describe your Foundation :</label>
        <textarea
          name="des"
          cols="30"
          value={newFData.des}
          onChange={inputValue}
          rows="10"
        ></textarea>
        <label htmlFor="link">Foundation website Link :</label>
        <input
          type="text"
          name="link"
          onChange={inputValue}
          value={newFData.link}
        />
        <div>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <button onClick={handleClick}>Upload image</button>
          <p style={{ color: "red" }}>
            {displayErr && "choose an image first!!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
