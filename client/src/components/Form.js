import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="form__container">
      <div className="introduction__container--header">
        <h2>So how does it work?</h2>
      </div>
      <br />
      <div className="form__container--content margin-bottom-medium">
        <p>
          We split your organization into four domains, each domain has 5
          questions that you need to answer.
          <br />
          Based on your answers, we try to guide you to implementing the correct
          measures to mitigate any potential data breaches
        </p>
      </div>
      <div className="form__container--subforms margin-bottom-medium">
        <Link className="button" to="/form/finance">
          Finance
        </Link>

        <Link className="button" to="/form/customer">
          Customer
        </Link>

        <Link className="button" to="/form/business-process-management">
          Business Process Management
        </Link>

        <Link className="button" to="/form/human-capital-management">
          Human Capital Management
        </Link>
      </div>

      <Link to="/">BACK</Link>
    </div>
  );
};

export default Form;
