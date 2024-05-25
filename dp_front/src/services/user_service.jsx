import clientApi from "./client_api"

function getToken() {
    const saved = localStorage.getItem("userDetails");
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

class userService{
    constructor(){
        this.endpoint = "/users"
    }

    register(newUser){
        const req = clientApi.post(this.endpoint, newUser);

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

    getInfo(uid){
        const req = clientApi.post(this.endpoint+'/get', {uid: uid})

        return req;
    }

    getAll(){
        const req = clientApi.post(this.endpoint+'/getAll')

        return req;
    }
}

export default new userService;

export function saveToken(tokenData){
    localStorage.setItem('userDetails', JSON.stringify(tokenData))
}

export function saveUserState(tokenData){
    localStorage.setItem('userState', JSON.stringify(tokenData))
}

export function checkUser(){
    const TokenDetails = localStorage.getItem('userDetails')

    if(!TokenDetails){
        return ''
    }
    const Token = JSON.parse(TokenDetails)
    
    return Token.uid
}

export function checkUserState(){
    const TokenDetails = localStorage.getItem('userState')

    if(!TokenDetails){
        return ''
    }
    const Token = JSON.parse(TokenDetails)
    
    return Token
}

export function clearToken(){
    localStorage.removeItem('userDetails')
    localStorage.removeItem('userState')
    localStorage.removeItem('docDetails')
    localStorage.removeItem('adminDetails')
}