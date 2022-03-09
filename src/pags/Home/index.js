import React from 'react';
import './style.css';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Carrosel from './componentes/Carrosel';
import Introducao from './componentes/Introducao';
import Simulacao from './componentes/Simulacao';


function Home() {
  return (
      <section>
        <Header/>
        <Carrosel/>
         <Introducao/>
        <Simulacao/>
         <Footer/>
      </section>
    
    
  );
}

export default Home;