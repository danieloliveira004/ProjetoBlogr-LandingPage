import React from "react";
import "./style.css";

const FrontCover = () => (
  <section>
    <div className="container">
      <div className="front-cover">
        <div>
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free. </p>
          <div className="links-front">
            <a href="#" className="btn btn-blue">Get it on Chrome</a>
            <a href="#" className="btn btn-white">Get it on Firefox</a>
          </div>
        </div>
        <div className="front-img">
          <img src="assets/illustration-hero.svg" />
          <div className="bg bg-cover"></div>
        </div>
      </div>
    </div>
  </section>
);

export default FrontCover;