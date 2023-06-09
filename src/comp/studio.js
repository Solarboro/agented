import { Navigate } from "react-router-dom"
import { userStore } from "../store/userStore"



const StudioRoute =  ({children})=>{
    return userStore.isStudio ? <>{children}</> : <Navigate to="/" />
}

export default StudioRoute;