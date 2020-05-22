import React from 'react';
import { Link } from 'react-router-dom';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';

const FinanceForm = () => {
  return (
    <div className="form__container">
      <h3>
        <span className="light-blue">Your financial data is critical</span> and
        is sought after by unwanted sources.
      </h3>
      <p className="margin-bottom-medium">Protect it</p>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <QuestionFive />
      <br />
      <br />
      <Link className="button-small" to="/form">
        Go back
      </Link>
    </div>
  );
};

export default FinanceForm;
