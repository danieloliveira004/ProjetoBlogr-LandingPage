import React, { useState } from "react";
import Card from '../Card';
import './style.css';
let active = 0;
function Features() {
  const [card, setCard] = useState(0);

  function changeCard(x) {
    const image = document.querySelector('.card-img');
    const text = document.querySelector('.text');
    const buttons = document.querySelectorAll('.buttons-features button'); 
    if (x != active) {
      buttons[active].className = ' ';
    }
    image.classList = 'card-img';
    buttons[x].classList = ('active');
    active = x;
    setCard(x);
    animation(text, image);
  }

  function animation(text, image) {
    image.classList += ' animation';
    text.classList += ' animation';
    setTimeout(() => {
      image.classList = 'card-img';
      text.classList = ' text';
    }, 800);
  }

  return (
    <section>
      <div className="container">
        <div className="title">
          <h2>Features</h2>
          <p> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className="buttons-features">
          <button className="active" onClick={() => (changeCard(0))}>Simple Bookmarking</button>
          <button onClick={() => (changeCard(1))}>Speedy Searching</button>
          <button onClick={() => (changeCard(2))}>Easy Sharing</button>
        </div>
        <div className="container-card-features">
          <Card id={card} />
        </div>
      </div>
    </section>
  );
}

export default Features;