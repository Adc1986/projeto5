import React from 'react';
import './style.css';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';


function Contato() {
  return (
      <section>
        <Header/>
        <div className='textcente'>
          <h1 className='text-pri'>CONTATOS</h1>
          <br/>
          <h2 class="title"><b>Duvidas e reclamções</b></h2>
            <br/>
             <div id="form"/>
                <form action=""/>
                    <label for="username"><b>Nome</b></label>
                    <div class="input">
                        <input id="username" name= "username" placeholder="username" type="text"/>
                    </div>
                    <br/>
                    <label for="email"><b>E-mail</b></label>
                    <div class="input">
                        <input id="email" name= "email" placeholder="email" type="text"/>
                    </div>
                    <br/>
                    <label for="(xx)xxxx-xxxx"><b>Telefone</b></label>
                    <div class="input">
                        <input id="(xx)xxxx-xxxx" name= "(xx)xxxx-xxxx" placeholder="(xx)xxxx-xxxx" type="number"/>
                    </div>
                    <br/>
                    <h5><b>Mensagem</b></h5>
                    <textarea></textarea>
                    <br/>
                    <div id="btn">
                        <button type="submit" className='btn btn-danger'>Enviar</button>

                    </div>
                    <br/>
                    <h5>Conheça nossas redes socias</h5>
                    <div >
                      <img src='/img/logos.png' alt='logo' className='tam-img'/>
                      

                    </div>
                    </div>
                <Footer/>
      </section>
   
    
  );
}

export default Contato;