import React from "react";
import './style.css';

var espantalho;

function Espantalho({ image }) {
  console.log(image)
  if(!image){
    espantalho = '/content/dam/espatalho.png';
  }else {
    espantalho = image.src
  }
  return (
    <div class="image">
      <img src={espantalho} alt="espantalho" title="espantalho" />
    </div>
  );
}

export default Espantalho;
