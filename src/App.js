import React from 'react';
import Home from './pags/Home';
import Login from './pags/Login';
import Destino from './pags/Destino';
import Passagem from './pags/Passagem';
import Promocoes from './pags/Promocoes';
import Contato from './pags/Contato';
import CreatePassagemComponent from './pags/CreatePassagemComponent';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


function App() {
  return (
  
   
   <Router>
     <Switch>
     <Route path="/"exact component={Home}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Destino" component={Destino}/>
     <Route path="/Passagem" component={Passagem}/>
     <Route path="/Promocoes" component={Promocoes}/>
     <Route path="/Contato" component={Contato}/>
    < Route path="/add-passagem/:id" component={CreatePassagemComponent}/>
     </Switch>
   </Router>
  
      
   
    
  );
}

export default App;
