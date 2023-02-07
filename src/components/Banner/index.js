import { useEffect, useState } from "react";
import { Images } from "../../images";
import "./Banner.scss";

const banners = [Images.banner.banner1, Images.banner.banner2];

function Banner() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const getNextBanner = () => {
    setBannerIndex((prevBannerIndex) => {
      if (prevBannerIndex === banners.length - 1) {
        return 0;
      }
      return prevBannerIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => getNextBanner(), 3000);

    return () => clearInterval(interval);
  });

  return (
    <section className="banner">
      <img src={banners[bannerIndex]} alt="banner" />
    </section>
  );
}

export default Banner;
