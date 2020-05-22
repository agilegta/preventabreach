import React from 'react';
import { Link } from 'react-router-dom';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';

const HumanCapitalManagementForm = () => {
  return (
    <div className="form__container">
      <h3>
        How your organization handles your data{' '}
        <span className="light-blue">is based on the people you hire.</span>
      </h3>
      <p className="margin-bottom-medium">
        What measures have you taken to ensure that your data is not at risk
      </p>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <QuestionFive />
      <br />
      <br />
      <Link className="button-small" to="/form">
        BACK
      </Link>
    </div>
  );
};

export default HumanCapitalManagementForm;
