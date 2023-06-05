import { makeAutoObservable } from "mobx";
import http from "../utils/http";

class ProductStore{

    products = []
    constructor(){
        makeAutoObservable(this)
    }



    index = () => {

        http.get('product')
        .then(res => {
            this.products = [...res.data]
            // message.info('success')
        })
        .catch(error => {
            console.log(error)
            // message.error(error?.response?.data?.message);
        })
    }


}

export const productStore = new ProductStore()