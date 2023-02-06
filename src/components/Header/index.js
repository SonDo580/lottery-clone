import { Images } from "../../images";

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

      <div class="show-menu">
        <span>MENU</span>
        <i class="fa-solid fa-bars"></i>
      </div>

      <div class="mobile-menu">
        <div class="wrapper">
          <div class="top">
            <div class="logo">
              <a href="/">
                <img
                  src="./image/header/logo_onbit_full.gif"
                  alt="onbit-logo"
                />
              </a>
              <span class="close-menu">
                <i class="fa-regular fa-circle-xmark"></i>
              </span>
            </div>
            <div class="buttons">
              <button class="login">Log in</button>
              <button class="signup">Sign up</button>
              <button class="fb-login">
                <img src="./image/header/fb-small.png" alt="fb-icon" />
                Facebook
              </button>
              <button class="zalo-login">
                <img src="./image/header/zalo-small.png" alt="zalo-icon" />
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
                <i class="fa-solid fa-house-chimney"></i> Home
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-cash-register"></i> Winners
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-gift"></i> News and Events
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-scroll"></i> Policies
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-money-bill"></i> Royalty
                <p>
                  Attractive royalty - Introduce Onbit to friends and family
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
