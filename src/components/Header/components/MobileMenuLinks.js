import {
  FaCashRegister,
  FaGift,
  FaHouseUser,
  FaMoneyBill,
  FaScroll,
} from "react-icons/fa";

function MobileMenuLinks() {
  return (
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
          <p>Attractive royalty - Introduce Onbit to friends and family</p>
        </a>
      </li>
    </ul>
  );
}

export default MobileMenuLinks;
