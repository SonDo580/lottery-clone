import { FaBars } from "react-icons/fa";
import { useState } from "react";
import MobileMenuTop from "./MobileMenuTop";
import MobileMenuLinks from "./MobileMenuLinks";

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
          <MobileMenuTop closeMobileMenu={closeMobileMenu} />
          <MobileMenuLinks />
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
