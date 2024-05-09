import clientApi from "./client_api"

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
}

export default new userService;

export function saveToken(tokenData){
    tokenData.expireDate = new Date(new Date().getTime() + (12*60*60*1000));
    localStorage.setItem('userDetails', JSON.stringify(tokenData))
}

export function saveUserState(tokenData){
    localStorage.setItem('userState', JSON.stringify(tokenData))
}

export function checkToken(){
    const TokenDetails = localStorage.getItem('userDetails')

    if(!TokenDetails){
        return ''
    }
    const Token = JSON.parse(TokenDetails)
    let expire= new Date(Token.expireDate)
    let today = new Date()
    if(today > expire){
        return ''
    }
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
}