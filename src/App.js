import logo from './logo.svg';
import './App.css';
import {MenuBar} from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import './FormDemo.css';

import {HomePage} from './components/HomePage';
import { Emplogin } from './components/Emplogin';
import { TransactionPage } from './components/TransactionPage';
import { EmpDash } from './components/EmpDash';
function App() {
  return (
    <div className="App">
      
      <MenuBar/>
      <Routes>
      
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Emplogin/>}/>
        <Route path="/tran" element={<TransactionPage/>}/>
        <Route path="/empdash" element={<EmpDash/>}/>



      </Routes>
      
    </div>
  );
}

export default App;
