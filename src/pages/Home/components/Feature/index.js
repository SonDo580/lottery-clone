import React from "react";
import { Images } from "../../../../images";

function Feature() {
  return (
    <section className="feature">
      <h1>
        Onbit<span>VN</span> Lorem ipsum dolor sit amet consectetur
      </h1>
      <p>
        <a href="/">
          👉 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus 👈
        </a>
      </p>
      <div className="features">
        <div className="card">
          <img src={Images.home.feature.guaranteed} alt="guaranteed" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="card">
          <img src={Images.home.feature.geoTrust} alt="geo_trust" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <img src={Images.home.feature.ticketScan} alt="ticket_scanned" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            sint numquam
          </p>
        </div>
        <div className="card">
          <img src={Images.home.feature.contactUs} alt="contact_us" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
