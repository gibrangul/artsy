import React, { useEffect, useState } from "react";
import NewTabLink from "../../components/NewTabLink";

const Contact = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  return (
    <div
      className={`content ${loading ? "hide" : "show"} flex-column flex-center`}
    >
      <h1 className="mt-48">
        Contact <span className="primary-text">Artsy</span>
      </h1>
      <h2 className="text-center mt-12 normal-font">Have a question?</h2>
      <h3
        className="text-center mt-12 normal-font"
        style={{
          wordBreak: "break-word",
        }}
      >
        You can reach out to us via the following:
        <div className="flex-row flex-justify-between mt-24">
          <div className="flex-row flex-align-center flex-justify-center">
            <div className="icon-24 email-icon mr-8" />
            <p>Email</p>
          </div>
          <a href="mailto: info@artsy.example.com">info@artsy.example.com</a>
        </div>
        <div className="flex-row flex-justify-between mt-24">
          <div className="flex-row flex-align-center flex-justify-center">
            <div className="icon-24 phone-icon mr-8" />
            <p>Phone</p>
          </div>
          <a href="tel:+923331234567">+92-333-1234567</a>
        </div>
        <div className="flex-row flex-align-center flex-justify-between mt-24">
          <div className="flex-row flex-align-center flex-justify-center">
            <div className="icon-24 address-icon mr-8" />
            <p>Address</p>
          </div>
          <NewTabLink url="https://goo.gl/maps/qGW2soDGTS9nziBx8">
            Margalla Hills, Islamabad
          </NewTabLink>
        </div>
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24487.996013616823!2d73.03357671067904!3d33.74580095389956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x440c38883a64cd51!2sThe%20Monal%20Restaurant!5e0!3m2!1sen!2s!4v1601626573977!5m2!1sen!2s"
          frameBorder="0"
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "8px",
          }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="mt-24"
        ></iframe>
      </h3>
    </div>
  );
};
export default Contact;
