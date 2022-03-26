import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
const Title = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  fontSize: "3rem",
  marginBottom: "-1px",
  textDecoration: "underline",
}
const Home = () => {
  return (
    <div style={{backgroundColor: "black"}} className="text-center"> 
      <Navbar />
      <Slider />
      <div style={Title}>Prints</div>
      <br /><br />
        <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
