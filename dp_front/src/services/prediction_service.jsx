import axios from "axios"

const conn = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

class PredictionService {
    constructor(){
        this.endpoint = "dp_pred/";
    }

    getRes(input){
        // const data = { params:input };
        console.log('Data sent :',input);
        const req = conn.post(this.endpoint, input);

        return req;
    }
}

export default new PredictionService();