import React from 'react';
import './style.css';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';


function Promocoes() {
  return (
      <section>
       <Header/>
       
       <h1 className='colornome'>PROMOÇÕES</h1>
       <br/>
       <hr/>
       <br/>

       <div class="row">
      <div class="card">
        <img class="image" src="/img/hotel1.jpg" alt="hotel" />
        <p>Pacote VIP - Passagens ida e volta + Hotel apartir de R$1.200 (2 dias) </p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/hotel2.jpg" alt="hotel" />
        <p>Pacote MASTER - Passagens ida e volta + Hotel + café da manhã apartir de R$1.500 (2 dias)</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/hotel3.jpg" alt="hotel" />
        <p>RESORTS - Passagens ida e volta + café da manhã apartir de R$1.800 (2 dias)</p>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <img class="image" src="/img/hotel4.jpg" alt="hotel" />
        <p>Viagens INTERNACIONAIS - Voos simples Passagens ida e volta apartir de R$1.500</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/hotel5.jpg" alt="hotel" />
        <p>DISNEY - Passagens ida e volta + Hotel apartir de R$2.500 (2 dias)</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/hotel6.jpg" alt="hotel" />
        <p>Voos Nacionais - Passagens ida e volta apartir de R$430,00</p>
      </div>
    </div>
    

       <Footer/>
      </section>
    
    
  );
}

export default Promocoes;