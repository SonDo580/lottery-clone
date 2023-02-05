function Header() {
  return (
    <header>
      <div class="header-left">
        <a href="/">
          <img src="./image/header/logo_onbit_full.gif" alt="onbit-logo" />
        </a>
      </div>

      <div class="header-right">
        <div class="top-line">
          <input type="text" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
          <button class="login">Log in</button>
          <button class="signup">Sign up</button>
        </div>
        <p>
          <a href="/">Forget Password</a>
        </p>
        <div class="bottom-line">
          <button class="share">Royalty</button>
          <button class="fb-login">
            <img src="./image/header/fb-small.png" alt="fb-icon" />
            Login with Facebook
          </button>
          <button class="zalo-login">
            <img src="./image/header/zalo-small.png" alt="zalo-icon" />
            Login with Zalo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
