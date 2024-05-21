import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__log">
          <img src="public\photo\logo-footer.png" alt="logo" />
        </div>

        <div className="footer__lviv">
          <h3>Lviv</h3>
          <p>Write us</p>
          <a href="tel:+380972233322" target="_blank">
            +38 097 22 333 22
          </a>
          <br />
          <a href="https://maps.app.goo.gl/mxZf9RQabxxjEj8u9" target="_blank">
            SEE ON MAP
            <img
              src="/LvivProject/svg/
\Arrow 3.svg"
              alt="arrow"
            />
          </a>
        </div>

        <div className="footer__social">
          <h3>Social</h3>
          <a href="mailto:lvivtraveling@lnu.edu.ua" target="_blank">
            lvivtraveling@lnu.edu.ua
          </a>
          <a href="tel:+380972233322" target="_blank">
            +38 097 22 333 22
          </a>
          <a href="https://maps.app.goo.gl/jyCWxuo7VZ2SZDGF6" target="_blank">
            Lviv, Dragomanova 50
          </a>
        </div>

        <div className="footer__newsletter">
          <h3>Newsletter</h3>

          <p>
            Subscribe to our newsletter for a weekly dose of new events,
            updates, helpful tips and exclusive offers
          </p>
          <form className="newsletter__form">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />

            <button type="submit">Subscribe</button>
          </form>

          <p>Follow us</p>

          <div className="newsletter__social-list">
            <ul>
              <li>
                <a href="">
                  <img
                    src="/LvivProject/svg/
\instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/LvivProject/svg/
\linkedin.svg"
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/LvivProject/svg/
\x.svg"
                    alt="X"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/LvivProject/svg/
\threads.svg"
                    alt="threads"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
