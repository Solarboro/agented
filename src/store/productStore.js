import { makeAutoObservable } from "mobx";
import http from "../utils/http";
import { userStore } from "./userStore";

class ProductStore{

    filterTemplate = [
        {key: 'pending', title: '洽谈中', value:0, color: '#3f8600'},
        {key: 'studio', title: '样板中', value:0, color: '#f56a00'},
        {key: 'factory', title: '投产中', value:0, color: '#f56a00'},
        {key: 'paid', title: '待尾款', value:0, color: '#cf1322'},
    ]
    filter = 'pending'
    product = {}
    products = []
    studio701Products = []
    statistic701 = []
    statistic701Period =[]
    statistic701PeriodFilter = '';
    statistic701Producer = []
    statistic701ProducerFilter = '';

    paymentDetail = {}
    constructor(){
        makeAutoObservable(this)

        userStore.isLogin && this.index()
    }

    // 701 statistic 
    get701Statistic =()=>{
        http.get('/statistic/studio/701')
        .then(res => {
            this.statistic701 = [...res.data]
            this.statistic701Period = [...new Set(this.statistic701.map(v=>v.period))]
            this.statistic701Producer = [...new Set(this.statistic701.map(v=>v.producer))]

            this.statistic701PeriodFilter = this.statistic701PeriodFilter || this.statistic701Period.at(-1);
            this.statistic701ProducerFilter = this.statistic701ProducerFilter || this.statistic701Producer.at(-1);


            
            console.log(this.statistic701Period)
            console.log(this.statistic701Producer)
        }
        )
        .catch(console.log);
    }
    //
    get701Products = () => {
        http.get('product/701')
        .then( res => {
            this.studio701Products = [...res.data]
            
        })
        .catch(console.log);
    }

    // snap
    setPaymentDetail = (obj) => {
        this.paymentDetail = {...obj}
    }
    selectd = (object) => {
        this.product = {...object}
    }

    fallbackStatus = (productId)=>{
        http.get(`product/${productId}/fallbackStatus`)
        .then(res=>{
            this.products = [...this.products.filter(item=> item.id !== productId), res.data]
        })
        .catch(console.log);
    }


    updateFilter = value => this.filter = value

    get getFilterTemplate(){

        this.filterTemplate.forEach(
            value => {
                value.value = this.products.filter(item => item.productStatus === value.key).length;
            }
        )

        return this.filterTemplate;
    }

    new = () => {
        http.post('product', {})
        .then(res => {
            this.products = [...this.products, res.data]
        })
        .catch(console.log);
    }

    updateProduct = (basic) =>{
        http.put('product', basic)
        .then(res=>{
          
            this.products = [...this.products.filter(obj=>obj.id !== res.data.id), res.data]
            // this.products = [...this.products.filter(obj=>obj.id !== res.data.id), res.data]
            this.product ={...res.data}
        })
        .catch(console.log);
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


    del = (id) => {
        http.delete(`product/${id}`).then(
            res => this.products.splice(this.products.findIndex(value=>value.id === id),1)
        ).catch(console.log)
    }

    getByFilter = () => {

        let listfilter = this.products.filter(item => item.productStatus === this.filter);
        switch (this.filter) {
            case 'pending':
                // return listfilter.sort((a,b)=> a.cdate - b.cdate);
            case 'studio':
                // return listfilter.sort((a,b) => a.sampleOrder.manufactureDates - b.sampleOrder.manufactureDates)
            case 'factory':
                // return listfilter.sort((a,b) => a.mdate - b.mdate)
                return listfilter.sort((a,b)=> a.cdate - b.cdate);
                
            default:
                return listfilter
        }

        
    }
    // sample & studio
    updateStudio = (id) => {

        console.log(id)
        http.put(`product/${this.product.id}/studio`, {id})
        .then(res=> {
            this.product = {...this.product,  sampleOrder: res.data}
            this.products.splice(this.products.findIndex(v=>v.id === this.product.id), 1, this.product)
        
        })
        .catch(console.log)
    }

    updateStudioDetail = (productId, requestBody)=>{
        http.put(`product/${productId}/sample`, requestBody)
        .then(res=> this.get701Products())
        .catch(console.log);
    }

    // Payment 
    newPayment = (productId, requestBody) => {
        http.post(`product/${productId}/payment`, {...requestBody})
        .then(res=>{
            
            // for (const iterator of this.products) {
            //     if(iterator.id === productId)
            //         iterator.payments.push({...res.data})
            // }

            this.product.payments.push({...res.data})
          
        })
        .catch(console.error);
    }

    updatePayment = (productId, requestBody, callbk) => {
        http.put(`product/${productId}/payment`, {...requestBody})
        .then(res=>{
            
            const payment = res.data;
            // for (const iterator of this.products) {
            //     if(iterator.id === productId){
            //         let index = iterator.payments.findIndex(value => value.id === payment.id);
            //         iterator.payments.splice(index, 1, {...payment})

            //     }

            // }
            let index = this.product.payments.findIndex(value => value.id === payment.id);
            this.product.payments.splice(index, 1, {...payment})

            //
            callbk();
        })
        .catch(console.error);
    }

    deletePayment = (productId, paymentId) => {
        http.delete(`product/${productId}/payment/${paymentId}`)
        .then(res=>{

            // for (const iterator of this.products) {
            //     if(iterator.id === productId){
            //         let index = iterator.payments.findIndex(value => value.id === paymentId);
            //         iterator.payments.splice(index, 1)
            //     }
            // }
            let index = this.product.payments.findIndex(value => value.id === paymentId);
            this.product.payments.splice(index, 1)
        })
        .catch(console.error);
    }

    // payment

    // CustOrder 
    newCustOrder = (productId, requestBody) => {
        http.post(`product/${productId}/custOrder`, {...requestBody})
        .then(res=>{
            
            // for (const iterator of this.products) {
            //     if(iterator.id === productId)
            //         iterator.custOrders.push({...res.data})
            // }
            this.product.custOrders.push({...res.data})

          
        })
        .catch(console.error);
    }

    updateCustOrder= (productId, requestBody, callbk) => {
        http.put(`product/${productId}/custOrder`, {...requestBody})
        .then(res=>{
            
            const payment = res.data;
            // for (const iterator of this.products) {
            //     if(iterator.id === productId){
            //         let index = iterator.custOrders.findIndex(value => value.id === payment.id);
            //         iterator.custOrders.splice(index, 1, {...payment})
                    
            //     }
                
            // }
            let index = this.product.custOrders.findIndex(value => value.id === payment.id);
            this.product.custOrders.splice(index, 1, {...payment})
            //
            callbk();
        })
        .catch(console.error);
    }

    deleteCustOrder = (productId, paymentId) => {
        http.delete(`product/${productId}/custOrder/${paymentId}`)
        .then(res=>{

            // for (const iterator of this.products) {
            //     if(iterator.id === productId){
            //         let index = iterator.custOrders.findIndex(value => value.id === paymentId);
            //         iterator.custOrders.splice(index, 1)
            //     }
            // }
            let index = this.product.custOrders.findIndex(value => value.id === paymentId);
            this.product.custOrders.splice(index, 1)
           
        })
        .catch(console.error);
    }

    // CustOrder

    // Materials 
    newMaterials = (productId, requestBody) => {
        http.post(`product/${productId}/material`, {...requestBody})
        .then(res=>{
            
            // for (const iterator of this.products) {
            //     if(iterator.id === productId)
            //         iterator.materials.push({...res.data})
            // }
                
            this.product.materials.push({...res.data})
          
            }
        )
        .catch(console.error);
    }

    updateMaterials= (productId, requestBody, callbk) => {
        http.put(`product/${productId}/material`, {...requestBody})
        .then(res=>{
            
            const payment = res.data;
            // for (const iterator of this.products) {
            //     if(iterator.id === productId){
            //         let index = iterator.materials.findIndex(value => value.id === payment.id);
            //         iterator.materials.splice(index, 1, {...payment})
            //     }
            // }
            let index = this.product.materials.findIndex(value => value.id === payment.id);
            this.product.materials.splice(index, 1, {...payment})
            //
            callbk();
        })
        .catch(console.error);
    }

    deleteMaterials = (productId, paymentId) => {
        http.delete(`product/${productId}/material/${paymentId}`)
        .then(res=>{

            // for (const iterator of this.products) {
            //     if(iterator.id === productId){
            //         let index = iterator.materials.findIndex(value => value.id === paymentId);
            //         iterator.materials.splice(index, 1)
            //     }
            // }
            let index = this.product.materials.findIndex(value => value.id === paymentId);
            this.product.materials.splice(index, 1)
            
        })
        .catch(console.error);
    }

    // CustOrder


}

export const productStore = new ProductStore()