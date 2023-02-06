import { Images } from "../../../images";

function HeaderRight() {
  const disabledLink = { pointerEvents: "none" };

  return (
    <div className="header-right">
      <div className="top-line">
        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
      <p>
        <a href="/" style={disabledLink}>
          Forgot Password
        </a>
      </p>
      <div className="bottom-line">
        <button className="share">Sharing Royalty</button>
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
  );
}

export default HeaderRight;
