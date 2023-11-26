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
        const req = clientApi.post(this.endpoint, credentials);

        return req;
    }

    update(uid, changes){
        const req = clientApi.patch(this.endpoint, { ...changes, uid: uid })

        return req;
    }

    getInfo(uid){
        const req = clientApi.post(this.endpoint, uid)

        return req;
    }
}

export default new userService;