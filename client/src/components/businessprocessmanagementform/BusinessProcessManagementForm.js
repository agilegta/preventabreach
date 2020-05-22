import React from 'react';
import { Link } from 'react-router-dom';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';

const BusinessProcessManagementForm = () => {
  return (
    <div className="form__container">
      <h3>
        Your data is what makes your business,{' '}
        <span className="light-blue">and people want it.</span>
      </h3>
      <p class="margin-bottom-medium">
        Is your current business processes up to par?
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

export default BusinessProcessManagementForm;
