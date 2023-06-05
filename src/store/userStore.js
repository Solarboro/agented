import { makeAutoObservable } from "mobx";
import http from "../utils/http";


class UserStore {

    user = JSON.parse(localStorage.getItem('user')) || {}

    constructor(){
        makeAutoObservable(this)
    }

    login = ({username, password}, callbk, message)=>{

        http.post("login", {username, password}, {headers:{Authorization:''}})
        .then(
            res => {
                this.user = {...res.data.iuser};
                localStorage.setItem('user', JSON.stringify(this.user));
                callbk(res.data.token);
            }
        )
        .catch(error=>{
            message.info(error?.response?.data?.message);
        })
    }


}

export const userStore = new UserStore()