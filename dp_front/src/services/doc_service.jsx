import clientApi from "./client_api";

class doctorService{
    constructor(){
        this.endpoint='/doctor'
    }

    register(newDoc){
        const req = clientApi.post(this.endpoint, newDoc);
        return req;
    }

    login(credentials){
        const req = clientApi.post(this.endpoint+'/login', credentials);
        return req;
    }

    update(uid, changes){
        const req = clientApi.patch(this.endpoint, { ...changes, uid: uid })

        return req;
    }

    get(uid){
        const req = clientApi.post(this.endpoint+'/get',{uid:uid});
        return req;
    }

    getAll(){
        const req = clientApi.post(this.endpoint+'/getAll');
        return req;
    }
}

export default new doctorService;

export function saveToken(tokenData){
    localStorage.setItem('docDetails', JSON.stringify(tokenData))
}