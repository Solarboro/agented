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
    get cnt4SubStore(){
        return this.products.filter(v=>v.status === 'subStore').length;
    }

    //
    get filterProducts(){

        if(this.segmentValue === 'pending')
            return this.products.slice().sort((a,b)=> b.cdate - a.cdate);


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

    newProducts = (data, callback) => {
        http.post('yun/product', data)
        .then(res=> {
            this.products = [...this.products.concat(res.data)]
            callback && callback();   
        })
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
        .then(res => this.products = [...this.products.filter(v => v.id !== id)])
        .catch(console.log)
    }

    //
    toPending = id => {
        http.get(`yun/product/${id}/toPending`)
        .then(res => this.products = [...this.products.filter(v => v.id !== id), res.data])
        .catch(console.log)
    }
    
    toStore = id => {
        http.get(`yun/product/${id}/toStore`)
        .then(console.info)
        .catch(console.log)
    }
    
    toSubStore = id => {
        http.get(`yun/product/${id}/toSubStore`)
        .then(res => this.products = [...this.products.filter(v => v.id !== id), res.data])
        .catch(console.log)
    }
    
    toFactory = ids => {
        http.post(`yun/product/0/toFactory`, ids)
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