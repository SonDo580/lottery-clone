import { Images } from "../../images";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={Images.header.onbitLogo} alt="onbit logo" />
        </a>
      </div>

      <div className="header-right">
        <div className="top-line">
          <input type="text" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
        <p>
          <a href="/">Forgot Password</a>
        </p>
        <div className="bottom-line">
          <button className="share">Royalty</button>
          <button className="facebook-login">
            <img src={Images.header.facebook} alt="fb-icon" />
            Login with Facebook
          </button>
          <button className="zalo-login">
            <img src={Images.header.zalo} alt="zalo-icon" />
            Login with Zalo
          </button>
        </div>
      </div>

      <MobileMenu />
    </header>
  );
}

export default Header;
