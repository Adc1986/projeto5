import React, { Component } from 'react'
import PassagemService from '../Services/PassagemService';

class CreatePassagemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PassagemService.getPassagemById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: passagem.firstName,
                    lastName: passagem.lastName,
                    emailId : passagem.emailId
                });
            });
        }        
    }
    saveOrUpdatepassagem = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('passagem => ' + JSON.stringify(passagem));

        // step 5
        if(this.state.id === '_add'){
           PassagemService.createPassagem(passagem).then(res =>{
                this.props.history.push('/passagem');
            });
        }else{
            PassagemService.updatePassagem(employee, this.state.id).then( res => {
                this.props.history.push('/passagem');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
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
        return (
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
        )
    }
}

export default CreateEmployeeComponent;