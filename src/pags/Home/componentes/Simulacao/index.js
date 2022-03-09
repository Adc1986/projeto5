import React from 'react';
import './style.css';




function Simulacao() {
  return (
      <div className='textcenter'>
      <h1 className='textprinc'>Air Free</h1>
    <div class="container"/>
       
          <div class="form"/>
            <form action=""/>
              <h1 class="title"><b>VIAGENS</b></h1>
             
                <label for="embarque"><b>Embarque</b></label>
                <div class="input">
                  <input id="embarque" name="embarque" placeholder="embarque" type="text"/>
                  </div>
                
                  <label for="destino"><b>Destino</b></label>
                  <div class="input">
                    <input id="destino" name="destino" placeholder="destino" type="text"/>
                   </div>
                  
                    <label for="ida"><b>Ida</b></label>
                    <div class="input">
                      <input id="ida" name="ida" placeholder="ida" type="date"/>
                      </div>
                    
                      <label for="volta"><b>Volta</b></label>
                      <div class="input">
                        <input id="volta" name="volta" placeholder="volta" type="date"/>
                        </div>
                      <br/>
                        <div id="btn">
                          <button type="submit" className='btn btn-danger'>Ir</button>

                        </div>
                        </div>
                        

     );

              }

              export default Simulacao;

            
