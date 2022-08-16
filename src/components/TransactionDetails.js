import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
export function TransactionDetails() {
    const [customer, setCustomer] = useState({})
    const params = useParams()
    useEffect(() => {
        axios.get("http://localhost:8080/transaction/"+params.id)
            .then(res => setCustomer(res.data))

            .catch(err => console.log("Couldnt fetch customer details"))
    }, [])


    return (
        <>
            {/* <h3>Customer Details : {params.id} </h3> */}
            <p>{customer.data}</p>
            {/* <p>{customer.sender.customerId}</p>
            <p>{customer.bank.bic}</p>
            <p>{customer.receiverAccountHolderName}</p>
           <p>{customer.amount}</p> */}
            <div className="mb-3">
            </div>
            
                
           
         
        </>
    )
}