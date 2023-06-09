import { Navigate } from "react-router-dom"
import { userStore } from "../store/userStore"



const AgentRoute =  ({children})=>{

    !userStore?.isAgent && alert('login please')
    return userStore?.isAgent ? <>{children}</> : <Navigate to={process.env.REACT_APP_MAIN_URL} />
}

export default AgentRoute;