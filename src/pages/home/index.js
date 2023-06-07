import { Button, Divider, QRCode } from 'antd';
import './home.scss'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../../store/userStore';

function HomeEntity () {

    const nav = useNavigate()


    const toHome = ()=>{


      switch (true) {
        case userStore.isAgent :
          nav('/product')
          break;
      
        default:
          nav("/")
          break;
      }
    }


    return (
            
        <div className='App-Home'>            
            <Divider >
     
            <QRCode
                
                errorLevel="H"
                value={window.location.href}
                icon={`${window.location.href}/favicon.ico`}
            />
            QR Code
            </Divider>

            <p className='line animation'>
               科 技 创 未 来
            </p>

            <p className='line animation2'>
                银 河 定 制 成 就 生 活 之 美 !
            </p>

        

            <Button type='primary' size='middle' onClick={toHome} style={{width: '50%'}}>开 始 !</Button>
        </div>
    )
}

export default  observer(HomeEntity);