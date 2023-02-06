import { useMediaQuery } from "react-responsive";
import { Images } from "../../images";
import { Screen } from "../../style/screen";
import HeaderRight from "./components/HeaderRight";
import MobileMenu from "./components/MobileMenu";
import "./Header.scss";

function Header() {
  const toLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={Images.header.onbitLogo} alt="onbit logo" />
        </a>
      </div>

      {toLargeScreen ? null : <HeaderRight />}

      {toLargeScreen ? <MobileMenu /> : null}
    </header>
  );
}

export default Header;
