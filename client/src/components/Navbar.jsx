import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../assests/css/home.css"

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    let userN = JSON.parse(localStorage.getItem("user"));
    let userC = userN.username;
    function logOut() {
      localStorage.clear();
      alert("Logged out please referesh");
    }
    return (
      <div>
        {/* header session */}
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img
                  className="img-fluid"
                  src="https://www.linkpicture.com/q/logo_439.png"
                  alt="logo"
                  style={{ pointerEvents: "none" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse flex-row-reverse"
                id="navbarNavAltMarkup"
                >
                <div className="navbar-nav" >
                  <Link to="/" className="nav-link">
                    <div className="MenuItem">Home</div>
                  </Link>
                  <Link to="/prints" className="nav-link">
                    <div className="MenuItem">Print</div>
                  </Link>
                  <Link to="/" className="nav-link">
                    <div className="MenuItem">{userC}</div>
                  </Link>
                  <Link to="/upload" className="nav-link">
                    <div className="MenuItem">Upload</div>
                  </Link>
                  <Link to="/" className="nav-link">
                    <div className="MenuItem" onClick={logOut}>Logout</div>
                  </Link>
                  <Link to="/cart" className="nav-link">
                    <div className="MenuItem">
                      <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                      </Badge>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        {/* header session */}
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img
                  className="img-fluid logo"
                  src="https://www.linkpicture.com/q/logo_439.png"
                  alt="logo"
                  style={{ pointerEvents: "none" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse flex-row-reverse"
                id="navbarNavAltMarkup" 
              >
                <div className="navbar-nav" >
                  <Link to="/" className="nav-link">
                    <div className="MenuItem">Home</div>
                  </Link>
                  <Link to="/prints" className="nav-link">
                    <div className="MenuItem">Print</div>
                  </Link>
                  <Link to="/register" className="nav-link">
                    <div className="MenuItem">Register</div>
                  </Link>
                  <Link to="/login" className="nav-link">
                    <div className="MenuItem">Login</div>
                  </Link>
                  <Link to="/cart" className="nav-link">
                    <div className="MenuItem">
                      <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                      </Badge>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
};

export default Navbar;
