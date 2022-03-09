import React from 'react';
import Home from './pags/Home';
import Destino from './pags/Destino';
import Promocoes from './pags/Promocoes';
import Contato from './pags/Contato';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   
   <Routes>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/Destino" element={<Destino/>}/>
     <Route path="/Promocoes" element={<Promocoes/>}/>
     <Route path="/Contato" element={<Contato/>}/>

   </Routes>
   </BrowserRouter>
      
   
    
  );
}

export default App;
