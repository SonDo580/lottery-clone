import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <div className="contact-info">
        <p>
          <i className="fa-solid fa-location-dot"></i>
          <FaLocationArrow />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            saepe?
          </span>
        </p>
        <p>
          <FaPhone />
          <a href="/">0967.401.489</a>
        </p>
        <p>
          <FaEnvelope />
          <a href="/">support@onbit.vn</a>
        </p>
      </div>
      <div id="map">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.523432256371!2d106.68434684944394!3d10.771164262200724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2319562955%3A0xf7d5e643bcab925b!2zNDEyIE5ndXnhu4VuIFRo4buLIE1pbmggS2hhaSwgUGjGsOG7nW5nIDUsIFF14bqtbiAzLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1665472711596!5m2!1sen!2s"
          height="200"
          width="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
