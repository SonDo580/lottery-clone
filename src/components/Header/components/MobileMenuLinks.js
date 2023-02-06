import {
  FaCashRegister,
  FaGift,
  FaHouseUser,
  FaMoneyBill,
  FaPlay,
  FaScroll,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileMenuLinks() {
  const disabledLink = { pointerEvents: "none" };

  return (
    <ul>
      <li>
        <Link to="/">
          <FaHouseUser /> Home
        </Link>
      </li>
      <li>
        <Link to="/play">
          <FaPlay /> Play
        </Link>
      </li>
      <li>
        <a href="/" style={disabledLink}>
          <FaCashRegister /> Winners
        </a>
      </li>
      <li>
        <a href="/" style={disabledLink}>
          <FaGift /> News and Events
        </a>
      </li>
      <li>
        <a href="/" style={disabledLink}>
          <FaScroll /> Policies
        </a>
      </li>
      <li>
        <a href="/" style={disabledLink}>
          <FaMoneyBill /> Royalty
          <p>Attractive royalty - Introduce Onbit to friends and family</p>
        </a>
      </li>
    </ul>
  );
}

export default MobileMenuLinks;
