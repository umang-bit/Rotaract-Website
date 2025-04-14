import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importing social media icons

const ContactUs = () => {
  return (
    <div className="contact-content">
      <div className="contact-heading">
        Contact Us
      </div>
      <div className="contact-subheading">
        We're here to help! Reach out to us via any of the following:
      </div>
      <div className="contact-paragraph">
        <p>If you have any questions or need assistance, feel free to get in touch with us. We're always happy to help!</p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
      </div>

      <div className="mailing">
        <p>Or you can email us directly at:</p>
        <a href="mailto:info@example.com" className="email-link">info@example.com</a>
      </div>
    </div>
  );
};

export default ContactUs;
