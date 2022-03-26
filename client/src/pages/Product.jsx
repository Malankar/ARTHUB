import { Add, Remove } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import "../assests/css/ProductDisplay.css"
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity})
    );
  };
  return (
    <div style={{backgroundColor: "black"}}>
      <Navbar/>
      <br /> <br /> <br /> <br />
      <div className="container-fluid Wrapper">
        <div className="img-fluid ImgContainer">
          <img className="Image" src={product.img} style={{ pointerEvents: "none" }} alt="productimg"/>
        </div>
        <div className="InfoContainer">
          <div className="TitleImg">{product.title}</div>
          <div className="Desc">{product.desc}</div>
          <div className="Price">₹ {product.price}</div>
          <div className="AddContainer">
            <div className="AmountContainer">
              <Remove onClick={() => handleQuantity("dec")} />
              <div className="Amount">{quantity}</div>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <Link to="/cart" style={{ textDecoration: "none"}}>
              <div className="Buttoncart" onClick={handleClick}>ADD TO CART</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
