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


    get isLogin (){
        return this.user?.id ? true : false;
    }

    get isAgent(){
        return this.user?.authoritiesList.filter(v=> v.role === 'AGENT').length > 0 ? true : false;
    }

    get isStudio(){
        return this.user?.authoritiesList.filter(v=> v.role === 'STUDIO').length > 0 ? true : false;
    }
}

export const userStore = new UserStore()