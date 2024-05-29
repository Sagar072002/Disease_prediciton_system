import clientApi from "./client_api";

function getToken() {
    const saved = localStorage.getItem("docDetails");
    let initial = "";
    if(saved){
      initial = JSON.parse(saved).Token;
      initial = initial.toString();
    }
    return initial;
}

clientApi.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, error => Promise.reject(error));

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

    update( changes){
        const req = clientApi.patch(this.endpoint,changes)

        return req;
    }

    get(uid){
        const req = clientApi.post(this.endpoint+'/get',{uid:uid});
        return req;
    }

    getAll(){
        const req = clientApi.post(this.endpoint+'/getRequired');
        return req;
    }

    getApps(){
        const req = clientApi.post(this.endpoint+'/getAppointments');
        return req;
    }
}

export default new doctorService;

export function saveToken(tokenData){
    localStorage.setItem('docDetails', JSON.stringify(tokenData))
}

export function checkDoc(){
    const TokenDetails = localStorage.getItem('docDetails')

    if(!TokenDetails){
        return ''
    }
    const Token = JSON.parse(TokenDetails)
    
    return Token.uid
}