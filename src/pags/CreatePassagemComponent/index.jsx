import React, { Component } from 'react'
import PassagemService from '../Services/PassagemService';


class CreatePassagemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            valor: ''
           
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeValorHandler = this.changeValorHandler.bind(this);
        this.saveOrUpdatePassagem = this.saveOrUpdatePassagem.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PassagemService.getPassagemById(this.state.id).then( (res) =>{
                let passagem = res.data;
                this.setState({name: passagem.name,
               valor: passagem.valor,
                    
                });
            });
        }        
    }
    saveOrUpdatePassagem = (e) => {
        e.preventDefault();
        let passagem = {name: this.state.name, valor: this.state.valor};
        console.log('passagem => ' + JSON.stringify(passagem));

        // step 5
        if(this.state.id === '_add'){
           PassagemService.createPassagem(passagem).then(res =>{
                this.props.history.push('/passagem');
            });
        }else{
            PassagemService.updatePassagem(passagem, this.state.id).then( res => {
                this.props.history.push('/passagem');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeValorHandler= (event) => {
        this.setState({valor: event.target.value});
    }


    cancel(){
        this.props.history.push('/passagem');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Passagem</h3>
        }else{
            return <h3 className="text-center">Update Passagem</h3>
        }
    }
    render() {
        return(
        <div>
           
        <br></br>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Valor: </label>
                                    <input placeholder="Valor" name="valor" className="form-control" 
                                        value={this.state.valor} onChange={this.changeValorHandler}/>
                                </div>
                               

                                <button className="btn btn-success" onClick={this.saveOrUpdatePassagem}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

           </div>
          
    </div>
)
}
}


export default CreatePassagemComponent;