import { App, Button, Divider, QRCode } from 'antd';
import './home.scss'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../../store/userStore';
import { BarChartOutlined, CaretRightOutlined } from '@ant-design/icons';

function HomeEntity () {

    const nav = useNavigate()
    const {message} = App.useApp()

    const toHome = ()=>{


      switch (true) {
        case userStore.isAgent :
          nav('/product')
          break;
        case userStore.isStudio :
          nav('/studio');
          break;
        default:
          message.info('请登录!').then(()=>nav("/"))
          break;
      }
    }

    const toStatistic =() =>{
      nav('/statistic');

    }


    return (
            
        <div className='App-Home'>            
            <Divider >
     
            <QRCode
                
                errorLevel="H"
                value={window.location.href}
                // icon={`${window.location.href}/favicon.ico`}
            />
            QR Code
            </Divider>

            <p className='line animation'>
               科 技 创 未 来
            </p>

            <p className='line animation2'>
                银 河 定 制 成 就 生 活 之 美 !
            </p>

        

            <Button icon={<CaretRightOutlined />} type='primary' size='middle' onClick={toHome} style={{width: '50%'}}>开 始</Button>
            <Button icon={<BarChartOutlined />} type='primary' size='middle' onClick={toStatistic} style={{width: '50%'}}>统 计</Button>
        </div>
    )
}

export default  observer(HomeEntity);