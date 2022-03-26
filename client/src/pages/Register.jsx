import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import "../assests/css/Register.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Error = {
  color: "red",
};
const Register = () => {
  const [username, setUsername] = useState(""); //get the username from page
  const [email, setEmail] = useState(""); //get the email from page
  const [password, setPassword] = useState(""); //get the password from page
  const dispatch = useDispatch(); //initializing the dispatch from useDispatch of react-redux
  const { isFetching, error } = useSelector((state) => state.user); //fetching the user and state
  //when submit is clicked
  const handleClick = (e) => {
    //prevent default action
    e.preventDefault();
    //dispatch the name pass to apicall and pass the information to API
    register(dispatch, { username, email, password });
  };
  return (
    <div>
      <Navbar />
      <div className="registerBox">
        <div className="regCont">
        <form className="contianer" onSubmit={handleClick} autocomplete="off">
          <div style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            CREATE AN ACCOUNT
          </div>
          <div className="formReg">
            <input
              type="text"
              required="required"
              className="inputboxR"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              required="required"
              className="inputboxR"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required="required"
              className="inputboxR"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="Agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance.
            </div>
            <br />
            <input
              type="submit"
              className="regBtn"
              disabled={isFetching}
              value="CREATE"
              />
          </div>
          {error && <div style={Error}>{error}</div>}
        </form>
        <p>Dont Have a account yet? &nbsp;
        <Link to="/register">
        Sign Up
        </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
