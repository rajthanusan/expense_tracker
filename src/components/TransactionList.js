import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const {transacations}= useContext(GlobalContext);

 

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transacations.map=(transacation => (
        <li className="minus">
          {transacation.text} <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>))}
        
      </ul>
    </>
  );
};

export default TransactionList;
