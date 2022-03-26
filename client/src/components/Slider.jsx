import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../assests/css/home.css"
const Slider = () => {
  return (
    <div className="container-fluid text-center" style={{ backgroundColor: "black", marginTop: "2rem"}}>
            <div className="row" style={{color: "white"}}>
                <div className="col-xl-5 col-md-* Slogan" style={{color: "white"}}>
                    <svg className="Path_10 col" viewBox="0 0 3 204">
            <path id="Path_10" d="M 3 0 L 0 204">
            </path>
          </svg>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="bigslogan">Explore Create & Learn</span>
                    <span className="br"></span>
                    <span className="smallslogan">Bring your ideas to life</span>
                </div>
                <div className="col-xl-5 col-md-*" style={{color: "white"}}>
                <video classname="img-fluid video" style={{ width: "100%"}} src="https://krikrak.fr/delirium-lab/wp-content/uploads/sites/18/2019/10/delirium_lab-Routingle.mp4" loop autoPlay="autoplay" playsInline muted />
                </div>
            </div>
        </div>
  );
};

export default Slider;
