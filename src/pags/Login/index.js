import React from 'react';
import './style.css';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
function Login(){
    return (

        <section>
        <Header/>
            <div className="container-sign">
              
              <div className="login">
                <div className="login-area">
                  <h1>Air Free</h1>
                 
                </div>
        
                <form >
                  <h1>Login</h1>
                  <input type="Usuario" placeholder="username" />
                  <input type="email" placeholder="email" />
                  <input type="password" placeholder="******"/>
                  <div className='frase'>
                  
                      <div id="btn">
                        <div className='btn'>
                        <button type="submit" className='btn btn-danger '>Enviar</button>
                    </div>
                    </div>
                </div>
                </form>  
               
                </div>
              </div>
              <Footer/>
  
            
            </section>
      );        
}

export default Login;