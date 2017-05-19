import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="oc-footer col-md-12 col-sm-12">
          <div className="container">
            <div className="col-md-5">
              <img src="images/logo.png" className="img-responsive oc-footer-img c" />
            </div>
            <ul className="footer-list col-md-3">
              <li className="footer-list-item">Want to work with us.</li>
              <li className="footer-list-item">Brief us.</li>
            </ul>
            <ul className="footer-contact col-md-4">
              <li className="footer-contact-item"><a href="https://www.google.com/maps/place/115+River+Rd+%23151,+Edgewater,+NJ+07020/data=!4m2!3m1!1s0x89c2f7d1d1ad4a8f:0xbc3ac98fccfd168a?sa=X&ved=0ahUKEwj51eXh7OXTAhXM1CYKHWogDNkQ8gEIJjAA" target="_blank" className="contact-links">115 River Rd #151, Edgewater, NJ 07020 </a></li>
              <li className="footer-contact-item"><a href="tel:1-646-883-6584" className="contact-links">(646) 883-6584</a></li>
              <li className="footer-contact-item"><a href="mailto:contact@ockupy.com" className="contact-links">contact[at]ockupy[dot]com</a></li>
            </ul>
          </div>
      </footer>
    )
  }
}
export default Footer;
