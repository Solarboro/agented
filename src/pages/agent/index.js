import { observer } from "mobx-react-lite";
import { Outlet, useNavigate } from "react-router-dom";
import './index.scss'
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";


function AgentHome(){


    //
    const navt = useNavigate();


    return(
        <>
       
        <div className='appnav-c'>
            <HomeOutlined onClick={() => navt("/")}/>

            <div>G a l a x y . A r t</div>

       
            <LoginOutlined />
        </div>




        <div className="appcontent">
            <Outlet/>
        </div>
        </>
    )


}

export default observer(AgentHome)