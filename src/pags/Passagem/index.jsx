import React,{Component} from 'react';
import PassagemService from '../Services/PassagemService';
import './style.css';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

class Passagem extends Component {
    constructor(props) {
    super(props)
    
     this.state = {
    passagem: []
    }
    this.addPassagem = this.addPassagem.bind(this);
    this.editPassagem = this.editPassagem.bind(this);
    this.deletePassagem = this.deletePassagem.bind(this);
    }
    
     deletePassagem(id){
    PassagemService.deletePassagem(id).then( res => {
    this.setState({passagem: this.state.passagem.filter(passagem => passagem.id !== id)});
    });
    
   
    editPassagem(id){
    this.props.history.push(`/add-passagem/${id}`);
    }
    
     componentDidMount(){
    PassagemService.getPassagem().then((res) => {
    this.setState({ passagem: res.data});
    });
    }
    
     addPassagem(){
    this.props.history.push('/add-passagem/_add');
    }

     
    render() {
       
    return(
        <section>
            <Header/>
            <h1 className='pasnome'>PASSAGEM</h1>
            <br/>
            <hr/>
            <br/>

            <div class="row">
            <div class="card">
        <img class="image" src="/img/ceara.jpg" alt="ceara" />
       <form>
       <input type="local" placeholder="local" />
                  <input type="valor" placeholder="$" />
       </form>
        <div id="btn">
            <div className='btnl'>
                        <button  type="submit" className='btn btn-primary m-2'>Add</button>
                        <button  type="submit" className='btn btn-primary m-2'>Update</button>
                        <button  type="submit" className='btn btn-danger m-2'>Delete</button>
                    </div>
                    </div>
      </div>
      </div>



            <Footer/>
        </section>
    );
}

}

export default Passagem;