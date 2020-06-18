import React, { useEffect, useState } from "react";
import ExchangeTable from "./ExchangeTable";

//Author: Scott Silver
//Purpose: Display Currency associated with fetch.
//Methods: GET Currency

const ExchangeGET = (props) => {
  const [myCurrency, setMyCurrency] = useState({ conversion_rates: {} });

  const getMyCurrency = () => {
    fetch(
      `https://v6.exchangerate-api.com/v6/9976b2b1ce62fc782f97dd26/latest/EUR`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMyCurrency(data);
      });
  };

  useEffect(
    () => {
       getMyCurrency();
    }, []);

  return (
    <>
      <div className="myCurrency-Div">
        {Object.keys(myCurrency.conversion_rates).length > 0 ? (

          <ExchangeTable currency={myCurrency.conversion_rates} />
        ) : (
          <p>You have no money</p>
        )}
      </div>
    </>
  );
};

export default ExchangeGET;
