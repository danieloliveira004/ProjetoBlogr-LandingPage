import React from "react";
import './style.css';

const url = 'assets/';

const content = [
  // BOOKMARK
  {
    title: 'Bookmark in one click',
    paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  // INTELLIGENT
  {
    title: 'Intelligent search',
    paragraph: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  // SHARE
  {
    title: 'Share your bookmarks',
    paragraph: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
]
// 
const Card = (props) => (
  <div className="container-card">
    <div className="card-img">
      <img src={url + 'illustration-features-tab-' + (props.id + 1) + '.svg'} />
      <div className="bg bg-features"></div>
    </div>
    <div className="text">
      <h3>{content[props.id].title}</h3>
      <p>{content[props.id].paragraph}</p>
      <a href="#" className="btn btn-blue">More Info</a>
    </div>
  </div>
);

export default Card;