import { makeAutoObservable } from "mobx";
import http from "../../utils/http";
import dayjs from 'dayjs'


class YunStore {
    //
    products = [];

    //
    filterProduct = {};
    filterToday = false;
    filterInprogress = false;
    filterDone = false;

    //
    fOrders = [];

    //
    constructor(){
        makeAutoObservable(this)
    }

    //
    segmentValue = 'pending';
    setSegmentValue = value => this.segmentValue = value;

    //
    setFilterProduct = values => this.filterProduct = {...values}
    setfilterToday = value => this.filterToday = value
    setfilterInprogress = value => this.filterInprogress = value
    setfilterDone = value => this.filterDone = value
    //
    get cnt4SubStore(){
        let cnt = 0;
        this.filterProducts.filter(v=>v.status === 'subStore').forEach(element => {
            cnt += element.count;
        });
        return cnt;
    }

    //
    get filterProducts(){

        if(this.segmentValue === 'pending')
            return this.products.filter(this.filterable).sort((a,b)=> b.cdate - a.cdate);


        return this.products.filter(v=>v.status === this.segmentValue).filter(this.filterable).sort((a,b)=> b.cdate - a.cdate);

    }

    filterable = item => {

        let filterProduct = {...this.filterProduct}
        let dFormat = 'YYYYMMDD'


        if(filterProduct.sku && filterProduct.sku.trim().toUpperCase()  !== item.sku.trim().toUpperCase() )
            return false
        if(filterProduct.color && filterProduct.color.trim().toUpperCase()  !== item.color.trim().toUpperCase() )
            return false
        if(filterProduct.size && filterProduct.size.trim().toUpperCase() !== item.size.trim().toUpperCase())
            return false
        if(filterProduct.count && filterProduct.count !== item.count)
            return false
        if(filterProduct.status && filterProduct.status.trim().toUpperCase()  !== item.status.trim().toUpperCase() )
            return false
        if(filterProduct.lastStatus && filterProduct.lastStatus.trim().toUpperCase()  !== item.lastStatus.trim().toUpperCase() )
            return false
        if(filterProduct.pullOprt && filterProduct.pullOprt.trim().toUpperCase()  !== item.pullOprt.trim().toUpperCase() )
            return false
        if(filterProduct.toSubStoreOprt && filterProduct.toSubStoreOprt.trim().toUpperCase()  !== item.toSubStoreOprt.trim().toUpperCase() )
            return false
        if(filterProduct.toSubStoreArea && filterProduct.toSubStoreArea.trim().toUpperCase()  !== item.toSubStoreArea.trim().toUpperCase() )
            return false
        if(filterProduct.toFactoryOprt && filterProduct.toFactoryOprt.trim().toUpperCase()  !== item.toFactoryOprt.trim().toUpperCase() )
            return false

       
        // if(filterProduct.switchOrNot && (filterProduct.switchOrNot != item.switchOrNot) ){
        //     return false
        // }

            
        if(filterProduct.cdate && filterProduct.cdate.format(dFormat) !== dayjs(item.cdate).format(dFormat))
            return false
        if(filterProduct.toSubStoreDate && filterProduct.toSubStoreDate.format(dFormat) !== dayjs(item.toSubStoreDate).format(dFormat))
            return false
        if(filterProduct.toFactoryDate && filterProduct.toFactoryDate.format(dFormat) !== dayjs(item.toFactoryDate).format(dFormat))
            return false
      

        if(filterProduct.yunBOrder?.platform && filterProduct.yunBOrder.platform.trim().toUpperCase()  !== item.yunBOrder.platform.trim().toUpperCase() )
            return false
        if(filterProduct.yunBOrder?.orderNo && filterProduct.yunBOrder.orderNo.trim().toUpperCase()  !== item.yunBOrder.orderNo.trim().toUpperCase() )
            return false
        if(filterProduct.yunBOrder?.name && filterProduct.yunBOrder.name.trim().toUpperCase()  !== item.yunBOrder.name.trim().toUpperCase() )
            return false
        if(filterProduct.yunBOrder?.mobile && filterProduct.yunBOrder.mobile.trim().toUpperCase()  !== item.yunBOrder.mobile.trim().toUpperCase() )
            return false

        return true;
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
        return http.post(`yun/product/0/toFactory`, ids)
        .then(res=> this.products = [...this.products.filter(v=> !res.data.yunProducts.map(v=>v.id).includes(v.id))])
    
    }
    
    rollbackFromFactory = id => {
        http.get(`yun/factory/${id}`)
        .then(res => {
            this.fOrders = [...this.fOrders.filter(v => v.id !== id)].sort((a,b)=> b.cdate-a.cdate)
            this.allProducts();
            
        })
        .catch(console.log)
    }

    updateFOrder = factory => {
        http.put(`yun/factory/${factory.id}`, factory)
        .then(res => {
            this.fOrders = [...this.fOrders.filter(v => v.id !== factory.id), res.data].sort((a,b)=> b.cdate-a.cdate)
            // this.allProducts();
        })
        .catch(console.log)
    }
    
    retrieveAllFOrder = () => {
        http.get("yun/factory")
        .then(res=> this.fOrders = [...res.data].sort((a,b)=> b.cdate-a.cdate))
        .catch(console.log)
    }
}


export  const yunStore = new YunStore();