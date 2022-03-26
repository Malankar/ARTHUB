import Navbar from "../components/Navbar";
import Products from "../components/Products";
const ProductList = () => {
  return (
    <div style={{backgroundColor: "black"}}>
      <br /><br />
      <Navbar />
      <div style={{padding: "12rem 0px", display: "flex", justifyContent: "center",}}>
      <Products />
      </div>
    </div>
  );
};

export default ProductList;
