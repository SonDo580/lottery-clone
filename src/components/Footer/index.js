import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Images } from "../../images";
import "./Footer.scss";

function Footer() {
  const toLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <footer>
      {toLargeScreen ? <h3>ONBIT VIETNAM COMPANY</h3> : null}

      <div className="footer-top">
        {toLargeScreen ? null : (
          <div className="policy">
            <h4>Our Policy</h4>
            <ul>
              <li>
                <a href="/">General Policy</a>
              </li>
              <li>
                <a href="/">Transaction Policy</a>
              </li>
              <li>
                <a href="/">Payment methods</a>
              </li>
              <li>
                <a href="/">Security Policy</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
        )}

        <div className="connect">
          {toLargeScreen ? null : <h4>Connect with us</h4>}

          <div>
            <a href="https://www.facebook.com/onbit.vn">
              <img src={Images.footer.facebook} alt="facebook icon" />
            </a>
            <a href="https://www.youtube.com/watch?v=nltt3i5X7FU">
              <img src={Images.footer.youtube} alt="youtube icon" />
            </a>
            <a href="https://www.instagram.com/onbit.vn/">
              <img src={Images.footer.instagram} alt="instagram-icon" />
            </a>
            <a href="https://twitter.com/onbitvn">
              <img src={Images.footer.tweeter} alt="tweeter icon" />
            </a>
          </div>
        </div>

        <div className="payment">
          <h4>Payment methods</h4>
          <div>
            <img src={Images.footer.atmCard} alt="atm card" />
            <img src={Images.footer.visaCard} alt="visa" />
            <img src={Images.footer.masterCard} alt="master card" />
            <img src={Images.footer.momo} alt="momo" />
          </div>
          <div className="vnpay">
            <img src={Images.footer.vnpay} alt="vnpay" />
          </div>
        </div>

        <div className="customer">
          {toLargeScreen ? null : <h4>Customer service</h4>}

          <p>
            {toLargeScreen ? <FaPhone /> : <span>Hotline:</span>}
            <a href="/">0967.401.489</a>
          </p>

          {toLargeScreen ? null : <p>Time: 8:00 - 17:00</p>}
          {toLargeScreen ? null : <p>All weekdays, include holidays</p>}

          <p>
            {toLargeScreen ? <FaEnvelope /> : <span>Supported email:</span>}
            <a href="/">support@onbit.vn</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {toLargeScreen ? <h3>ONBIT VIETNAM COMPANY</h3> : null}

        <p>
          <a href="/">Intro</a>CBR: 0315283217, granted by HCMC D.P.I
        </p>
        <p>
          <a href="/">Contact</a>Address: Lorem ipsum dolor sit amet,
          consectetur adipisicing elit
        </p>
        <p className="copyright">
          Copyright © 2021 Onbit VN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
