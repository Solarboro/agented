import { Navigate } from "react-router-dom"
import { userStore } from "../store/userStore"



const AgentRoute =  ({children})=>{

    !userStore?.isAgent && alert('login please')
    return userStore?.isAgent ? <>{children}</> : <Navigate to="/" />
}

export default AgentRoute;