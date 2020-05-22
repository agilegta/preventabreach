import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="introduction__container">
      <div className="introduction__container--header">
        <h1>Prevent A Data Breach</h1>
      </div>
      <div className="introduction__container--content">
        <p>
          <br /> No data breaches aren't just an IT issue,
          <br />
          <br />
          As a matter of fact good data governance and maturity go a long way to
          better performance in this disruptive era, and can also help reduce
          risk which could lead to a data breach.
        </p>
        <h4
          className="introduction__container--header"
          style={{ paddingTop: '1.5rem' }}
        >
          Click below to see how you can contribute to preventing a data breach
          in your organization.
        </h4>
        <Link
          style={{ marginTop: '1.5rem' }}
          className="introduction__container--button"
          to="/form"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default Intro;
