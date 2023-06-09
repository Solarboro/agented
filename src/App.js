import './App.css';
import { HashRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
// import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
// dayjs.locale('en');
// dayjs.locale('zh-cn');
import {App} from 'antd';
import AgentRoute from './comp/agent';
import AgentHome from './pages/agent';
import Pending from './pages/yun/pending';
import SubStandardStore from './pages/yun/subStandardStore';
import Yun from './pages/yun';
const Studiodetail = lazy(()=>import('./pages/studiodetail'));
const PersonalInfo = lazy(()=>import('./pages/personalInfo'));
const PaymentInfo = lazy(()=>import('./pages/paymentInfo'));
const StudioStatictis = lazy(()=>import('./pages/studioStatictis'));

const Home = lazy(()=>import('./pages/home'));
const About = lazy(()=>import('./pages/about'));
const ProductSummary = lazy(()=>import('./pages/product/summary'));
const ProductDetail = lazy(()=>import('./pages/product/detail'));
const PaymentSummary = lazy(()=>import('./pages/payment'));

// YUn
const YunProviderPanel = lazy(()=>import('./pages/yun/provider'));

const getActive = ({isActive})=>{
  return isActive ? 'activeDemo': '';
}
function MyApp() {

  const [locale, setLocal] = useState(zhCN);
  return (
    <div className='myappc'>
    <ConfigProvider 
        locale={locale} 
        componentSize='small'
        theme={
          {
            token:{
              // colorText: 'red',
              colorTextHeading: 'grey',
              colorPrimary: '#006564'
            }
          }
        }
    
    
    >
      <App>
    
        <HashRouter >
          
          <Suspense>
            <Routes>

              <Route path='/' element={<AgentHome />}>
                
                <Route index element={<Home />} />
                <Route path='/studio' element={<Studiodetail />}></Route>
                <Route path='/statistic' element={<StudioStatictis />}></Route>
                <Route path='/pinfo' element={<PersonalInfo />}></Route>
                <Route path='/payinfo' element={<PaymentInfo />}></Route>
                <Route path='about' element={<AgentRoute> <About /></AgentRoute>} />
                <Route path='product' element={<AgentRoute> <ProductSummary /></AgentRoute>} />
                <Route path='product/detail/:productStatus' element={<AgentRoute> <ProductDetail /></AgentRoute>} />


                <Route path='/yun' element={<Yun />}></Route>
                <Route path='/yunProvider' element={<YunProviderPanel />}></Route>
                <Route path='/yunPending' element={<Pending />}></Route>
                <Route path='/yunSubStore' element={<SubStandardStore />}></Route>
                
              </Route>

              <Route path='/payment' element={<PaymentSummary />}></Route>

            </Routes>
          </Suspense>
        </HashRouter>


      </App>
    </ConfigProvider>

    </div>
  )
}

export default MyApp;
