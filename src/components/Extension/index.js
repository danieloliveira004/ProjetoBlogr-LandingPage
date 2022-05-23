import React from "react";
import CardExtension from "../CardExtension";
import './style.css';

export default function Extension() {
  return (
    <section id="extension">
      <div className="container">
        <div className="title">
          <h2>Download the extension</h2>
          <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <div className="card-extension">
          <CardExtension
            image="assets/logo-chrome.svg"
            titulo="Add to Chrome"
            version="Minimum version 62"
          />
          <CardExtension
            image="assets/logo-firefox.svg"
            titulo="Add to Firefox"
            version="Minimum version 55"
          />
          <CardExtension
            image="assets/logo-opera.svg"
            titulo="Add to Opera"
            version="Minimum version 46"
          />
        </div>
      </div>
    </section>
  );
}