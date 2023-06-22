import { makeAutoObservable } from "mobx";
import http from "../../utils/http";



class YunStore {

    products = [];

    constructor(){
        makeAutoObservable(this)
    }

    //
    segmentValue = 'pending';
    setSegmentValue = value => this.segmentValue = value;

    //
    get filterProducts(){

        return this.products.filter(v=>v.status === this.segmentValue).sort((a,b)=> b.cdate - a.cdate);

    }
    get pendingProducts(){
        return this.products.filter(v=>v.status === 'pending').sort((a,b)=> a.cdate - b.cdate)
    }

    get subStoreProducts(){
        return this.products.filter(v=>v.status === 'subStore').sort((a,b)=> a.cdate - b.cdate)
    }

    // new one product
    newProduct = data => {
        http.post('yun/product/', data)
        .then(res=> this.products.push(res.data))
        .catch(console.log)
    }

    newProducts = data => {
        http.post('yun/product', data)
        .then(console.info)
        .catch(console.log)
    }

    updateProduct = (data, callback) =>{
        http.post('yun/product/1', data)
        .then(res=>{
            //
            this.products = [...this.products.filter(v=>v.id !== data.id), res.data];

            //
            callback();
        })
        .catch(console.log)
    }

    allProducts = ()=> {
        http.get('yun/product')
        .then(res => this.products = [...res.data])
        .catch(console.log)
    }

    getProduct = id =>{
        http.get(`yun/product/${id}`)
        .then(console.info)
        .catch(console.log)
    }

    delProduct = id => {
        http.delete(`yun/product/${id}`)
        .then(console.info)
        .catch(console.log)
    }

    //
    toStore = id => {
        http.get(`yun/product/${id}/toStore`)
        .then(console.info)
        .catch(console.log)
    }
    
    toSubStore = id => {
        http.get(`yun/product/${id}/toSubStore`)
        .then(console.info)
        .catch(console.log)
    }
    
    toFactory = id => {
        http.get(`yun/product/${id}/toFactory`)
        .then(console.info)
        .catch(console.log)
    }
    
    rollbackFromFactory = id => {
        http.get(`yun/factory/${id}`)
        .then(console.info)
        .catch(console.log)
    }
    
    retrieveAllFOrder = () => {
        http.get("yun/factor")
        .then(console.info)
        .catch(console.log)
    }
}


export  const yunStore = new YunStore();