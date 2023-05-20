import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
      <HashRouter basename='agented'>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      
      <Routes>

        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
      </Routes>
      </HashRouter>
      
    

      <div>foot</div>
 
    </>
  )
}

export default App;
