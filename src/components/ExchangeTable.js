import React from "react";
import { Table, Container } from "reactstrap";
import "./ExchangeTable.css";

const ExchangeTable = (props) => {
  return (
    <>
    <Container>
        <Table dark-light size="sm" hover bordered className='report'>
            <thead>
            <tr className='report-head'>
                <th>Country</th>
                <th>Rate</th>
            </tr>
            </thead>
            <tbody>
        {Object.entries(props.currency).map(currency => {
             return ( <tr className='report' key={currency[0]}>
                <td>{currency[0]}</td>
                <td>{currency[1]}</td>
            </tr>
             )
            })
        }
         </tbody>
         </Table>
    </Container>
    </>
  );
};

export default ExchangeTable;
