import React from "react";
import './style.css';

export default function Frequently() {
  let active=0;
  
  function open(y) {
    const questions = document.querySelectorAll('.awsers');
    const svgs = document.querySelectorAll('.questions');
    questions[y].classList.toggle('open');
    svgs[y].classList.toggle('open');
  }

  return (
    <section id="frequently">
      <div className="container">
        <div className="title">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
        <div className="container-frequently">
          <ul>
            <li className="list-questions">
              <div className="questions" onClick={() => open(0)}>
                What is Bookmark?
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
              </div>
              <div className="awsers">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
              </div>
            </li>
            <li className="list-questions">
              <div className="questions" onClick={() => open(1)}>
                How can I request a new browser?
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
              </div>
              <div className="awsers">
                <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
              </div>
            </li>
            <li className="list-questions">
              <div className="questions" onClick={() => open(2)}>
                Is there a mobile app?
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
              </div>
              <div className="awsers">
                <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.</p>
              </div>
            </li>
            <li className="list-questions">
              <div className="questions" onClick={() => open(3)}>
                What about other Chromium browsers?
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
              </div>
              <div className="awsers">
                <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.</p>
              </div>
            </li>
          </ul>
          <div className="frequently-more-ifo">
            <a href="#" className="btn btn-blue">More Info</a>
          </div>
        </div>
      </div>
    </section>
  );
}