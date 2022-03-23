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
    
}
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
            <div>
                 <h2 className="text-center">Passagem</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPassagem}> Add Passagem</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th> Valor</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.passagem.map(
                                        passagem => 
                                        <tr key = {passagem.id}>
                                             <td> { passagem.name} </td>   
                                             <td> {passagem.valor}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editPassagem(passagem.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePassagem(passagem.id)} className="btn btn-danger">Delete </button>
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            <Footer/>
        </section>
    );
}

}

export default Passagem;