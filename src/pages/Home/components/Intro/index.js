import React from "react";
import { useMediaQuery } from "react-responsive";
import { Images } from "../../../../images";
import "./Intro.scss";

function Intro() {
  const toLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <section className="intro">
      <div className="left">
        <div className="card">
          <div className="card-img">
            <img src={Images.home.intro.globe} alt="globe" />
          </div>
          <div className="card-text">
            <p>
              <strong>
                Onbit<span>VN</span>
              </strong>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, enim?
            </p>
            <a href="/">
              <img src={Images.home.intro.arrow} alt="arrow-icon" />
              <span>Who we are?</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={Images.home.intro.give} alt="give-online" />
          </div>
          <div className="card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ex laudantium, fuga pariatur deleniti, exercitationem nisi sed
              obcaecati repudiandae sint ipsum maiores
            </p>
            <a href="/">
              <img src={Images.home.intro.arrow} alt="arrow-icon" />
              <span>How to play</span>
            </a>
          </div>
        </div>
      </div>

      {toLargeScreen ? null : (
        <div className="right">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/nltt3i5X7FU"
            title="Onbit.vn"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default Intro;
