import React from "react";
import './style.css';

export default function CardExtension(props) {
  return (
    <div className="container-cardExtension">
      <div className="container-titleExtension">
        <img src={props.image} />
        <h4>{props.titulo}</h4>
        <p> {props.version} </p>
      </div>
        <img src="assets/bg-dots.svg"/>
      <div className="container-button">
        <a href="#" className="btn btn-blue">Add & Install Extension</a>
      </div>
    </div>
  );
}