import { useMediaQuery } from "react-responsive";
import { Images } from "../../images";
import { Screen } from "../../style/screen";
import MobileMenu from "./MobileMenu";
import "./Header.scss";

function Header() {
  const isLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <header className="header">
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
          <button className="fb-login">
            <img src={Images.header.facebook} alt="facebook icon" />
            Login with Facebook
          </button>
          <button className="zalo-login">
            <img src={Images.header.zalo} alt="zalo icon" />
            Login with Zalo
          </button>
        </div>
      </div>

      {isLargeScreen ? <MobileMenu /> : null}
    </header>
  );
}

export default Header;
