import { Navigate } from "react-router-dom"
import { userStore } from "../store/userStore"



const AgentRoute =  ({children})=>{
    return userStore.isAgent ? <>{children}</> : <Navigate to="/" />
}

export default AgentRoute;