import React from 'react';
import './style.css';



function Carrosel() {
  return (
    <div className='cor-fundo'>
    <div id="carouselExampleControls" class="carousel slide container bg bg-primary" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="/img/aviao1.jpg" alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/img/praia1.jpg" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/img/praia2.jpg" alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    </div>
    
  );
}

export default Carrosel;