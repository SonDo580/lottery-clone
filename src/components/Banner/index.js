import { Images } from "../../images";
import "./Banner.scss";

function Banner() {
  return (
    <section className="banner">
      <img src={Images.banner.banner1} alt="banner1" />
      <img src={Images.banner.banner2} alt="banner2" />
    </section>
  );
}

export default Banner;
