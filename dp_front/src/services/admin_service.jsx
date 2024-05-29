import clientApi from "./client_api";

function getToken() {
    const saved = localStorage.getItem("adminDetails");
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

class adminService{
    constructor(){
        this.endpoint="/admin"
    }
    register(newAdmin){
        const req = clientApi.post(this.endpoint,newAdmin);
        return req;
    }
    login(creds){
        const req = clientApi.post(this.endpoint+'/login',creds);
        return req;
    }
    getAllUsers(){
        const req = clientApi.post('/users/getAll');
        return req;
    }

    getAllDocs(){
        const req = clientApi.post('/doctor/getAll');
        return req;
    }
    updateDocStatus(data){
        const req = clientApi.patch('/doctor/status',data);
        return req;
    }
}

export default new adminService;

export function saveToken(tokenData){
    localStorage.setItem('adminDetails', JSON.stringify(tokenData))
}

export function checkAdmin(){
    const TokenDetails = localStorage.getItem('adminDetails')

    if(!TokenDetails){
        return ''
    }
    const Token = JSON.parse(TokenDetails)
    
    return Token.uid
}