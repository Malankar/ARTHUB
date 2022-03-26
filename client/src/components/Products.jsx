import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import "../assests/css/product.css"
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  });
  return (
    <div className="container-fluid" style={{backgroundColor: "black", margin: "auto", justifyContent: "center"}}>
      <div className="product">
      {products.map((item) => <Product item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Products;
