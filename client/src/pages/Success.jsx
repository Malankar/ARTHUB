import React from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Success = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const sendEmail = (e) => {
    e.preventDefault();
    var templateParams = {
      to_name: currentUser.username,
      imgname: cart.products.map((product) => product.title),
      img: cart.products.map((product) => product.img),
      emailTo: document.getElementById("email").value,
    };

    emailjs.send("service_y7wua3q", "template_a3yob5s", templateParams, 'aexkK1s8drzAbTfoS').then(
      function (response) {
        alert("Email Send!!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err) {
        alert("Enter User Name",err);
        console.log("FAILED...", err);
      }
    );
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "50rem" }}>
        <h1 style={{ fontWeight: "600" }}>{currentUser.username},</h1>
        <h2>
          Your order is been processed please forward the following to your
          appopriate Email ID
        </h2>
        <label>
          <input
            id="email"
            type="text"
            placeholder="Please Enter Your Email ID"
            style={{
              flex: "1",
              minWidth: "40%",
              margin: "10px 0",
              padding: "10px",
            }}
          />
        </label>
        <br />
        {cart.products.map((product) => (
          <div
            style={{
              display: "inline",
              justifyContent: "space-evenly",
              padding: "5px",
            }}
          >
            <img
              src={product.img}
              style={{ width: "200px" }}
              alt="product img"
              id="productImg"
            />
          </div>
        ))}
        <br /> <br />
        <button
          id="btn"
          style={{
            width: "20%",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
          }}
          onClick={sendEmail}
        >
          Send
        </button>
        <br />
        <Link to="/">
        <button style={{ padding: 10, marginTop: 20, backgroundColor: "white" }}>Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
