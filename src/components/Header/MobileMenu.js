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

function MobileMenu() {
  return (
    <>
      <div className="show-menu">
        <span>MENU</span>
        <FaBars />
      </div>

      <div className="mobile-menu">
        <div className="wrapper">
          <div className="top">
            <div className="logo">
              <a href="/">
                <img src={Images.header.onbitLogo} alt="onbit-logo" />
              </a>
              <span className="close-menu">
                <AiOutlineCloseCircle />
              </span>
            </div>
            <div className="buttons">
              <button className="login">Log in</button>
              <button className="signup">Sign up</button>
              <button className="fb-login">
                <img src={Images.header.facebook} alt="facebook-icon" />
                Facebook
              </button>
              <button className="zalo-login">
                <img src={Images.header.zalo} alt="zalo-icon" />
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
