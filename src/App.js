import React from 'react';
import Home from './pags/Home';
import Login from './pags/Login';
import Destino from './pags/Destino';
import Passagem from './pags/Passagem';
import Promocoes from './pags/Promocoes';
import Contato from './pags/Contato';
import CreatePassagemComponent from './pags/CreatePassagemComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   
   <Routes>
     <Route path="/"exact element={<Home/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Destino" element={<Destino/>}/>
     <Route path="/Passagem" element={<Passagem/>}/>
     <Route path="/Promocoes" element={<Promocoes/>}/>
     <Route path="/Contato" element={<Contato/>}/>
     <Route path="/add-passagem" element={<CreatePassagemComponent/>}/>

   </Routes>
   </BrowserRouter>
      
   
    
  );
}

export default App;
