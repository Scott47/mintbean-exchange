import { Route } from "react-router-dom";
import React, { useState } from "react";
import ExchangeGET from "./components/ExchangeGET"

const ApplicationViews = () => {
    const [ currency ] = useState({})



    return (
        <React.Fragment>
          <Route render={props => <ExchangeGET {...props} />} />


          </React.Fragment>
  );
};

export default ApplicationViews