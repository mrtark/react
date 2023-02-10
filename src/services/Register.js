import axios from "axios";

const REGİSTER_URL="/register";
class RegisterService{

    createApiRegister(registerDTO){

        return axios.post(REGİSTER_URL+"/create",registerDTO)
    }

    listApiRegister(){
        return axios.get(REGİSTER_URL+"/list")
    }

    findApiRegister(id){
        return axios.get(REGİSTER_URL + "/" + id)
    }

    updateApiRegister(id,registerDTO){
        return axios.put(REGİSTER_URL + "/" + id,registerDTO)
    }

    deleteApiRegister(id){
        return axios.delete(REGİSTER_URL + "/" + id)
    }
}
export default new RegisterService();