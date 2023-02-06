import { Images } from "../../images";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  FaBars,
  FaCashRegister,
  FaGift,
  FaHouseUser,
  FaMoneyBill,
  FaScroll,
} from "react-icons/fa";
import { useState } from "react";

function MobileMenu() {
  const [show, setShow] = useState(false);

  const showMobileMenu = () => {
    setShow(true);
  };

  const closeMobileMenu = () => {
    setShow(false);
  };

  return (
    <>
      <div className="show-menu" onClick={showMobileMenu}>
        <span>MENU</span>
        <FaBars />
      </div>

      <div className={`mobile-menu ${show ? "show" : ""}`}>
        <div className="wrapper">
          <div className="top">
            <div className="logo">
              <a href="/">
                <img src={Images.header.onbitLogo} alt="onbit logo" />
              </a>
              <span className="close-menu" onClick={closeMobileMenu}>
                <AiOutlineCloseCircle />
              </span>
            </div>
            <div className="buttons">
              <button className="login">Log in</button>
              <button className="signup">Sign up</button>
              <button className="fb-login">
                <img src={Images.header.facebook} alt="facebook icon" />
                Facebook
              </button>
              <button className="zalo-login">
                <img src={Images.header.zalo} alt="zalo icon" />
                Zalo
              </button>
            </div>
            <p>
              <a href="/">Forgot Password</a>
            </p>
          </div>
          <ul>
            <li>
              <a href="/">
                <FaHouseUser /> Home
              </a>
            </li>
            <li>
              <a href="/">
                <FaCashRegister /> Winners
              </a>
            </li>
            <li>
              <a href="/">
                <FaGift /> News and Events
              </a>
            </li>
            <li>
              <a href="/">
                <FaScroll /> Policies
              </a>
            </li>
            <li>
              <a href="/">
                <FaMoneyBill /> Royalty
                <p>
                  Attractive royalty - Introduce Onbit to friends and family
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
