import React, { useEffect, useState } from "react";
import ExchangeTable from "./ExchangeTable"

//Author: Scott Silver
//Purpose: Display Currency associated with fetch.
//Methods: GET Currency

const ExchangeGET = props => {
  const [myCurrency, setMyCurrency] = useState([]);

  const getMyCurrency = () => {
    fetch(`https://v6.exchangerate-api.com/v6/0a2319c23c1859c60e2f4c47/latest/EUR`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {setMyCurrency(data)
      })
};
useEffect(
  () => {
    setMyCurrency(getMyCurrency())
    console.log(myCurrency);
  }, []);

  return (
    <>

      <div className="myCurrency-Div">
        {myCurrency > 0 ? (

          myCurrency.conversion_rates(myCurrency).forEach(currency => {
            return (
              <div
                key={currency}
                mycurrency={currency}
                getMyCurrency={getMyCurrency}
              />
             )
            })
        ) : (
          <p>You have no money</p>
        )}
      </div>
    </>
  );
}

export default ExchangeGET;
