import React from "react";
import { Table, Container } from 'reactstrap'
import './ExchangeTable.css'



const ExchangeTable = props => {
  return (
    <>
    <Container>

        <Table dark-light size="sm" hover bordered className='report'>
            <thead>
            <tr className='report-head'>
                <th>Currency</th>
                <th>Rate</th>

            </tr>
            </thead>
            <tbody>
            {
                props.reports.map(report => {

                    return (
                        <tr className='report'>
                        <td>{}, {}</td>
                        <td>{}</td>

                        </tr>
                    );
                })
            }
            </tbody>
        </Table>
        </Container>

    </>
  );
};

export default ExchangeTable;
