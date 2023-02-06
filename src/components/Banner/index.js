import { useEffect, useState } from "react";
import { Images } from "../../images";
import "./Banner.scss";

function Banner() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setActive((prevActive) => !prevActive);
    }, 3000);
  }, []);

  return (
    <section className="banner">
      <img
        className={active ? "active" : ""}
        src={Images.banner.banner1}
        alt="banner1"
      />
      <img
        className={active ? "" : "active"}
        src={Images.banner.banner2}
        alt="banner2"
      />
    </section>
  );
}

export default Banner;
