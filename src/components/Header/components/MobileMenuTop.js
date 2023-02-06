import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Images } from "../../../images";

function MobileMenuTop(props) {
  const { closeMobileMenu } = props;

  const disabledLink = { pointerEvents: "none" };

  return (
    <div className="top">
      <div className="logo">
        <Link to="/">
          <img src={Images.header.onbitLogo} alt="onbit logo" />
        </Link>

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
        <a href="/" style={disabledLink}>
          Forgot Password
        </a>
      </p>
    </div>
  );
}

export default MobileMenuTop;
