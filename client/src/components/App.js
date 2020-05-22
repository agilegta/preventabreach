import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import history from '../history';
import Form from './Form';
import CustomerForm from './customerform/CustomerForm';
import FinanceForm from './financeform/FinanceForm';
import HumanCapitalManagementForm from './humancapitalmanagementform/HumanCapitalManagementForm';
import BusinessProcessManagementForm from './businessprocessmanagementform/BusinessProcessManagementForm';
import Intro from './Intro';
//searchbar component renders the searchbar allowing the user to search for the city
//cityresults outputs the cities based on the search
//restaurantresults renders the restaurant results based on the selected city in the cityresults component

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Route path="/" exact component={Intro} />
        <Route path="/form" exact component={Form} />
        <Route
          path="/form/human-capital-management"
          exact
          component={HumanCapitalManagementForm}
        />
        <Route
          path="/form/business-process-management"
          exact
          component={BusinessProcessManagementForm}
        />
        <Route path="/form/customer" exact component={CustomerForm} />
        <Route path="/form/finance" exact component={FinanceForm} />
      </Router>
    </div>
  );
};

export default App;
