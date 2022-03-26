import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";
import "../assests/css/upload.css";
const Upload = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        if (progress === 100) {
          alert("Uploaded Successfully");
        }
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL };
          addProduct(product, dispatch);
        });
      }
    );
  };
  return (
    <div>
      <Navbar />
      <div className="newProduct">
        <form className="addProductForm">
          <h3 className="Title">Add Products</h3>
          <div className="addProductItem">
            <label className="formLabel">Image</label>
            <br />
            <input
              className="uploadInput"
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label className="formLabel" >Title</label>
            <br />
            <input
            className="inputBox"
              name="title"
              type="text"
              placeholder="Project Title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label className="formLabel">Description</label>
            <br />
            <input
            className="inputBox"
              name="desc"
              type="text"
              placeholder="Description..."
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label className="formLabel">Price</label>
            <br />
            <input
            className="inputBox"
              name="price"
              type="number"
              placeholder="100"
              onChange={handleChange}
            />
          </div>
          <div className="formBtn">
          <button onClick={handleClick} className="Button">
            Create
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
