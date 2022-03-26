import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../assests/css/product.css";
const Product = ({ item }) => {
  return (
    <div className="container">
      <Link to={`/product/${item._id}`}>
        <div className="Image">
          <img
            src={item.img}
            style={{ pointerEvents: "none" }}
            alt="product imgs"
          />
        </div>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Product;
