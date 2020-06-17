import React from "react";
import { Table, Container } from "reactstrap";
import "./ExchangeTable.css";

const ExchangeTable = (props) => {
  return (
    <>
    <Container>
      {Object.conversion_rates(props.myCurrency).forEach(currency => {
          console.log(currency)
     return (<div className="report">{currency.conversion_rates}</div>
     )
      })
    }
    </Container>
    </>
  );
};

export default ExchangeTable;
