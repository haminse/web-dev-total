import React from 'react';
import './App.css';

const Button = (props) => {
  return (
    <div className="button">
      <a href = {props.link} target="_blank" rel="noreferrer">
      <img src={props.imgSrc} alt={props.altText} />
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <h1>TOY WEB PROJECT</h1>
      <h4>by MINSE</h4>
      <Button
        imgSrc="img/001.png"
        altText="Button 1"
        link = 'https://youtubehot.netlify.app'
      />
      <Button
        imgSrc="img/002.png"
        altText="Button 2"
        link = 'https://equal-split.netlify.app'

      />
      <Button
        imgSrc="img/003.png"
        altText="Button 3"
        link = 'https://book-mbti-minse.netlify.app'

      />
      <Button
        imgSrc="img/004.png"
        altText="Button 4"
        link = 'https://sjsu-facilities-open-notofficial.netlify.app'

      />
      <Button
        imgSrc="img/005.png"
        altText="Button 5"
        link = 'https://zodiaccheck.netlify.app/'

      />
      <Button
        imgSrc="img/006.png"
        altText="Button 6"
        link = 'https://balance-game.netlify.app'

      />
    </div>
  );
}

export default App;
