import { observer } from "mobx-react-lite";
import { Outlet, useNavigate } from "react-router-dom";
import './index.scss'
import { HomeOutlined, LockOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { userStore } from "../../store/userStore";
import useLogin from "../../comp/login";
import useAPIKey from "../../hooks/useAPIKey";
import { App, Dropdown } from "antd";


function AgentHome(){


    //
    const navt = useNavigate();


    // login
    const {message} = App.useApp();
    const login = useLogin();
    const [value, setValue] = useAPIKey();
 
    // login panael
    const loginTo = (values, callbk) => {

        userStore.login(values, accessToken =>{ setValue(accessToken); callbk();}, message)
    }

    // dropdown
    const getItems = () => {
        let items = [
          {
              key: '11',
              label: '个人信息', 
              icon: <UserOutlined />
          },
          {
              key: '12',
              label: '密码修改', 
              icon: <LockOutlined className="site-form-item-icon" />
          },
          {
              type: 'divider'
          },
          
        ];

        //
        items.push(
            {
              key: '21',
              label: '退出登录',
              icon: <LogoutOutlined />
            }
          );
    
        return items;
    }

    const onClick = ({key})=>{
        switch (key) {
          case '11':
            // setOpen(true);
            break;
          case '12':
            // form.resetFields();
            // setPassModal(true);
            break;
          case '31':
            // newUserForm.resetFields();
            // setopenNewUser(true);
            break;
          case '32':
            break;
          case '21':
            userStore.logout();
            setValue('');
            navt("/");
          default:
            break;
        }
    }

    return(
        <>
       
        <div className='appnav-c'>
            <HomeOutlined onClick={() => navt("/")}/>

            <div>G a l a x y . A r t</div>

            {
                userStore.isLogin ? 
                    <Dropdown
                        menu={{items: getItems(),onClick}}
                        arrow
                        trigger={['click']}
                    >
                        <UserOutlined  /> 
                    </Dropdown>
                    
                : 
                    <LoginOutlined onClick={()=>login(loginTo)} />
            }
    
        </div>




        <div className="appcontent">
            <Outlet/>
        </div>
        </>
    )


}

export default observer(AgentHome)