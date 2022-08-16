import logo from "./logo.svg";
import "./App.css";
import { MenuBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./FormDemo.css";
import { TransactionDetails } from "./components/TransactionDetails";
import { CustomerList } from "./components/CustomerList";

import { HomePage } from "./components/HomePage";
import { Emplogin } from "./components/Emplogin";
import { TransactionPage } from "./components/TransactionPage";
import { EmpDash } from "./components/EmpDash";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Emplogin />} />
        <Route path="/tran" element={<TransactionPage />} />
        <Route path="/empdash" element={<EmpDash />} />
        <Route path="/cust" element={<CustomerList />} />
        {/* <Route path="/details/:transactionId" element={<TransactionDetails/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
