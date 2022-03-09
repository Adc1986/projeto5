import React from 'react';
import './style.css';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';


function Destino() {
  return (
      <section>
        <Header/>
        <h1 className='stilonome'>DESTINOS</h1>
        <br/>
        <hr/>
        <br/>

        <div class="row">
      <div class="card">
        <img class="image" src="/img/ceara.jpg" alt="ceara" />
        <p>Fortaleza - CE</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/paraiba.jpg" alt="paraiba" />
        <p>João Pessoa - PB</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/natal.jpg" alt="natal" />
        <p>Natal - RN</p>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <img class="image" src="/img/maceio.jpg" alt="maceio" />
        <p>Maceió - AL</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/noronha.jpg" alt="noronha" />
        <p>Fernando de Noronha - PE</p>
      </div>
 
      <div class="card">
        <img class="image" src="/img/tocantins.jpg" alt="tocatins" />
        <p>Palmas - TO</p>
      </div>
    </div>



        <Footer/>
       
      </section>
    
    
  );
}

export default Destino;