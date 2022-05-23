import React from "react";
import './style.css';

export default function Contact() {

  function toCheck() {
    const email = document.querySelector('#email-input');
    const container = document.querySelector('.container-check');
    const msg = document.querySelector('.container-check span');
    const icon = document.querySelector('.icon');
    if (email.value == "") {
      container.classList = 'container-check error';
      msg.innerHTML = "Whoops, make sure it's an email";
      icon.classList = 'icon error';
    }
    else {
      container.classList = 'container-check sucess';
      email.classList += ' on';
      icon.classList = 'icon sucess';
      msg.innerHTML = "Email registered successfully!";
      setTimeout(() => {
        container.classList = 'container-check';
        icon.classList = 'icon ';
        email.classList = 'text-animation';
        email.value = '';
      }, 2000);
    }
  }

  return (
    <section id="contact">
      <div className="container-contact">
        <p>35,000+ already joined</p>
        <h3>Stay up-to-date with what we’re doing</h3>
        <div className="input-contact">
          <div className="input-container">
            <input id="email-input" type="text" className="text-animation" placeholder="Enter your email address" />
            <div className="icon ">
              <span>!</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
            </div>
            <div className="container-check">
              <span></span>
            </div>
          </div>
          <a href="#" className="btn btn-red" onClick={ toCheck }>Contact Us</a>
        </div>
      </div>
    </section>
  );
}