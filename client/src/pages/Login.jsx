import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "../assests/css/Login.css";
import { Link } from "react-router-dom";

const Error = {
  color: "red",
};

const Login = () => {
  const [username, setUsername] = useState(""); //get the username from page
  const [password, setPassword] = useState(""); //get password from page
  const dispatch = useDispatch(); //initializing the dispatch from useDispatch of react-redux
  const { isFetching, error } = useSelector((state) => state.user); //fetching the user and state

  //when submit is clicked
  const handleClick = (e) => {
    //prevent default action
    e.preventDefault();
    //dispatch the name pass to apicall and pass the information to API
    login(dispatch, { username, password });
  };

  return (
    <div>
      <Navbar />
      <div className="loginBox">
        <div className="loginCont">
          <div style={{ fontSize: "1.5rem", fontWeight: "500" }}>SIGN IN</div>
          <form className="formReg" onSubmit={handleClick}>
            <input
              required="required"
              className="inputbox"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required="required"
              className="inputbox"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              className="loginBtn"
              value="LOGIN"
              disabled={isFetching}
            />
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

export default Login;
