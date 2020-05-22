import React from 'react';
import { connect } from 'react-redux';

class CustomerResults extends React.Component {
  render() {
    const results = this.props.results.dbcResults;
    console.log(results);
    if (
      results.customerPolicy &&
      results.customerIndustryGovernance &&
      results.customerProcesses &&
      results.customerPracticesMeasured &&
      results.customerOptimizationAndAutomation
    ) {
      return (
        <div>
          <h1>Results: </h1>
          <h2>Industry Compliance</h2>
          <p>{results.customerIndustryGovernance.message}</p>
          <h2>Policy</h2>
          <p>{results.customerPolicy.message}</p>
          <h2>Process</h2>
          <p>{results.customerProcesses.message}</p>
          <h2>Practices Measured</h2>
          <p>{results.customerPracticesMeasured.message}</p>
          <h2>Optimization and Automation</h2>
          <p>{results.customerOptimizationAndAutomation.message}</p>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    results: state
  };
};

export default connect(mapStateToProps)(CustomerResults);
