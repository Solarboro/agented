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

const Home = lazy(()=>import('./pages/home'));
const About = lazy(()=>import('./pages/about'));
const ProductSummary = lazy(()=>import('./pages/product/summary'));
const ProductDetail = lazy(()=>import('./pages/product/detail'));


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
          <NavLink className={getActive} to="/">Home</NavLink>
          <NavLink className={getActive} to='about'>About</NavLink>
          <NavLink className={getActive} to='product'>Product</NavLink>
          {/* <Link to='/'>Home</Link>
          <Link to='about'>About</Link> */}
          
          <Suspense>
            <Routes>
              <Route index element={<Home />} />
              <Route path='about' element={<AgentRoute> <About /></AgentRoute>} />
              <Route path='product' element={<AgentRoute> <ProductSummary /></AgentRoute>} />
              <Route path='product/detail' element={<AgentRoute> <ProductDetail /></AgentRoute>} />
            </Routes>
          </Suspense>
        </HashRouter>


      </App>
    </ConfigProvider>
    </div>
  )
}

export default MyApp;
