import { makeAutoObservable } from "mobx";
import http from "../utils/http";

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
    constructor(){
        makeAutoObservable(this)
    }


    // snap
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
                return listfilter.sort((a,b)=> a.cdate - b.cdate);
            case 'studio':
                return listfilter.sort((a,b) => a.sampleOrder.manufactureDates - b.sampleOrder.manufactureDates)
            case 'factory':
                return listfilter.sort((a,b) => a.mdate - b.mdate)
            
            default:
                return listfilter
        }

        
    }
    // Payment 
    newPayment = (productId, requestBody) => {
        http.post(`product/${productId}/payment`, {...requestBody})
        .then(res=>{
            
            for (const iterator of this.products) {
                if(iterator.id === productId)
                    iterator.payments.push({...res.data})
            }

          
        })
        .catch(console.error);
    }

    updatePayment = (productId, requestBody, callbk) => {
        http.put(`product/${productId}/payment`, {...requestBody})
        .then(res=>{
            
            const payment = res.data;
            for (const iterator of this.products) {
                if(iterator.id === productId){
                    let index = iterator.payments.findIndex(value => value.id === payment.id);
                    iterator.payments.splice(index, 1, {...payment})

                }

            }
            //
            callbk();
        })
        .catch(console.error);
    }

    deletePayment = (productId, paymentId) => {
        http.delete(`product/${productId}/payment/${paymentId}`)
        .then(res=>{

            for (const iterator of this.products) {
                if(iterator.id === productId){
                    let index = iterator.payments.findIndex(value => value.id === paymentId);
                    iterator.payments.splice(index, 1)
                }
            }
           
        })
        .catch(console.error);
    }

    // payment


}

export const productStore = new ProductStore()