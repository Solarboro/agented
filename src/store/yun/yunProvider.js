import { makeAutoObservable } from "mobx";
import http from "../../utils/http";



class YunProviderStore {

    data = []

    constructor(){
        makeAutoObservable(this)
    }

    retrieveAll = ()=>{

        http.get('/yun/provider')
        .then(res=>this.data = res.data)
        .catch(console.log)
    }
}


export const yunProviderStore = new YunProviderStore();