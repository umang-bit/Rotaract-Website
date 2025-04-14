import React from 'react';

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
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_logo_2022.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
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
