import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


function Header() {
  return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand" href="#" className='corfonte'>AIR FREE</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/Login">Login</Link></a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/Destino">Destino</Link></a>
                
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/Passagem">Passagem</Link></a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/Promocoes">Promoções</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/Contato">Contato</Link></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
   
    
  );
}

export default Header;