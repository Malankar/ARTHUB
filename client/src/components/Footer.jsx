import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../assests/css/home.css'
const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="img-fluid text-center">
          <img src="images/logo_PNG_black.png" alt="logo png black" />
          <br />
          <span className="logoname">Arthub</span>
        </div><br /><br />
        <div className="row row-cols-auto justify-content-center">
          <div className="col">
            <a href="https://www.facebook.com/avdhut.malankar/">
              <img src="images/facebook.png" alt="facebook logo" />
            </a>
          </div>
          <div className="col">
            <a href="https://twitter.com/AdarshM92995789">
              <img src="images/twitter.png" alt="Twitter logo" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/pixelated_renders/">
              <img src="images/insta_png.png" alt="Insta logo" />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img src="images/discord.png" alt="Discord logo" />
            </a>
          </div><br /><br />
        </div>
        <div className="copyright">
          <span>© 2021 ARTHUB3D,INC. ARTHUB3D,AH3D, AND ANY ASSOCIATED LOGOS ARE <br />TRADEMARKS, SERVICE MARKS, AND/OR
            REGISTERED TRADEMARKS OF ARTHUB3D,INC.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer