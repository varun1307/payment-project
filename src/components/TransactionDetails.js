import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
 export function TransactionDetails() {

  const [t, setTransaction] = useState({});
  const params = useParams();
  console.log(t)



 useEffect(() => {
    axios
      .get("http://localhost:8080/transaction/" + params.transactionId)
    //   .then(({ t }) => setTransaction(t))
      .then((res) =>{ 
        //   console.log(res.data)
        setTransaction(res.data);
        // console.log(t);
})
      .catch((err) => console.log("error occured"));
  }, []);


    return (
        <div className="container">
           {/* Object.keys(t.t).map(
                ts => <p>
                    {t}
                </p>
            ) */}
        {/* <center> */}
            <h2>Transaction Details</h2>
         {t &&   <>
         
            <h3>Customer Details</h3>
            <div><p><pre>{JSON.stringify(t.sender,null,2)}</pre></p></div> 
            <h3>Receiver Details</h3>
            <p><b>Receiver Name : </b>{t.receiverAccountHolderName}</p>
            <p><b>Bank :</b><pre>{JSON.stringify(t.bank,null,2)}</pre></p>
            <p><b>Amount: {t.amount}</b></p>
            <p><b>Transaction Time : </b>{t.transactionTime}</p>
            <p><b>Transaction Status :</b> {t.status}</p>    
            
           </>
 }
{/* </center> */}
        </div>
         
    )
}