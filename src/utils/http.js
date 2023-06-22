import axios from "axios";
import { message } from "antd";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";
nProgress.configure({showSpinner: false});


const http = axios.create({
    baseURL: process.env.REACT_APP_BE_API,
    timeout: 3000
});


http.interceptors.request.use(
    config => {

        //
        nProgress.start();

        // append access token
        if(localStorage.getItem('API_KEY') && config.url !== 'login')
            config.headers.Authorization = `Bearer ${localStorage.getItem('API_KEY')}`

        // todo
        return config;
    },
    error => {
        //
        nProgress.done();
  
        return Promise.reject(error);
    }
)

http.interceptors.response.use(
    response => {
   
        //
        nProgress.done();

        return response;
    },
    error => {
        //
        nProgress.done();

   
          
        if(error?.response?.status !== 200){

            switch (error?.response?.status) {
                case 403:
                    message.warning("请重新登录 !").then(()=>{
                        userStore.logout();
                        window.location.href = "/";
                    })
                    
                    break;
            
                default:
                    if(error?.response )
                        message.error(error?.response?.data?.message)

                    message.error(`请检查网络连接 / 联系管理员 ${error.message}`)
                    break;
            }
        }
     
        return Promise.reject(error);
    }
)

export default http