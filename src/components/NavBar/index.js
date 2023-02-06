import { FaCaretDown } from "react-icons/fa";
import "./NavBar.scss";

import { Link } from "react-router-dom";

function NavBar() {
  const disabledLink = { pointerEvents: "none" };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Play now <FaCaretDown />
          <div className="list">
            <p>
              <Link to="/play">Vietlott Keno</Link>
            </p>
            <p>
              <Link to="/play">US MegaMillions</Link>
            </p>
            <p>
              <Link to="/play">Euro Millions</Link>
            </p>
            <p>
              <Link to="/play">Oz Lotto</Link>
            </p>
          </div>
        </li>
        <li>
          Result <FaCaretDown />
          <div className="list">
            <p>
              <a href="/" style={disabledLink}>
                Vietlott Keno
              </a>
            </p>
            <p>
              <a href="/" style={disabledLink}>
                US MegaMillions
              </a>
            </p>
            <p>
              <a href="/" style={disabledLink}>
                Euro Millions
              </a>
            </p>
            <p>
              <a href="/" style={disabledLink}>
                Oz Lotto
              </a>
            </p>
          </div>
        </li>
        <li>
          <a href="/" style={disabledLink}>
            Winners
          </a>
        </li>
        <li>
          <a href="/" style={disabledLink}>
            News and Events
          </a>
        </li>
        <li>
          <a href="/" style={disabledLink}>
            About us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
