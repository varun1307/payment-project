import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Panel } from 'primereact/panel';
export function TransactionDetails() {
    const [customer, setCustomer] = useState({})
    const params = useParams()
    useEffect(() => {
        axios.get("http://localhost:8080/empget/" + params.id)
            .then(res => setCustomer(res.data))
            .catch(err => console.log("Couldnt fetch customer details"))
    }, [])
    return (
        <>
            <h3>Customer Details : {params.id} </h3>
            <p>{customer.sender.customerId}</p>
            <p>{customer.bank.bic}</p>
            <p>{customer.receiverAccountHolderName}</p>
           <p>{customer.amount}</p>
            <div className="mb-3">
                <Link  to="/table">Go Back to Customers Page</Link>
            </div>
            
                
           
         
        </>
    )
}