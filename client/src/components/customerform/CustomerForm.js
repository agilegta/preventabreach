import React from 'react';
import { Link } from 'react-router-dom';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';

const CustomerForm = () => {
  return (
    <div className="form__container">
      <h3>
        The last thing your organization wants is{' '}
        <span className="light-blue">
          unauthorized access to your customer data
        </span>
      </h3>
      <p className="margin-bottom-medium ">
        What do you have in place to protect it?
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

export default CustomerForm;
