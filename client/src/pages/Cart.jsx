import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../assests/css/cart.css";
import { clearCart } from "../redux/cartRedux";
const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  //get the cart persisting state
  const cart = useSelector((state) => state.cart);
  //get Stipetoken
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  //after getting the token execute the function
  const onToken = (token) => {
    setStripeToken(token);
  };
  const product = useState({});
  const quantity = useState();
  const dispatch = useDispatch();
  //remove btn
  const clearCartBtn = () => {
    dispatch(
      clearCart({ ...product, quantity})
    );
  }

  //using the useEffect hook
  useEffect(() => {
    //making request to our api
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        //if success then pass the stripe data and products
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {
        //show this if any error
        console.log("error");
      }
    }; //verify the token and execute the fuction
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]); // eslint-disable-line react-hooks/exhaustive-deps
  //the above comment is for warning dont change it!! above is the response
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Navbar />
      <br />
      <div className="containerCart">
        <div className="titleCart">YOUR CART</div>
        <div className="upperPart">
          <Link to="/prints">
            <button className="topButton">CONTINUE SHOPPING</button>
          </Link>
        <button className="cCBtn" onClick={clearCartBtn}>CLEAR CART</button>
        </div>
        <br />
        <div className="bottomPart">
          <div className="container">
            {cart.products.map((product) => (
              <div style={{ display: "flex", padding: "1rem" }}>
                <div style={{ display: "flexbox", flex: "2" }}>
                  <img
                    src={product.img}
                    style={{ width: "200px" }}
                    alt="product img"
                  />
                  <div className="details">
                    <div style={{ fontSize: "1.3rem", fontWeight: "300" }}>
                      <b style={{ fontWeight: "600" }}>Product:</b>
                      {product.title}
                    </div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "300" }}>
                      <b style={{ fontWeight: "600" }}>ID:</b> {product._id}
                    </div>
                  </div>
                </div>
                <div className="priceDetailContainer">
                  <div className="priceContainer">
                    <div style={{ fontSize: "1rem", fontWeight: "800" }}>
                      {product.quantity}
                    </div>
                  </div>
                  <br />
                  <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                    ₹ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="summaryCont">
            <div style={{ fontWeight: "500", fontSize: "2rem" }}>
              ORDER SUMMARY
            </div>
            <div className="summaryItem">
              <div>Subtotal</div>
              <div>₹ {cart.total}</div>
            </div>
            <div className="summaryItem">
              <div>Estimated Shipping</div>
              <div>₹ 50</div>
            </div>
            <div className="summaryItem">
              <div>Email Transfer</div>
              <div>₹ -50</div>
            </div>
            <div className="summaryItem" type="total">
              <div>Total</div>
              <div>₹ {cart.total}.00/-</div>
            </div>
            {user ? (
              <StripeCheckout
                name="ArtHub"
                image="https://i.ibb.co/tDRXgL9/logo.jpg"
                description={`Your total is ₹${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="topButton">CHECKOUT NOW</button>
              </StripeCheckout>
            ) : 
            <Link to="/login">
              <button className="loginBtnC">LOGIN</button>
            </Link>
          }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
