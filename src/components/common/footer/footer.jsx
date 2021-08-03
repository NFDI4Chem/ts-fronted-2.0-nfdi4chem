import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Imprint
          </section>
          <section className="footer-info__returns">
            Terms of Use
          </section>
          <section className="footer-info_privacy">
            Privacy Policy
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            shop.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            99999999999
          </section>
          <section className="footer-info__contact">
            My Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;