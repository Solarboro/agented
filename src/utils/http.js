import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";



const http = axios.create({
    baseURL: process.env.REACT_APP_BE_API,
    timeout: 3000
});


http.interceptors.request.use(
    config => {

        //
        nProgress.start();

        console.info(config)
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
        console.info("start")
        console.info(error)
        console.info("end")
     
        return Promise.reject(error);
    }
)

export default http