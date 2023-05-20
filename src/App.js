import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      
      <Routes>

        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
      </Routes>
      </BrowserRouter>
      
    

      <div>foot</div>
 
    </>
  )
}

export default App;
