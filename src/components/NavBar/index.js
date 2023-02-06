import { FaCaretDown } from "react-icons/fa";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          Play now <FaCaretDown />
          <div class="list">
            <p>
              <a href="/">Vietlott Keno</a>
            </p>
            <p>
              <a href="/">US MegaMillions</a>
            </p>
            <p>
              <a href="/">Euro Millions</a>
            </p>
            <p>
              <a href="/">Oz Lotto</a>
            </p>
          </div>
        </li>
        <li>
          Result <FaCaretDown />
          <div class="list">
            <p>
              <a href="/">Vietlott Keno</a>
            </p>
            <p>
              <a href="/">US MegaMillions</a>
            </p>
            <p>
              <a href="/">Euro Millions</a>
            </p>
            <p>
              <a href="/">Oz Lotto</a>
            </p>
          </div>
        </li>
        <li>
          <a href="/">Winners</a>
        </li>
        <li>
          <a href="/">News and Events</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;