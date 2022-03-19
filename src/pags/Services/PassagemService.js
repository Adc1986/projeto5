import axios from 'axios';

const PASSAGEM_API_BASE_URL = "http://localhost:8080/api/passagem";

class PassagemService {

 getPassagem(){
return axios.get(PASSAGEM_API_BASE_URL);
}

 createPassagem(passagem){
return axios.post(PASSAGEM_API_BASE_URL, passagem);
}

 getPassagemById(passagemId){
return axios.get(PASSAGEM_API_BASE_URL + '/' + passagemId);
}

 updatePassagem(passagem, passagemId){
return axios.put(PASSAGEM_API_BASE_URL + '/' + passagemId, passagem);
}

 deletePassagem(passagemId){
return axios.delete(PASSAGEM_API_BASE_URL + '/' + passagemId);
}
}

export default new PassagemService()