import { useEffect, useState } from "react";



export default function useAPIKey(){

    // get from localstorage
    // set to localstorage
    //
    const KEY = "API_KEY"

    // get Default
    const [value, setValue] = useState(localStorage.getItem(KEY));
    // const [value, setValue] = useState(defaultValue);

    // sync up to localstorage
    useEffect(()=>{
        value || localStorage.removeItem(KEY);
        value && localStorage.setItem(KEY, value);
    },[value]);

    // return
    return [value, setValue];
}