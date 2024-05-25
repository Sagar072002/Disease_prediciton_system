import clientApi from "./client_api";

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